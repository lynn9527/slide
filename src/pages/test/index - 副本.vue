<template>
    <div class="container">
        <div class="videoPlay" v-if="videoUrl !== '' && videoPreviewState === true">
           
        </div>
        <div class="main-header">
            <!-- <img src="../../../../assets/images/video-maker.png"> -->
            <input class="uploadVideoButtom" id="files" type="file" name="file" ref="videoFile" hidden accept="video/*" />
            <div v-if="!isInitToken">
                <!-- <div class="header-wait">Loading…</div> -->
                <img src="../../assets/images/video-upload-wait.png">
            </div>
            <div v-else>
                <img class="uploadVideoButtom1 needsclick" src="../../assets/images/video-upload.png" v-if="videoUrl === ''" @click.stop="uploadVideo">
                <!-- <button class="uploadVideoButtom1 needsclick"  v-if="videoUrl === ''" @click="uploadVideo">
                    Upload
                </button> -->

            </div>

            <!--进度条-->
            <div class="header-footer">
                <div class="footer-progress" v-if="fileList.length !== 0">
                    <div class="progress">
                        <div class="realProgress" :style="{width: uploadProgress}"></div>
                    </div>
                    <div v-if="uploadProgress === 0" class="progressTips">0%</div>
                    <div v-else class="progressTips">{{uploadProgress}}</div>
                </div>
                <span>Friendly reminder: player preview only supports mp4 and mov format</span>
            </div>


        </div>
        <div class="main-form">
            <div class="form-row">
                <span>Column</span>
                <div class="row-text" placeholder="Please select a section" @click.stop.prevent="chooseVideoType">{{this.selectedVideoVal}}</div>
                <div class="row-right">
                  <!--  <img src="./../../../../../../static/icon/pullDown.png" />  -->
                </div>
            </div>
            <div class="form-row">
                <span>Title</span>
                <input type="text" v-model="inputTitle"  placeholder="Please enter a title">
            </div>
            <div class="tag-des">
                <span>{{wordsCount}}/30</span>
            </div>
            <div class="form-row" v-show="selectedVideoVal != 'Group Rally for Spring Festival'">
                <span>Tag</span>
                <ul>
                    <li v-for="(item, index) in tagsList"
                        :key="index"
                        @click.stop="onLiClick(item, index, selectedVideoVal)"
                        :class="{active: checkTagIndex === index && selectedVideoVal === checkTagType}">{{item.infoName}}
                    </li>
                </ul>
            </div>
            <div class="tag-des" v-show="selectedVideoVal != 'Group Rally for Spring Festival'">
                <span>Tag Your Video</span>
            </div>
            <div class="form-button">
                <img v-if="videoUrl === ''" src="../../assets/images/video-publish-no.png">
                <img v-else src="../../assets/images/video-publish-ok.png" @click.prevent.stop="releaseVideo">
            </div>



        </div>

        


    </div>
</template>

<script>
    import Vue from 'vue';


    export default {
        name: 'home',
        data(){
            return {
                signature: '',
                listNum: 1,
                videoFlag: false,
                uploadList: [],
                uploadProgress: 0,      //进度
                endFlag: false,
                fileList: [],           //本地添加文件数组
                videoUrl: '',           //云视频播放地址
                assetId: '',            //媒资编号assetId
                videoSize: 0,           //视频大小
                chooseType: {
                    folderId: '',
                    folderName: '',       //视频类型名称
                    folderNumber: '',     //视频类型编号
                    isChoose: '',
                    parentFolderNumber: ''
                },
                inputTitle: '',         //视频名称
                courseListState: false,
                listFolder: [],
                uploadCos: null,
                uploadTaskId: null,
                alertCMPState: false,
                videoPreviewState: true,
                publicAlertMassage: '',
                vodClient: null, // 实例声明
                canUpload: false, // 是否可以开始上传
                videoId: '', //播放器id
                sourceOk: false, //是否有播放源
                videoOption: {
                    type: Object,
                    default: () => {
                    return {
                        width: '100%',
                        height: '360px',
                        // 是否显示控制栏，包括进度条，播放暂停按钮，音量调节等组件
                        controls: true,
                        // 是否开启播放质量数据上报功能
                        stat: true
                    }
                    }
                },
                isShowVideo: false,//是否显示视频类型弹框
                isShowFlag: false, //是否显示标签类型弹框
                selectedVideoVal: '',//视频类型选择的值
                selectdFlagVal: '',//标签类型选择的值
                videoOnChangeVal: '',//视频类型改变时记录
                flagOnChangeVal: [],//标签类型改变时记录
                tagsList: [],//标签集合
                videoList: [//视频类型集合
                    {
                    flex: 1,
                    values: '',
                    className: 'slot1',
                    textAlign: 'center'
                    },{
                    divider: true,
                    content: '',
                    className: 'slot1'
                    }
                ],
                isInitToken: false,  //创建华为云视频临时凭据是否成功
                checkTagIndex: '',//选中的标签索引
                checkTagType: '',//选中的标签类型
                checkTagCode: '',//选中的标签编码
                wordsCount: 0,//标题字数计算
            };
        },
        created() {
            
        },
        mounted() {
            //初始化播放器编号
            this.videoId = 'video-id-' + Math.floor(Math.random() * 10000000000);
           
        },
        methods:{
            //家人来了类型视频上传校验
            checkIsFamily(){
                return new Promise((resolve, reject) => {
                    this.$api['video/checkAddMaterail']()
                        .then(res => {
                            resolve(res);
                        })
                        .catch(err => {
                            reject(err);
                            console.error(err.message);
                        });
                });
            },
            async uploadVideo() {


                this.$refs.videoFile.value = '';
                this.$refs.videoFile.click();
                this.fileList = [];
            },
            //获取选择的视频编号  store 类型对应sessionStorage,type 视频video标签为tag
            getTypeId(store, type){
                let that = this;
                let folderNumber = '',
                    storeList = '';
                //获取视频类型编号
                if(store !== "undefined" && store !== null){
                    storeList = JSON.parse(store);
                    if(type === 'video'){
                        storeList.some((item, index) => {
                            let description = item.description ? '(' + item.description + ')' : '';
                            return (that.selectedVideoVal === item.folderName + description) &&  (folderNumber = item.folderNumber);
                        });
                    }else if(type === 'tag'){
                        storeList.some((item, index) => {
                            return (that.selectdFlagVal === item.infoName) &&  (folderNumber = item.infoCode);
                        });
                    }
                }
                return folderNumber;
            },
            //视频类型取消
            btnVideoCancel(){
                this.isShowVideo = false;
                if(this.$refs.videoPicker.getValues()[0] !== this.selectedVideoVal){
                    this.$refs.videoPicker.setValues([this.selectedVideoVal]);//选择后取消,重置选择器为确认的结果
                }
            },
            //视频类型确认
            btnVideoSure(){
                this.isShowVideo = false;
                this.selectedVideoVal = this.videoOnChangeVal[0];
                this.checkTagCode = '';//重置已选择标签编码
                this.checkTagIndex = '';
                this.checkTagType = '';

                this.getTagsList(this.getTypeId(sessionStorage.getItem('upload_videoType'), 'video'));
            },
            //触发视频类型弹框
            chooseVideoType(){
                this.isShowVideo = !this.isShowVideo;
            },
            //视频类型值改变事件
            onVideoValChange(picker, values){
                this.videoOnChangeVal = values;
                console.log(this.videoOnChangeVal);

            },
            chooseCourse() {
                let self = this;
                self.courseListState = true;
            },
            videoChange(e) {
                this.vodClient.startUpload(0);
            },
            //获取上传视频临时授权token信息
            async initUpload() {
                const {access, securityToken, secret} = await this.getUploadToken();
                const that = this;
                console.log(access, securityToken, secret);

                this.vodClient = new VodClient({
                    // 必选，临时凭证AK
                    access_key_id: access,
                    // 必选，临时凭证SK
                    secret_access_key: secret,
                    // 必选，临时凭证security_token
                    security_token: securityToken,
                    // 必选，项目ID project_id
                    project_id: '6c55a1679dde41f092c2314a8268b3a2',
                    // 必选，点播的终端节点Endpoint，默认值是 vod.cn-north-4.myhuaweicloud.com
                    vod_server: 'vod.cn-north-4.myhuaweicloud.com',
                    // 可选，点播终端节点端口号，默认值为空
                    vod_port: '',

                    // 开始上传
                    onUploadstarted: function(assetInfo) {
                    console.log(assetInfo.file.name + '开始上传');
                    },

                    // 上传进度
                    onUploadProgress: function(assetInfo) {
                    console.log('上传进度： '+assetInfo.progress);
                    that.uploadProgress = assetInfo.progress + '%';
                    },

                    // 合并段成功
                    onUploadSucceed: function(assetInfo) {
                    console.log('asse', assetInfo);
                    // console.log(assetInfo.file.name+" 合并段成功");
                    that.confirmAsset({
                        assetId: assetInfo.asset_id
                    });
                    console.log(' 合并段成功');
                    },

                    // 上传异常，上传失败
                    onUploadFailed: function(assetInfo, err) {
                    try {
                        let { msg } = err;
                            let message = String(msg).split(',');
                            message = message.length > 1 ? message[1] : 'upload error, please try again.';
                            that.fileList = [];
                            // Toast({
                            //     message,
                            //     duration: 2000
                            // });
                        console.log('上传异常1--------------');
                        console.log(assetInfo, err);
                    } catch (err) {
                        console.log('上传异常2--------------');
                        console.log(err);
                    }
                    },

                    // 若凭证失效，重新设置凭证并上传
                    onUploadTokenExpired: function() {
                    console.log('onUploadTokenExpired');
                    // 重新设置临时凭证并重新上传
                    this.vodClient.resumeUpload('ak', 'sk', 'security_token');
                    }


                });

                this.isInitToken = true;//创建临时凭据成功
            },
            //获取视频类型列表
            getListFirstFolder() {
                let refs = this.$refs.videoPicker;
                let videoStore = sessionStorage.getItem('upload_videoType');

                if(videoStore !== "undefined" && videoStore !== null){//启用缓存
                    videoStore = JSON.parse(videoStore);
                    this.bindDataTypeList(this.videoList[0], videoStore, refs, "video");
                }else{
                    // this.$api['video/videoType']()
                    // .then(res => {
                    //     if (res.code === 200) {
   
                    //     sessionStorage.setItem('upload_videoType', JSON.stringify(res.result));
                    //     this.bindDataTypeList(this.videoList[0], res.result, refs, "video");
                    //     }
                    //     console.log(res);
                    // })
                    // .catch(res => {
                    //     console.log(res);
                    // });
                    //接口无法提供英文版对应功能改为本地

                    var arr = [
                        {
                            description: '',//"员工个人才艺展示1",
                            folderId: 1,
                            folderName: "Talent Show",
                            folderNumber: "4E616746DCD7405284135DCA56173A03",
                            parentFolderNumber: "0"
                        },{
                            description: '',//"家庭成员节目表演1",
                            folderId: 2,
                            folderName: "Family Talent Show",
                            folderNumber: "4E616746DCD7405284135DCA56173A01",
                            parentFolderNumber: "0"
                        },{
                            description: '',//"部门团体新年贺词1",
                            folderId: 3,
                            folderName: "Group Rally for Spring Festival",
                            folderNumber: "4E616746DCD7405284135DCA56173A04",
                            parentFolderNumber: "0"
                        }
                    ];

                    sessionStorage.setItem('upload_videoType', JSON.stringify(arr));
                    this.bindDataTypeList(this.videoList[0], arr, refs, "video");
                    

            






                }
            },
            // list绑定数据列表 res数据源  refs绑定控件  type类型（视频类型|标签类型）
            bindDataTypeList(list, res, refs, type){
                //控件赋值
                list.values = res.map((item, index) => {

                    let description = item.description ? '(' + item.description + ')' : '';
                    //index === 0 && refs.setValues([description]) &&  this.getTagsList(item.folderNumber);

                    if(index === 0){
                    if(item.folderName === 'Family Talent Show' || item.folderName === 'Talent Show'){

                       this.getTagsList(item.folderNumber);
                    }else{

                    }

                    }

                    return item.folderName ? item.folderName + description : item.infoName;//数据字典字典为infoName
                });
                //初始化默认值

                if(type === "video"){
                    this.selectedVideoVal = refs.getValues()[0];
                }else{
                    this.selectdFlagVal = refs.getValues()[0];
                }
            },
            //根据视频类型获取对应标签类型列表
            getTagsList(videoType){
                let that = this;
                let refs = that.$refs.flagPicker;
                let tagStore = sessionStorage.getItem('upload_' + videoType);
                if(tagStore){//启用缓存
                    tagStore = JSON.parse(tagStore);
                    that.tagsList = tagStore;
                }else{
                let param = {
                        type: videoType,
                        language: 'en'
                }
                that.$api['common/getDictListByType'](param)
                .then(res => {
                    if (res.code === 200) {
                        sessionStorage.setItem('upload_' + videoType, JSON.stringify(res.result));
                        that.tagsList = res.result;
                    }
                    console.log(res);
                })
                .catch(res => {
                    console.log(res);
                });
                }
            },
            //点击标签时
            onLiClick(item, index, type){
                this.checkTagIndex = index;
                this.checkTagType = type;
                this.checkTagCode =item.infoCode;
            },
            //关联华为云视频到我们自己数据库
            async releaseVideo() {
                 if(this.selectedVideoVal === 'Family Talent Show'){//家人来了类型视频权限校验
                    let { code, message } = await this.checkIsFamily();
                    if(code !== 200){//校验家人来了视频类型
                        return false;
                    }
                    console.log('检查完了哦1-------------------------');
                }

                if(this.inputTitle === '' || this.inputTitle === null || this.inputTitle === undefined) {
                    // Toast({
                    //     message: 'Video title cannot be empty！',
                    //     duration: 2000
                    // });
                    return false;
                }
                if(this.checkTagCode === '' && this.selectedVideoVal !== 'Group Rally for Spring Festival'){
                    // Toast({
                    //     message: 'Please choose a tag that fits your video！',
                    //     duration: 2000
                    // });
                    return false;
                }



                Indicator.open({
                    text: 'Posting...',
                    spinnerType: 'fading-circle'
                });

                let folderNumber = this.getTypeId(sessionStorage.getItem('upload_videoType'), 'video'),//视频类型编号
                    materialNumber = this.assetId, //云视频编号
                    materialName = this.inputTitle,//视频名称
                    materialSize = this.videoSize,
                    materialUrl = '',
                    lableType = this.checkTagCode;//标签类型编号

                let params = {
                    folderNumber,
                    materialNumber,
                    materialName,
                    materialSize,
                    materialUrl,
                    lableType
                };

                this.$api['video/addMaterail'](params)
                    .then(res => {
                    Indicator.close();
                    console.log(res);
                    if (res.code === 200) {
                        this.$router.go(-1);
                    }
                })
                .catch(res => {
                    Indicator.close();
                    console.log(res);
                });

            },
            handleUpload() {
                this.vodClient.startUpload(0);
            },
            getUploadToken() {
                return new Promise((resolve, reject) => {
                    this.$api['video/getVideoToken']().then(res => {
                    resolve(res.result);
                    });
                });
            },
            //根据媒资ID获取视频云上播放地址
            getVideoPalyUrl(param){
                console.log(param);
                this.$api['video/queryAssetDetailReq'](param)
                    .then(res => {
                        console.log('materialUrl: '+ res.result.materialUrl);
                        this.videoUrl = res.result.materialUrl;
                        this.assetId = param.materialNumber;
                    })
                    .catch(err => {
                        console.error(err);
                    });

            },
            //确认资源
            confirmAsset(param) {
                this.$api['video/confirmAsset'](param)
                    .then(res => {
                    console.log('res: ' + JSON.stringify(res));
                    console.log('确认成功');
                    this.getVideoPalyUrl({
                        materialNumber: res.result.assetId
                    });
                    })
                    .catch(err => {
                    console.error(err);
                    });
            },
            // async initUpload() {
            //     const {access, securityToken, secret} = await this.getUploadToken();
            //     const that = this;
            //     console.log(access, securityToken, secret);

            //     this.vodClient = new VodClient({
            //         // 必选，临时凭证AK
            //         access_key_id: access,
            //         // 必选，临时凭证SK
            //         secret_access_key: secret,
            //         // 必选，临时凭证security_token
            //         security_token: securityToken,
            //         // 必选，项目ID project_id
            //         project_id: '6c55a1679dde41f092c2314a8268b3a2',
            //         // 必选，点播的终端节点Endpoint，默认值是 vod.cn-north-4.myhuaweicloud.com
            //         vod_server: 'vod.cn-north-4.myhuaweicloud.com',
            //         // 可选，点播终端节点端口号，默认值为空
            //         vod_port: '',

            //         // 开始上传
            //         onUploadstarted: function(assetInfo) {
            //         console.log(assetInfo.file.name + '开始上传');
            //         },

            //         // 上传进度
            //         onUploadProgress: function(assetInfo) {
            //         console.log('上传进度： '+assetInfo.progress);
            //         that.uploadProgress = assetInfo.progress + '%';
            //         },

            //         // 合并段成功
            //         onUploadSucceed: function(assetInfo) {
            //         console.log('asse', assetInfo);
            //         // console.log(assetInfo.file.name+" 合并段成功");
            //         that.confirmAsset({
            //             assetId: assetInfo.asset_id
            //         });
            //         console.log(' 合并段成功');
            //         },

            //         // 上传异常，上传失败
            //         onUploadFailed: function(assetInfo, err) {
            //         try {
            //             console.log(assetInfo, err);
            //         } catch (err) {
            //             console.log(err);
            //         }
            //         },

            //         // 若凭证失效，重新设置凭证并上传
            //         onUploadTokenExpired: function() {
            //         console.log('onUploadTokenExpired');
            //         // 重新设置临时凭证并重新上传
            //         this.vodClient.resumeUpload('ak', 'sk', 'security_token');
            //         }


            //     });

            //     this.isInitToken = true;//创建临时凭据成功
            // },
            getUploadParam(param) {
                return new Promise((resolve, reject) => {
                    this.$api['video/createAssetByFile'](param).then(res => {
                    console.log('getUploadParam:', res);
                    resolve(res.result);
                    });
                });
            },

            //上传视频到华为云
            upload(){
                const that = this;

                document.getElementById('files').addEventListener('change', function(event) {

                    Array.prototype.forEach.call(event.target.files, async function(file) {

                    if(that.selectedVideoVal === 'Family Talent Show'){//家人来了类型视频权限校验
              
                        let { code, message } = await that.checkIsFamily();
                        if(code !== 200){//校验家人来了视频类型
                            console.log('----------------------');

                            return false;
                        }
                        console.log('检查完了哦1-------------------------');
                    }

                    const suffixPos = file.name.lastIndexOf('.');
                    const fileName = file.name.slice(0, suffixPos);
                    const suffix = file.name.slice(suffixPos + 1).toUpperCase();

                    let format = suffix === 'MP4' ? true : (suffix === 'MOV' ? true : false);
                    if(!format){
                        // Toast({
                        //     message: 'Preview only supports mp4 and m3u8 formats',
                        //     duration: 2000
                        // });
                       that.fileList = [];
                       return false;
                    }


                    that.videoSize = file.size;
                    // 选择视频是否重复标志
                    var flag = false;
                    // 前台判断选择视频是否重复
                    if (that.fileList.length) {
                        for (var i = 0; i < that.fileList.length; i++) {
                        if (that.fileList[i].file.name == file.name) {
                            alert('Do n’t upload the same video twice');
                            flag = true;
                            break;
                        }
                        }
                        if (!flag) {
                        that.fileList.push({file: file, added: false});
                        }
                    } else {
                        that.fileList.push({file: file, added: false});
                    }

                    that.getUploadParam({
                        fileName,
                        suffix
                        })
                        .then(res => {
                        console.log(res);
                        const {
                            assetId,
                            target: {bucket, location, object}
                        } = res;
                        console.log('assetId: ' + assetId);
                        console.log('that', that.vodClient);
                        // 添加到上传文件列表
                        that.vodClient.addAsset({
                            // 必选，通过服务端创建媒资返回的OBS桶
                            bucket: bucket,
                            // 必选，通过服务端创建媒资返回的region信息
                            location: location,
                            // 必选，通过服务端创建媒资返回的文件上传路径
                            object: object,
                            // 必选，通过服务端创建媒资返回的媒资ID(asset_id)
                            asset_id: assetId,
                            // 必选，选择上传的文件
                            videoFile: file,
                            // 非必选，是否进行重复上传校验,默认值为false
                            is_check: false
                        });

                        var lists = that.vodClient.listAssets();
                        if (that.fileList.length == lists.length) {
                            // 设置上传状态为true
                            that.canUpload = true;
                        }
                        //开始上传视频
                        that.vodClient.startUpload();


                        });


                    });
                });
            },
            //初始化播放器
            initPlayer(playUrl) {
                hwplayerloaded(() => {
                    this.hwPlayer = new HWPlayer(this.videoId, this.videoOption, () => {
                    this.sourceOk = true
                    console.log('播放器已经准备好了')
                    //this.hwPlayer.src(this.videoInfo.src);
                    // this.hwPlayer.src('https://446-cn-north-4.cdn-vod.huaweicloud.com/asset/ead59582121c79096ea90a034859acd7/play_video/01a01a29af5c597817378220a333e636.m3u8')

                    this.hwPlayer.src(playUrl)
                    //this.hwPlayer.src('https://446-cn-north-4.cdn-vod.huaweicloud.com/asset/3b082a6b5534b45e039e9e7b11801456/b718da588dd1a085f5426a15bd79d391.mp4')

                    })
                })
            },




        }
    }
</script>

<style scoped lang="scss">
    .container {
        width: 750px;
        height: 1334px;
        margin: 0 auto;
        background: #fff;
        .main-header {
            display: flex;
            display: -webkit-flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            align-content: flex-start;
            width: 100%;
            height: 300px;
            padding-top: 83px;
            padding-bottom: 37px;
            color: #fff;
            background: #ccc;
            .header-wait {
                width: 231px;
                height: 60px;
                line-height: 60px;
                text-align: center;
                color: #fff;
                border-radius: 30px;
                background: #fd5950;
            }
            img {
                width: 231px;
                height: 60px;
            }
            .header-footer {
                display: flex;
                display: -webkit-flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                .footer-progress {
                    display: flex;
                    display: -webkit-flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    .progress {
                        margin-top: 14px;
                        margin-bottom: 20px;
                        width: 540px;
                        height: 8px;
                        background-color: #fff;
                        border-radius: 4px;
                        overflow: hidden;
                        .realProgress {
                            height: 8px;
                            background-color: #2a5fb8;
                        }
                    }
                    .progressTips {
                        margin-left: 5px;
                        color: #fff;
                    }

                }


            }




        }
        .main-form {
            display: flex;
            display: -webkit-flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            align-content: space-between;
            width: 700px;
            height: 379px;
            margin: 0 auto;
            .form-row {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                padding: 42px 0px 42px 0px;
                border-bottom: 1px solid #d8d8d8;
                // border:1px solid red;

                font-size:25px;
                > span {
                    width: 15%;
                    font-family:"思源黑体 Regular";
                    font-size: 25px;
                    color: #666;
                }
                input {
                    width: 84%;
                    text-align: left;
                    border:none;
                    outline: none;
                    // padding-left: 10px;
                    font-family:"思源黑体 Regular";
                    font-size: 25px;
                    color: #000;
                }
                input::-webkit-input-placeholder {
                    font-family:"思源黑体 Regular";
                    font-size: 25px;
                    color: #b7b7b7;
                }
                .row-text {
                    width: 84%;
                    text-align: left;
                    padding-right: 10px;
                    padding-left: 10px;
                    font-family:"思源黑体 Regular";
                    font-size: 25px;
                    color: #000;
                    &:empty::before {
                        content: attr(placeholder);
                        font-family:"思源黑体 Regular";
                        font-size: 25px;
                        color: #b7b7b7;
                    }
                }
                .row-right {
                    float: left;

                    img {
                        width: 13px;
                        height: 11px;
                    }

                }
                &:nth-child(2),&:nth-child(4){
                    border-bottom: none;
                }
                ul {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    width: 84%;
                    font-size:23px;
                    // border: 1px solid red;
                    li {
                        padding: 10px 21px;
                            border-radius: 25px;
                            font-size: 18px;
                            color: #000;
                            background: #eaeaea;
                            &.active {
                                color: #fff;
                                background-color: #fb4358;
                            }
                    }

                }



            }
            .tag-des {
                width: 100%;
                text-align: right;
                font-size:25px;
                color: #c5c5c5;
                padding-bottom: 22px;
                border-bottom: 1px solid #d8d8d8;

            }
            .form-button {
                margin-top: 120px;
                img {
                    width:250px;
                    height: 70px;
                }

            }


        }


        .uploadVideoButtom {
            position: relative;
            width: 702px;
            height: 80px;
            border-radius: 10px;
            background-color: #036eb8;
            color: #ffffff;
            line-height: 80px;
            font-size: 34px;
            text-align: center;
            margin-left: auto;
            margin-right: auto;
        }



    }
    .video-js {
        width: 100% !important;
        height: 508px !important;
        background: #000;
    }

    .mint-popup-bottom {
        width: 100%;
        font-size: 26px;
    }

    >>> .picker-toolbar {
        display: flex !important;
        display: -webkit-flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding:25px 50px 0 50px;
    }

    >>> .picker-toolbar span {
    // float: left;
    // width: 50%;
    height: 70px;
    line-height: 70px;
    text-align: center;
    color: #323232;
    font-size: 28px;
    }

    >>> .picker-items .picker-item {
    font-size: 26px;
    }

    >>> .picker-selected {
    color: #2a5fb8;
    /* border-top: 1px solid #2a5fb8;
    border-bottom: 1px solid #2a5fb8; */
    }
</style>
