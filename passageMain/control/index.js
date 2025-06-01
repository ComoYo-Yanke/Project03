window.addEventListener('load', function(){

    let introduce = document.querySelector("#introduction");

    let passagebackTV = document.querySelector(".videoOfPassageMain01");
    let runBorder = document.querySelector(".runBorder");
    let cubeRun = document.querySelector(".cubeRun");
    let showVideo = document.querySelector(".showVideo");
    let showVideoCut = document.querySelector(".showVideoCut");
    let showVideosTV = document.querySelector(".showVideosTV");
    let currentPage = 0; // 当前页面页数
    let pageFromAny = 0; // 用于设置当前翻页的上一页为哪一页
    let lunbo02Current = 0; // length = 10, 第3页轮播的索引 初始为最后一页

    // 第三页内容切换到的页数
    let page02current = 0; // 0 or 1

    // 第三页中的轮播特效
    let developmentIntroductions = document.querySelector('.developmentIntroductions'); // 对用游戏的介绍文字
    let developmentImg = document.querySelector('.developmentImg'); // 对应游戏大图 
    let arrowLeft = document.querySelector('.arrowLeft'); // 往左轮播的按钮
    let arrowRight = document.querySelector('.arrowRight'); // 往右轮播的按钮
    let timeLine = document.querySelector('.timeLine'); // 轮播的对象
    let iconBorder = document.querySelectorAll('.iconBorder'); // 各图标的轮廓图 length = 11
    let timeLineitemEvent = document.querySelectorAll('.timeLine-item_event'); // 所有游戏对应图标事件触发器
    let timeLineitemIcon = document.querySelectorAll('.timeLine-item_icon'); // 所有游戏对应图标
    let beforeCurrent = lunbo02Current - 1;

    var atuoPlayDaley09;
    var atuoPlayDaley10;
    var atuoPlayDaley11;
    var atuoPlayDaley12;
    var atuoPlayDaley13;
    // 初始化
    arrowLeft.style.opacity = 0.7;
    arrowRight.style.opacity = 0.7;
    // 单次移动的距离 两种情况 没有年份文字和有年份文字
    let isLunboMove = false;
    const timeLineMoveForYears = -330;
    const timeLineMoveNoYears = -210;
    const timeLineScale = 1.2;

    const developmentIntroductionContentFMM = '米哈游创始团队推出独立游戏《FlyMe2theMoon》';  // FlyMe2theMoon 
    const developmentIntroductionContentbh = '上线《崩坏学院》'; // 崩坏学院
    const developmentIntroductionContentbh2 = '推出Q版射击游戏《崩坏学园2》'; // 崩坏学院2
    const developmentIntroductionContentbh3 = '推出3D动作手游崩坏3'; // 崩坏3
    const developmentIntroductionContentMYS = '推出社区产品《米游社》'; // 米游社
    const developmentIntroductionContentWD = '推出女性向手游《未定事件簿》'; // 未定事件薄
    const developmentIntroductionContentLM = '推出鹿鸣相关项目《人工桌面》'; // 鹿鸣 人工桌面
    const developmentIntroductionContentYS = '全球多平台发行开放世界游戏《原神》'; // 原神
    const developmentIntroductionContentSR = '银河冒险策略类游戏《崩坏：星穹铁道》全球上线'; // 崩坏：星穹铁道
    const developmentIntroductionContentZZZ = '全新动作游戏《绝区零》公测开启'; // 绝区零

    // 对应图片路径
    const imgPathOfFMM = '../../resources/imgs/mihoyo-historyShow01.png';
    const imgPathOfbh = '../../resources/imgs/mihoyo-historyShowbh.png';
    const imgPathOfbh2 = '../../resources/imgs/mihoyo-historyShowbh2.png';
    const imgPathOfbh3 = '../../resources/imgs/mihoyo-historyShowbh3.png';
    const imgPathOfMYS = '../../resources/imgs/mihoyo-historyShowMys.png';
    const imgPathOfWD = '../../resources/imgs/mihoyo-historyShowWD.png';
    const imgPathOfLM = '../../resources/imgs/mihoyo-historyShowLM.png';
    const imgPathOfYS = '../../resources/imgs/mihoyo-historyShowYS.png';
    const imgPathOfSR = '../../resources/imgs/mihoyo-historyShowSR.png';
    const imgPathOfZZZ = '../../resources/imgs/mihoyo-historyShowZZZ.png';

    // 模态窗
    showVideo.classList.add("changeHidden");
    // 视频播放完时重新播放
    passagebackTV.addEventListener('ended', () =>{
        passagebackTV.play();
    })
    // 鼠标放在那个播放按钮上的效果
    runBorder.addEventListener('mouseover', () => {
        const newImgsrc = '../resources/imgs/runBorderBlue.png';
        // 渐变效果
        
        setTimeout(() => {
            runBorder.src = newImgsrc;
        }, 100);
        // runBorder.src = newImgsrc;
        cubeRun.classList.add("changeColor01");
        cubeRun.classList.remove("cubeRun");
        
    });
    cubeRun.addEventListener('mouseover', () => {
        const newImgsrc = '../resources/imgs/runBorderBlue.png';
        setTimeout(() => {
            runBorder.src = newImgsrc
        }, 100);
        cubeRun.classList.add("changeColor01");
        cubeRun.classList.remove("cubeRun");
    })
    runBorder.addEventListener('mouseleave', () => {
        const reminsrc = '../resources/imgs/runBorde.png';
        setTimeout(() => {
            runBorder.src = reminsrc;
        }, 100);
        cubeRun.classList.remove("changeColor01");
        cubeRun.classList.add("cubeRun");
    });
    // 显示视频
    runBorder.addEventListener('click', function(){
        showVideo.style.display = "block";
        showVideo.style.opacity = 1;
        showVideo.classList.add('show');
        
        // 从头播放视频
        showVideosTV.currentTime = 0;
        showVideosTV.play();

    });
    cubeRun.addEventListener('click', () => {
        showVideo.style.display = "block";
        showVideo.style.opacity = 1;
        showVideo.classList.add('show');
        
        showVideosTV.currentTime = 0;
        showVideosTV.play();
    });
    // 旋转叉叉
    showVideoCut.addEventListener('mouseover', () => {
        showVideoCut.classList.remove("showVideoCutRotate02");
        showVideoCut.classList.add("showVideoCutRotate01");
        showVideoCut.addEventListener('mouseleave', () => {
            showVideoCut.classList.remove("showVideoCutRotate01");
            showVideoCut.classList.add("showVideoCutRotate02");
        });
    });
    
    // 点击叉叉 关闭模态窗
    showVideoCut.addEventListener('click', () => {
        showVideo.classList.remove('show');
        showVideo.style.opacity = 0;
        setTimeout(() => {
            showVideo.style.display = 'none';
        }, 300);
        showVideosTV.pause();
    });
    // 点击模态窗口以外的窗口时关闭模态窗
    window.addEventListener('click', (e) => {
        if (e.target === showVideo) {
            showVideo.classList.remove('show'); // 移除动画类
            showVideo.style.opacity = 0; // 设置透明度为0
            setTimeout(() => {
                showVideo.style.display = 'none'; // 等待动画结束后隐藏模态框
            }, 300); // 等待动画持续时间
            showVideosTV.pause();
        }
    });
    // 点击logo返回第一页
    document.querySelector(".headerLogo").addEventListener('click', () => {
        endPageCurrent = 0;
        clearTimeout(atuoPlayDaley01);
        clearTimeout(atuoPlayDaley02);
        clearTimeout(atuoPlayDaley03);
        currentPage = 0;
        isMoved = true;
        showPage(0);
        changePage();
    })
    
    let Official = document.querySelectorAll(".Officail");
    let WB = document.querySelectorAll(".WB");
    let WX = document.querySelectorAll(".WX");
    let Bilibli = document.querySelectorAll(".Bilibili");
    // 鼠标滚动事件
    

    let aboutOfGame = document.querySelector("#aboutOfGame");
    let header = document.querySelector(".header");
    let PointOut01 = document.querySelector(".pointOut01")
    const pages = document.querySelectorAll(".pages");
    let bodyLanTitile = document.querySelector(".bodylan");
    let isMoved = false;
    let headTags = document.querySelectorAll('.headTags');

    let lunbo01Current = 0;
    let gameShowBody = document.querySelectorAll(".gameShowBody");
    let VideoCan = document.querySelector(".VideoCan");
    let VideoCanWrite = document.querySelector(".VideoCanWirte");
    let runBotton = document.querySelector(".runBotton"); // 播放视频的按钮
    let pointOutAll = document.querySelector(".pointOutAll");
    let GameName = document.querySelectorAll(".GameName");
    let ENName = document.querySelectorAll(".ENName");
    let SkipLine = document.querySelectorAll(".SkipLine");
    let Introduction = document.querySelectorAll(".Introduction");
    let SkipTags = document.querySelectorAll(".SkipTags");

    let aboutGameBack = document.querySelector(".aboutGameBackgroud");

    let backMask = document.querySelectorAll('.backMask');
    let inTrueEnd = false;
    // 鼠标滚动和切换页面 在页面内滚动鼠标才生效
    pages.forEach(s => {
        s.addEventListener('wheel', throttle(function(e){
            // e.preventDefault();
            isMoved = false;
            if(e.deltaY > 0 && currentPage < 5 && !inTrueEnd && !isMovedinEnd){
                currentPage = Math.min(currentPage + 1, pages.length - 1);
                isMoved = true;
                showPage(currentPage);
                changePage();
            }else if(e.deltaY < 0 && currentPage > 0 && !inTrueEnd){
                currentPage = Math.max(currentPage - 1, 0);
                isMoved = true;
                showPage(currentPage);
                changePage();
            } 
            
        }, 800)); // 每0.8秒检测一次，避免短时间内滚动多次
    });
    window.addEventListener('wheel', (e) => {
        if(isMovedinEnd && !inTrueEnd){
            console.log('rasdas');
                
            if(e.deltaY > 0){
                pages.forEach(s => {
                    s.style.transition = 'none';
                });
                endPageCurrent++;
                inEndPageChange()
            }
        }else if(isMovedinEnd && inTrueEnd){
            if(e.deltaY < 0 && endPageCurrent < 4){
                endPageCurrent--;
                inEndPageChange();
            }
        }
    });
    // 鼠标点击的切换页面效果（第一页专属）
    PointOut01.addEventListener('click', (e) => {
        currentPage = Math.min(currentPage + 1, pages.length - 1);
        isMoved = true;
        showPage(currentPage);
        e.preventDefault();
        changePage();
        isMoved = false;
    });
    // 鼠标点击的切换页面效果
    pointOutAll.addEventListener('click', (e) => {
        currentPage = Math.min(currentPage + 1, pages.length - 1);
        isMoved = true;
        showPage(currentPage);
        e.preventDefault();
        changePage();
        isMoved = false;
    });

    // 鼠标放在文字上的效果
    headTags.forEach(s => s.addEventListener('mouseover', () => {
        if(s != headTags[currentPage]){
            s.style.color = '#3778E5';
        }
        
    }));
    headTags.forEach(s => s.addEventListener('mouseleave', () => {
        if(s != headTags[currentPage]){
            s.style.color = '#676B73';
        }
        
    }));
    // 鼠标点击的切换页面
    for(let i = 0; i < headTags.length; i++){
        headTags[i].addEventListener('click', () =>{
            currentPage = i;
            isMoved = true;
            showPage(i);
            changePage();
            isMoved = false
        });
    }

    // 切换页面
    // 调试工具 项目导出时删掉这段
    // ----------------------
    // deBugTool01(4);
    // deBugTool02(1);
    // ----------------------
    showPage(currentPage); // 初始化调度 调试工具 初始化应为0
    
    function showPage(index) {
        pages.forEach((page, i) => {
            page.style.transform = `translateY(${(i - index) * 100}%)`;
        });
    }

    // 延迟滚动效果
    function throttle(func, limit){
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    let isPonintOutAllFromTop = true;
    // 动画计时器
    var atuoPlayDaley01;
    var atuoPlayDaley02;
    var atuoPlayDaley03;
    var atuoPlayDaley04;
    var atuoPlayDaley05;
    var atuoPlayDaley06;
    var atuoPlayDaley07;
    var atuoPlayDaley08;

    let lunboImgs = document.querySelectorAll(".lunboimg");
    let isMovedinEnd = false;
    let endPageCurrent = 0;

    lunbo02();
    // 滚动页面到特定页码时执行的操作
    function changePage(){
        pages.forEach(s => {
            s.style.transition = 'all 0.5s ease';
        });
        
        if(isMoved){    
            switch(currentPage){
                case 0:
                    endPageCurrent = 0;
                    inTrueEnd = false;
                    // 清除第2页轮播的计时器
                    clearTimeout(atuoPlayDaley12);
                    clearTimeout(atuoPlayDaley01);
                    clearTimeout(atuoPlayDaley02);
                    clearTimeout(atuoPlayDaley03);
                    isPonintOutAllFromTop = true;
                    bodyLanTitile.classList.add('transformChange01');
                    PointOut01.classList.add('transformChange01');
                    header.classList.remove('show');
                    header.style.display = 'none';
                    headTags[0].style.color = '#3778E5';
                    headTags[1].style.color = '#676B73';
                    headTags[2].style.color = '#676B73';
                    headTags[3].style.color = '#676B73';
                    headTags[4].style.color = '#676B73';
                    setTimeout(() => {
                        bodyLanTitile.classList.remove('transformChange01');
                        PointOut01.classList.remove('transformChange01');
                        
                    }, 1500);
                    // 清除动画
                    pointOutAll.classList.add('hiddens');
                    pointOutAll.classList.remove('obvious');
                    
                    clearAction01();
                    clearAction02();
                    setTimeout(() => {
                            pointOutAll.style.display = 'none';
                    }, 300);
                    
                    isMovedinEnd = false;
                    pageFromAny = 0;
                    break;
                case 1:
                    endPageCurrent = 0;
                    inTrueEnd = false;
                    pointOutAll.classList.remove('hiddens');
                    pointOutAll.classList.add('obvous');
                    // 非轮播做的
                    // lunbo01Current = 0;
                    clearTimeout(atuoPlayDaley12);
                    atuoPlayDaley06 = setTimeout(imgOfMouseMoving(gameShowBody, aboutGameBack), 2000);
                    header.classList.add('show');
                    header.style.display = 'block';
                    headTags[0].style.color = '#676B73';
                    headTags[1].style.color = '#3778E5';
                    headTags[2].style.color = '#676B73';
                    headTags[3].style.color = '#676B73';
                    headTags[4].style.color = '#676B73';
                    if(isPonintOutAllFromTop){
                        pointOutAll.style.display = 'flex';
                        pointOutAll.classList.add('obvious');
                        pointOutAll.classList.remove('hiddens');
                    }
                    // 一般情况和轮播都要做的
                    // clearTimeout(atuoPlayDaley);
                    page01Action(lunbo01Current);
                    
                    //清除动画
                    clearAction02();
                    isMovedinEnd = false;
                    pageFromAny = 1;
                    
                    break;
                case 2:
                    endPageCurrent = 0;
                    inTrueEnd = false;
                    pointOutAll.classList.remove('hiddens');
                    pointOutAll.classList.add('obvous');
                    clearTimeout(atuoPlayDaley12);
                    clearTimeout(atuoPlayDaley13);
                    header.classList.add('show');
                    header.style.display = 'block';
                    // 清除第2页轮播的计时器
                    clearTimeout(atuoPlayDaley01);
                    clearTimeout(atuoPlayDaley02);
                    clearTimeout(atuoPlayDaley03);
                    isPonintOutAllFromTop = false;
                    headTags[0].style.color = '#676B73';
                    headTags[1].style.color = '#676B73';
                    headTags[2].style.color = '#3778E5';
                    headTags[3].style.color = '#676B73';
                    headTags[4].style.color = '#676B73';
                    // 清除动画
                    clearAction01();
                    clearAction02();
                    atuoPlayDaley13 = setTimeout(page02Action, 100);
                    setTimeout(backMaskBegin, 200);
                    if(pageFromAny < 2){
                        console.log('sds');
                        
                        KnowWeContent.classList.remove('KnowWeBh02');
                        KnowWeContent.classList.add('KnowWeBh01');
                        setTimeout(()=>{
                            KnowWeContent.classList.remove('KnowWeBh01');
                        }, 1000);
                    }else if(pageFromAny > 2){
                        KnowWeContent.classList.remove('KnowWeBh01');
                        KnowWeContent.classList.add('KnowWeBh02');
                        setTimeout(()=>{
                            KnowWeContent.classList.remove('KnowWeBh02');
                        }, 1000);
                    }else{
                        // 避免重叠
                    }
                    isMovedinEnd = false;
                    pageFromAny = 2;
                    
                    break;
                case 3:
                    endPageCurrent = 0;
                    inTrueEnd = false;
                    pointOutAll.classList.remove('hiddens');
                    pointOutAll.classList.add('obvous');
                    page03ChangeAction();
                    clearTimeout(atuoPlayDaley12);
                    header.classList.add('show');
                    header.style.display = 'block';
                    // 清除第2页轮播的计时器
                    clearTimeout(atuoPlayDaley01);
                    clearTimeout(atuoPlayDaley02);
                    clearTimeout(atuoPlayDaley03);
                    isPonintOutAllFromTop = false;
                    headTags[0].style.color = '#676B73';
                    headTags[1].style.color = '#676B73';
                    headTags[2].style.color = '#676B73';
                    headTags[3].style.color = '#3778E5';
                    headTags[4].style.color = '#676B73';
                    // 清除动画

                    clearAction01();
                    clearAction02();
                    setTimeout(backMaskBegin, 200);
                    isMovedinEnd = false;
                    pageFromAny = 3;
                    break;
                case 4:
                    endPageCurrent = 0;
                    inTrueEnd = false;
                    everyPage04Action();
                    pointOutAll.classList.add('hiddens');
                    pointOutAll.classList.remove('obvous');
                    clearTimeout(atuoPlayDaley12);
                    header.classList.add('show');
                    header.style.display = 'block';
                    // 清除第2页轮播的计时器
                    clearTimeout(atuoPlayDaley01);
                    clearTimeout(atuoPlayDaley02);
                    clearTimeout(atuoPlayDaley03);
                    isPonintOutAllFromTop = false;
                    headTags[0].style.color = '#676B73';
                    headTags[1].style.color = '#676B73';
                    headTags[2].style.color = '#676B73';
                    headTags[3].style.color = '#676B73';
                    headTags[4].style.color = '#3778E5';
                    // 清除动画
                    clearAction01();
                    if(!isMovedinEnd){
                        clearAction02();
                        setTimeout(backMaskBegin, 300);
                    }
                    
                    setTimeout(() =>{
                        isMovedinEnd = true;
                    }, 310);
                    // 到达最后一页后继续向下滑动则使用另外的滑动效果
                    if(isMovedinEnd){
                        pages.forEach(s => {
                            s.addEventListener('wheel', throttle(function(e){
                                // e.preventDefault();
                                isMoved = false;
                                if(e.deltaY > 0 ){

                                }
                            }, 300)); // 每0.3秒检测一次，避免短时间内滚动多次
                        });
                    }
                    pageFromAny = 4;
                    break;
                default:
                    break;
            }
        }
        
    }
    // 第二页的轮播效果
    for(let i = 0; i < lunboImgs.length; i++){
        lunboImgs[i].addEventListener('click', () => {
            if(i !== lunbo01Current){
                lunboImgs[lunbo01Current].classList.add('lunboChangeShow02');
                lunboImgs[lunbo01Current].classList.remove('lunboChangeShow01');
                this.setTimeout(() => {
                lunboImgs[lunbo01Current].classList.remove('lunboChangeShow02');
                }, 700)
                lunbo01Current = i;
                clearTimeout(atuoPlayDaley01);
                clearTimeout(atuoPlayDaley02);
                clearTimeout(atuoPlayDaley03);
                VideoCan.classList.remove("hiddens");
                VideoCanWrite.classList.remove("hiddens");
                // 清除操作
                for(let i = 0; i < GameName.length; i++){
                    // 进场完毕后将移出退出动画准备下一次退场
                    GameName[i].classList.remove("aboutGameBh05");
                    ENName[i].classList.remove("aboutGameBh05");
                    Introduction[i].classList.remove("aboutgameBh05");
                    SkipLine[i].classList.remove("aboutGameBh06");
                    SkipTags[i].classList.remove("aboutGameBh05");
                    gameShowBody[i].classList.remove('aboutGameBh04');
                }  
                for(let i = 0; i < GameName.length; i++){
                    
                    VideoCan.classList.remove("aboutGameVideoBh01");
                    VideoCanWrite.classList.remove("aboutGameVideoBh02");
                    GameName[i].classList.remove("aboutGameBh02");
                    ENName[i].classList.remove("aboutGameBh02");
                    SkipLine[i].classList.remove("aboutGameBh03"); 
                    Introduction[i].classList.remove("aboutGameBh02");
                    SkipTags[i].classList.remove("aboutGameBh02");
                    gameShowBody[i].classList.remove('aboutGameBh01');
                }
                
                setTimeout(page01Action(lunbo01Current), 5000);
            }
        });
    }

    page02OfVideoAction();

    // 切换到第2页要执行的行为
    function page01Action(lunbo01Current){
        // 一般情况和轮播都要做的
        // 鼠标放于文字上和点击的效果
        if(currentPage == 1){
            
            // 轮播与轮播相关效果
            // 轮播图标指示
            lunboImgs[lunbo01Current].classList.add('lunboChangeShow01');
            lunboImgs[lunbo01Current].classList.remove('lunboChangeShow02');
            for(let i = 0; i < Official.length; i++){
                Official[i].addEventListener('mouseover', () => {
                    Official[i].style.color = '#3778E5';
                });
                WB[i].addEventListener('mouseover', () => {
                    WB[i].style.color = '#3778E5';
                });
                WX[i].addEventListener('mouseover', () => {
                    WX[i].style.color = '#3778E5';
                });
                Bilibli[i].addEventListener('mouseover', () => {
                    Bilibli[i].style.color = '#3778E5';
                });
            }
            // 进场动画
            // 左边的图片
            
            // 到特定轮播图的索引要执行的行为
            gameShowBody[lunbo01Current].classList.add("aboutGameBh01");
            switch(lunbo01Current){
                case 0:
                    clearTimeout(atuoPlayDaley06);
                    aboutGameBack.src = "../../resources/imgs/bh2gameShowBG.png";
                    break;

                case 1:
                    clearTimeout(atuoPlayDaley06);
                    aboutGameBack.src = "../../resources/imgs/bh3gameShowBG.png";

                    break;
                case 2:
                    clearTimeout(atuoPlayDaley06);
                    aboutGameBack.src = "../../resources/imgs/WDgameShowBG.png";
                    break;
                case 3:
                    clearTimeout(atuoPlayDaley06);
                    aboutGameBack.src = "../../resources/imgs/YSgameShowBG.png";

                    break;
                case 4:
                    clearTimeout(atuoPlayDaley06);
                    aboutGameBack.src = "../../resources/imgs/SRgameShowBG.png";

                    break;
                case 5:
                    clearTimeout(atuoPlayDaley06);
                    aboutGameBack.src = "../../resources/imgs/ZZZgameShowBG.png";

                    break;
                default:
                    break;
            }
            // 右边的文字
            GameName[lunbo01Current].classList.add("aboutGameBh02");
            setTimeout(() => {
                ENName[lunbo01Current].classList.add("aboutGameBh02");
            }, 100);
            setTimeout(() => {
                SkipLine[lunbo01Current].classList.add("aboutGameBh03"); // 分割线的特殊动画
            }, 300);
            setTimeout(() => {
                Introduction[lunbo01Current].classList.add("aboutGameBh02");
            }, 400);
            setTimeout(() => {
                SkipTags[lunbo01Current].classList.add("aboutGameBh02");
            }, 600);
                        
            // 中间的播放视频按钮
            setTimeout(() => {
                VideoCan.classList.add('aboutGameVideoBh01');
                VideoCanWrite.classList.add('aboutGameVideoBh02');  
            }, 500);
            atuoPlayDaley01 = setTimeout(() => {
                VideoCan.classList.remove("hiddens");
                VideoCanWrite.classList.remove("hiddens");
                for(let i = 0; i < GameName.length; i++){
                    // 进场完毕后将移出退出动画准备下一次退场
                    GameName[i].classList.remove("aboutGameBh05");
                    ENName[i].classList.remove("aboutGameBh05");
                    Introduction[i].classList.remove("aboutgameBh05");
                    SkipLine[i].classList.remove("aboutGameBh06");
                    SkipTags[i].classList.remove("aboutGameBh05");
                    gameShowBody[i].classList.remove('aboutGameBh04');
                }  
                console.log("入场完毕，准备下一次退场");
                // 开始轮播
                if(currentPage == 1){
                    lunbo01();  
                }
            }, 1000);
            
            
                
            // setTimeout(page01Action, 8000);
        }else{
            VideoCan.classList.remove("hiddens");
            VideoCanWrite.classList.remove("hiddens");
            for(let i = 0; i < GameName.length; i++){
                // 进场完毕后将移出退出动画准备下一次退场
                GameName[i].classList.remove("aboutGameBh05");
                ENName[i].classList.remove("aboutGameBh05");
                Introduction[i].classList.remove("aboutgameBh05");
                SkipLine[i].classList.remove("aboutGameBh06");
                SkipTags[i].classList.remove("aboutGameBh05");
                gameShowBody[i].classList.remove('aboutGameBh04');
                
            }  
        }
    }
    // atuoPlayDaley = setTimeout(changePage, 5000);

    // 图片跟随鼠标移动
    // 第二页，重载函数
    function imgOfMouseMoving(ship, ship2){
        // var mouseLastV = 0; // 鼠标前一时间段的速度
        var mouseV = 0; // 鼠标当前时间段的速度
        var f = 0.9; // 摩擦系数，模拟惯性
        var mouseX;
        var isMoving = false;
        window.addEventListener('mousemove', (e) => {
            isMoving = true;
            const imgWidth = ship[lunbo01Current].offsetWidth;
            const windowWidth = window.innerWidth;

            let minX = imgWidth / 10;
            let maxX = windowWidth - imgWidth / 10;
            mouseX = e.clientX;
            // 每1ms截取移动距离并计算速度 1ms延迟用于获取鼠标停止事件
            atuoPlayDaley07 = setTimeout(() => {
                mouseV = (mouseX - e.clientX)/0.001;
                // console.log("鼠标当前速度：" + mouseV);
                if(isMoved){
                    if(mouseV > 0){
                        // console.log('向前移动！');
                        // 此处补充
                    }else if(mouseV < 0){
                        // console.log('向后移动！');
                        // 此处补充 
                    }
                }
            }, 1);
            
            let newX = -Math.min(Math.max(mouseX, minX), maxX);
            
            ship2.style.left = (newX) * 0.005 + '%';
            ship[lunbo01Current].style.left = newX * 0.008 + '%';
        });

        
    }
    // 其他重载 图片跟随鼠标移动
    function imgOfMouseMoving02(ship){
        window.addEventListener('mouseover', (e) => {

        });
    }

    // 轮播1
    function lunbo01(){
        atuoPlayDaley02 = setTimeout(() => {
            if(lunbo01Current < 5){
                console.log("开始轮播");
                // clearTimeout(atuoPlayDaley06);
                // 轮播触发后的一些动画(主要是先前的东西的退场动画)
                VideoCan.classList.add("hiddens");
                VideoCanWrite.classList.add("hiddens");
                GameName[lunbo01Current].classList.add("aboutGameBh05");
                ENName[lunbo01Current].classList.add("aboutGameBh05");
                Introduction[lunbo01Current].classList.add("aboutgameBh05");
                SkipLine[lunbo01Current].classList.add("aboutGameBh06"); // 分割线的特殊动画
                SkipTags[lunbo01Current].classList.add("aboutGameBh05");
                gameShowBody[lunbo01Current].classList.add("aboutGameBh04");
                lunboImgs[lunbo01Current].classList.add('lunboChangeShow02');
                lunbo01Current++;
                
            }else if(lunbo01Current == 5){
                VideoCan.classList.add("hiddens");
                VideoCanWrite.classList.add("hiddens");
                GameName[lunbo01Current].classList.add("aboutGameBh05");
                ENName[lunbo01Current].classList.add("aboutGameBh05");
                Introduction[lunbo01Current].classList.add("aboutgameBh05");
                SkipLine[lunbo01Current].classList.add("aboutGameBh06");
                SkipTags[lunbo01Current].classList.add("aboutGameBh05");
                gameShowBody[lunbo01Current].classList.add("aboutGameBh04");
                lunboImgs[lunbo01Current].classList.add('lunboChangeShow02');
                lunboImgs[lunbo01Current].classList.remove('lunboChangeShow01');
                lunbo01Current = 0;
                
            }
            for(let i = 0; i < lunboImgs.length; i++){

                lunboImgs[i].addEventListener('mouseover', () => {
                    console.log('1当前：'+lunbo01Current);
                    
                    if(i !== lunbo01Current){
                        lunboImgs[i].classList.remove('lunboChangeShow02');
                        lunboImgs[i].classList.add('lunboChangeShow01');
                    }
                });
                lunboImgs[i].addEventListener('mouseleave', () => {
                    console.log('2当前：'+lunbo01Current);
                    if(i !== lunbo01Current){
                        lunboImgs[i].classList.add('lunboChangeShow02');
                        lunboImgs[i].classList.remove('lunboChangeShow01');
                    }
                });
            }
            atuoPlayDaley03 = setTimeout(() => {
                // 退场完毕后移出入场动画准备下一次入场
                
                for(let i = 0; i < GameName.length; i++){
                    
                    VideoCan.classList.remove("aboutGameVideoBh01");
                    VideoCanWrite.classList.remove("aboutGameVideoBh02");
                    GameName[i].classList.remove("aboutGameBh02");
                    ENName[i].classList.remove("aboutGameBh02");
                    SkipLine[i].classList.remove("aboutGameBh03"); 
                    Introduction[i].classList.remove("aboutGameBh02");
                    SkipTags[i].classList.remove("aboutGameBh02");
                    gameShowBody[i].classList.remove('aboutGameBh01');
                    
                        
                }  
                console.log("退场完毕，准备下一次入场");
                
                // 完毕后开启下一次轮播
                setTimeout(page01Action(lunbo01Current));
            });
            
        }, 5000);
        for(let i = 0; i < lunboImgs.length; i++){

            lunboImgs[i].addEventListener('mouseover', () => {
                    console.log('1当前：'+lunbo01Current);
                    
                    if(i !== lunbo01Current){
                        lunboImgs[i].classList.remove('lunboChangeShow02');
                        lunboImgs[i].classList.add('lunboChangeShow01');
                    }
            });
            lunboImgs[i].addEventListener('mouseleave', () => {
                    console.log('2当前：'+lunbo01Current);
                    if(i !== lunbo01Current){
                        lunboImgs[i].classList.add('lunboChangeShow02');
                        lunboImgs[i].classList.remove('lunboChangeShow01');
                    }
            });
            
        }
    }

    // 清除动画
    function clearAction01(){
        clearTimeout(atuoPlayDaley12);
        KnowWeContent.classList.remove('KnowWeBh01');
        KnowWeContent.classList.remove('KnowWeBh02');
        setTimeout(() => {
            gameShowBody.forEach(s => {
                            GameName[lunbo01Current].classList.remove("aboutGameBh02");
                            ENName[lunbo01Current].classList.remove("aboutGameBh02");
                            SkipLine[lunbo01Current].classList.remove("aboutGameBh03"); 
                            Introduction[lunbo01Current].classList.remove("aboutGameBh02");
                            SkipTags[lunbo01Current].classList.remove("aboutGameBh02");
                            s.classList.remove('aboutGameBh01');
                            VideoCan.classList.remove('aboutGameVideoBh01');
                            VideoCanWrite.classList.remove('aboutGameVideoBh02');
                        });
                    }, 200);
    }

    function clearAction02(){
        // 避免误删计时器
        // 在此补充------------------------------------------------------------------------------
        // clearTimeout(atuoPlayDaley01);
        // clearTimeout(atuoPlayDaley02);
        // clearTimeout(atuoPlayDaley03);
        // clearTimeout(atuoPlayDaley04);
        // clearTimeout(atuoPlayDaley05);
        // // clearTimeout(atuoPlayDaley06);
        // clearTimeout(atuoPlayDaley07);
        // clearTimeout(atuoPlayDaley08);
        // clearTimeout(atuoPlayDaley09);
        // clearTimeout(atuoPlayDaley10);
        // clearTimeout(atuoPlayDaley11);
        // clearTimeout(atuoPlayDaley12);
        // clearTimeout(atuoPlayDaley13);
        if(currentPage - 2 >= 0){
            backMask[currentPage - 2].classList.add('aboutGameBh05');
        }
        
        backMask.forEach(s => {
            setTimeout(() => {
                s.classList.remove('aboutGameBh02');
                s.classList.remove('aboutGameBh05');
            })
        }, 200);
    }

    // backMask的进场动画
    function backMaskBegin(){
        if(currentPage - 2 >= 0){
            backMask[currentPage - 2].classList.add('aboutGameBh02');
        }
    }
    


    // 第三页要做的事====================================================================================华丽的分割线
    let KnowWeContent = document.querySelector(".KnowWeContent");
    // 切换的按钮
    let KnowWeAboutBotton = document.querySelector('.KnowWeAboutBotton');
    let KnowWeDevlopmentBotton = document.querySelector('.KnowWeDevlopmentBotton');
    let writeAbout = document.querySelector('.writeAbout');
    let blueAbout = document.querySelector('.blueAbout');
    let writeDevlopment = document.querySelector('.writeDevlopment');
    let blueDevlopment = document.querySelector('.blueDevlopment');
    let aboutmiHoYoContent = document.querySelector('.aboutmiHoYoConten');
    let developmentContent = document.querySelector('.developmentConten');
    
    function page02Action(){
        // 关于米哈游内容行为
        if(pageFromAny < 2){
            console.log('sds');
            
            KnowWeContent.classList.remove('KnowWeBh02');
            KnowWeContent.classList.add('KnowWeBh01');
            setTimeout(()=>{
                KnowWeContent.classList.remove('KnowWeBh01');
            }, 1000);
        }else if(pageFromAny > 2){
            KnowWeContent.classList.remove('KnowWeBh01');
            KnowWeContent.classList.add('KnowWeBh02');
            setTimeout(()=>{
                KnowWeContent.classList.remove('KnowWeBh02');
            }, 1000);
        }else{
            // 避免重叠
        }
        // 切换按钮的效果
        switch(page02current){
            case 0:
                // 内容切换到关于米哈游
                developmentContent.classList.add('hiddens02');
                //.米哈游发展 为0才能触发米哈游发展相关按钮行为
                KnowWeDevlopmentBotton.addEventListener('mouseover', () => {
                    // 初始化
                    if(page02current == 0){
                        writeDevlopment.classList.remove('KnowWeBottonBh01');
                        blueDevlopment.classList.remove('KnowWeBottonBh01');
                        blueDevlopment.classList.remove('KnowWeBottonBh02');
                        // clearTimeout(atuoPlayDaley08); // 充值计时器使行为被打断时能正常播放动画
                        clearTimeout(atuoPlayDaley09);
                        blueDevlopment.classList.add('KnowWeBottonBh01');
                        writeDevlopment.classList.add('KnowWeBottonBh01');
                        setTimeout(() => {
                            writeDevlopment.style.top = -20 + 'px';
                            writeDevlopment.classList.remove('KnowWeBottonBh01');
                        }, 100);
                        KnowWeDevlopmentBotton.addEventListener('mouseleave', () => {
                            if(page02current == 0){
                                clearTimeout(atuoPlayDaley08); 
                                clearTimeout(atuoPlayDaley09);
                                writeDevlopment.classList.add('KnowWeBottonBh01');
                                blueDevlopment.classList.add('KnowWeBottonBh02');
                                atuoPlayDaley09 = setTimeout(() => {
                                    blueDevlopment.style.top = 0;
                                    writeDevlopment.style.top = 0;
                                    blueDevlopment.classList.remove('KnowWeBottonBh01');
                                    blueDevlopment.classList.remove('KnowWeBottonBh02');
                                    writeDevlopment.classList.remove('KnowWeBottonBh01');
                                }, 200);
                            }
                        });
                    }
                    
                });
                KnowWeDevlopmentBotton.addEventListener('click', () => {
                    if(page02current == 0){
                        page02current = 1;
                        // clearTimeout(atuoPlayDaley08); 
                        clearTimeout(atuoPlayDaley09);
                        aboutmiHoYoContent.classList.remove('hiddens02');
                        developmentContent.classList.remove('obvious02');
                        developmentContent.classList.remove('hiddens02');
                        aboutmiHoYoContent.classList.remove('obvious02');
                        aboutmiHoYoContent.classList.add('hiddens02');
                        developmentContent.classList.add('obvious02');
                        writeAbout.classList.add('KnowWeBottonBh01');
                        blueAbout.classList.add('KnowWeBottonBh01');
                        setTimeout(() => {
                            blueAbout.style.top = -20 + 'px';
                            blueAbout.classList.remove('KnowWeBottonBh01');
                            blueDevlopment.classList.remove('KnowWeBottonBh01');
                            blueDevlopment.style.top = 20 + 'px';
                            clearTimeout(atuoPlayDaley13);

                            atuoPlayDaley13 = setTimeout(page02Action, 100);
                            
                            //  // 递归---------------------------------------------------------------------------
                        }, 200);
                        
                    }
                });
                break;
            case 1:
                // 内容切换到米哈游发展
                aboutmiHoYoContent.classList.add('hiddens02');
                //.关于米哈游 为1才能触发关于米哈游相关按钮行为                                                                                                                                                                                                                                 
                KnowWeAboutBotton.addEventListener('mouseover', () => {
                    // 初始化
                    blueAbout.classList.remove('KnowWeBottonBh01');
                    blueAbout.classList.remove('KnowWeBottonBh02');
                    if(page02current == 1){
                        clearTimeout(atuoPlayDaley10); // 
                        clearTimeout(atuoPlayDaley11);
                        blueAbout.classList.add('KnowWeBottonBh01');
                        writeAbout.classList.add('KnowWeBottonBh01');
                        atuoPlayDaley10 = setTimeout(() => {
                            writeAbout.style.top = 0 + 'px';
                            writeAbout.classList.remove('KnowWeBottonBh01');
                        }, 100);
                        KnowWeAboutBotton.addEventListener('mouseleave', () => {
                            if(page02current == 1){
                                clearTimeout(atuoPlayDaley10);
                                clearTimeout(atuoPlayDaley11);
                                writeAbout.classList.add('KnowWeBottonBh01');
                                blueAbout.classList.add('KnowWeBottonBh02');
                                atuoPlayDaley11 = setTimeout(() => {
                                    blueAbout.style.top = -20 + 'px';
                                    writeAbout.style.top = 0;
                                    blueAbout.classList.remove('KnowWeBottonBh01');
                                    blueAbout.classList.remove('KnowWeBottonBh02');
                                }, 200);
                            }
                        });
                    }
                });
                KnowWeAboutBotton.addEventListener('click', () => {
                    if(page02current == 1){
                        clearTimeout(atuoPlayDaley10); // 
                        clearTimeout(atuoPlayDaley11);
                        aboutmiHoYoContent.classList.remove('hiddens02');
                        developmentContent.classList.remove('obvious02');
                        developmentContent.classList.remove('hiddens02');
                        aboutmiHoYoContent.classList.remove('obvious02');
                        aboutmiHoYoContent.classList.add('obvious02');
                        developmentContent.classList.add('hiddens02');
                        blueDevlopment.classList.add('KnowWeBottonBh01');
                        writeDevlopment.classList.add('KnowWeBottonBh01');
                        page02current = 0;
                        setTimeout(() => {
                            blueDevlopment.style.top = 0;
                            writeDevlopment.style.top = 0;
                            blueAbout.style.top = 0
                            blueAbout.classList.remove('KnowWeBottonBh01');
                            blueAbout.classList.remove('KnowWeBottonBh01');
                            blueDevlopment.classList.remove('KnowWeBottonBh01');
                            writeDevlopment.classList.remove('KnowWeBottonBh01');
                            clearTimeout(atuoPlayDaley13);
                            atuoPlayDaley13 = setTimeout(page02Action, 100);
                        }, 200);
                    }
                });
                break;
            default:
                break;
        }
        return;
    }
    
    timeLineitemIcon[0].style.transform = `scale(${timeLineScale})`;
    function lunbo02(){
        colorChange();
        console.log('执行');
        
        arrowLeft.addEventListener('mouseover', () => {
            if(lunbo02Current > 0){
                arrowLeft.style.opacity = 1;
                arrowLeft.style.background = '#3778E5';
                arrowLeft.style.color = '#fff';
                arrowLeft.style.border = '2px solid #3778E5';
                colorChange();
                arrowLeft.addEventListener('mouseleave', () => {
                    if(lunbo02Current >= 0){
                        arrowLeft.style.opacity = 0.7;
                        arrowLeft.style.background = '#F8F9FB';
                        arrowLeft.style.color = '#242933';
                        arrowLeft.style.border = '2px solid grey';
                    }
                    colorChange();
                });
            }
        });
        arrowRight.addEventListener('mouseover', () => {
            if(lunbo02Current < 9){
                arrowRight.style.opacity = 1;
                arrowRight.style.background = '#3778E5';
                arrowRight.style.color = '#fff';
                arrowRight.style.border = '2px solid #3778E5';
                arrowRight.addEventListener('mouseleave', () => {
                    if(lunbo02Current <= 9){
                        arrowRight.style.opacity = 0.7;
                        arrowRight.style.background = '#F8F9FB';
                        arrowRight.style.color = '#242933';
                        arrowRight.style.border = '2px solid grey';
                    }
                    colorChange();
                });
            }
        });
        arrowLeft.addEventListener('click', () => {
            if(lunbo02Current > 0 && !isLunboMove){
                beforeCurrent = lunbo02Current;
                lunbo02Current--;
                isLunboMove = true;
                timeLineVanChange();
            }
        });
        arrowRight.addEventListener('click', () => {
            if(lunbo02Current < 9 && !isLunboMove){
                beforeCurrent = lunbo02Current;
                lunbo02Current++;
                isLunboMove = true;
                timeLineVanChange();
            }
        });
        for(let i = 0; i < timeLineitemEvent.length; i++){
            timeLineitemEvent[i].addEventListener('click', () => {
                if(lunbo02Current != i && i <= 9){
                    beforeCurrent = lunbo02Current;
                    lunbo02Current = i;
                    // clearTimeout(atuoPlayDaley12);
                    // atuoPlayDaley12 = setTimeout(lunbo02, 100);
                    isLunboMove = true;
                    timeLineVanChange();
                }
            });
        }
    }

    // 时间轴行为
    function timeLineVanChange(){
        colorChange();
        
        if(isLunboMove){
            switch (lunbo02Current) {
                case 0:
                    developmentIntroductions.textContent = developmentIntroductionContentFMM;
                    if(beforeCurrent > lunbo02Current){
                        timeLine.style.transform = `translateX(${0})`;
                    }
                    iconBorder.forEach(s => {
                        s.style.visibility = 'hidden';
                    });
                    timeLineitemIcon.forEach(s => {
                        s.style.transform = `scale(${1})`;
                    });
                    timeLineitemIcon[0].style.transform = `scale(${timeLineScale})`;
                    developmentImg.src = imgPathOfFMM;
                    break;
                case 1:
                    developmentIntroductions.textContent = developmentIntroductionContentbh;
                    if(beforeCurrent > lunbo02Current){
                        timeLine.style.transform = `translateX(${timeLineMoveForYears}px)`;
                    }else if(beforeCurrent < lunbo02Current){
                        timeLine.style.transform = `translateX(${timeLineMoveForYears}px)`;
                    }
                    iconBorder[0].style.visibility = 'visible';
                    iconBorder[1].style.visibility = 'hidden';
                    timeLineitemIcon.forEach(s => {
                        s.style.transform = `scale(${1})`;
                    });
                    timeLineitemIcon[1].style.transform = `scale(${timeLineScale})`;
                    developmentImg.src = imgPathOfbh;
                    break;
                case 2:
                    developmentIntroductions.textContent = developmentIntroductionContentbh2;
                    if(beforeCurrent > lunbo02Current){
                        timeLine.style.transform = `translateX(${(timeLineMoveForYears)*2}px)`;
                    }else if(beforeCurrent < lunbo02Current){
                        timeLine.style.transform = `translateX(${(timeLineMoveForYears)*2}px)`;
                    }
                    iconBorder[2].style.visibility = 'hidden';
                    iconBorder[1].style.visibility = 'visible';
                    timeLineitemIcon.forEach(s => {
                        s.style.transform = `scale(${1})`;
                    });
                    timeLineitemIcon[2].style.transform = `scale(${timeLineScale})`;
                    developmentImg.src = imgPathOfbh2;
                    break;
                case 3:
                    developmentIntroductions.textContent = developmentIntroductionContentbh3;
                    if(beforeCurrent > lunbo02Current){
                        timeLine.style.transform = `translateX(${(timeLineMoveForYears)*3 + 4}px)`;
                    }else if(beforeCurrent < lunbo02Current){
                        timeLine.style.transform = `translateX(${(timeLineMoveForYears)*3 + 4}px)`;
                    }
                    iconBorder[3].style.visibility = 'hidden';
                    iconBorder[2].style.visibility = 'visible';
                    timeLineitemIcon.forEach(s => {
                        s.style.transform = `scale(${1})`;
                    });
                    timeLineitemIcon[lunbo02Current].style.transform = `scale(${timeLineScale})`;
                    developmentImg.src = imgPathOfbh3;
                    break;
                case 4:
                    developmentIntroductions.textContent = developmentIntroductionContentMYS;
                    if(beforeCurrent > lunbo02Current){
                        timeLine.style.transform = `translateX(${(timeLineMoveForYears)*4 + 4}px)`;
                    }else if(beforeCurrent < lunbo02Current){
                        timeLine.style.transform = `translateX(${(timeLineMoveForYears)*4 + 4}px)`;
                    }
                    iconBorder[4].style.visibility = 'hidden';
                    iconBorder[3].style.visibility = 'visible';
                    timeLineitemIcon.forEach(s => {
                        s.style.transform = `scale(${1})`;
                    });
                    timeLineitemIcon[lunbo02Current].style.transform = `scale(${timeLineScale})`;
                    developmentImg.src = imgPathOfMYS;
                    break;
                case 5:
                    developmentIntroductions.textContent = developmentIntroductionContentWD;
                    if(beforeCurrent > lunbo02Current){
                        timeLine.style.transform = `translateX(${(timeLineMoveForYears)*5}px)`;
                    }else if(beforeCurrent < lunbo02Current){
                        timeLine.style.transform = `translateX(${(timeLineMoveForYears)*5}px)`;
                    }
                    iconBorder[6].style.visibility = 'visible';
                    iconBorder[5].style.visibility = 'hidden';
                    iconBorder[4].style.visibility = 'visible';
                    timeLineitemIcon.forEach(s => {
                        s.style.transform = `scale(${1})`;
                    });
                    timeLineitemIcon[lunbo02Current].style.transform = `scale(${timeLineScale})`;
                    developmentImg.src = imgPathOfWD;
                    break;
                case 6:
                    developmentIntroductions.textContent = developmentIntroductionContentLM;
                    if(beforeCurrent > lunbo02Current){
                        timeLine.style.transform = `translateX(${(timeLineMoveForYears)*5 + (timeLineMoveNoYears) + 2}px)`;
                    }else if(beforeCurrent < lunbo02Current){
                        timeLine.style.transform = `translateX(${(timeLineMoveForYears)*5 + (timeLineMoveNoYears) + 2}px)`;
                    }
                    iconBorder[7].style.visibility = 'visible';
                    iconBorder[6].style.visibility = 'hidden';
                    iconBorder[5].style.visibility = 'visible';
                    timeLineitemIcon.forEach(s => {
                        s.style.transform = `scale(${1})`;
                    });
                    timeLineitemIcon[lunbo02Current].style.transform = `scale(${timeLineScale})`;
                    developmentImg.src = imgPathOfLM;
                    break;
                case 7:
                    developmentIntroductions.textContent = developmentIntroductionContentYS;
                    if(beforeCurrent > lunbo02Current){
                        timeLine.style.transform = `translateX(${(timeLineMoveForYears)*5 + (timeLineMoveNoYears)*2 + 2}px)`;
                    }else if(beforeCurrent < lunbo02Current){
                        timeLine.style.transform = `translateX(${(timeLineMoveForYears)*5 + (timeLineMoveNoYears)*2 + 2}px)`;
                    }
                    iconBorder[7].style.visibility = 'hidden';
                    iconBorder[6].style.visibility = 'visible';
                    timeLineitemIcon.forEach(s => {
                        s.style.transform = `scale(${1})`;
                    });
                    timeLineitemIcon[lunbo02Current].style.transform = `scale(${timeLineScale})`;
                    developmentImg.src = imgPathOfYS;
                    break;
                case 8:
                    developmentIntroductions.textContent = developmentIntroductionContentSR;
                    if(beforeCurrent > lunbo02Current){
                        timeLine.style.transform = `translateX(${(timeLineMoveForYears)*6 + (timeLineMoveNoYears)*2 + 2}px)`;
                    }else if(beforeCurrent < lunbo02Current){
                        timeLine.style.transform = `translateX(${(timeLineMoveForYears)*6 + (timeLineMoveNoYears)*2 + 2}px)`;
                    }
                    iconBorder[8].style.visibility = 'hidden';
                    iconBorder[7].style.visibility = 'visible';
                    timeLineitemIcon.forEach(s => {
                        s.style.transform = `scale(${1})`;
                    });
                    timeLineitemIcon[lunbo02Current].style.transform = `scale(${timeLineScale})`;
                    developmentImg.src = imgPathOfSR;
                    break;
                case 9:
                    developmentIntroductions.textContent = developmentIntroductionContentZZZ;
                    if(beforeCurrent > lunbo02Current){
                        timeLine.style.transform = `translateX(${(timeLineMoveForYears)*7 + (timeLineMoveNoYears)*2 - 2}px)`;
                    }else if(beforeCurrent < lunbo02Current){
                        timeLine.style.transform = `translateX(${(timeLineMoveForYears)*7 + (timeLineMoveNoYears)*2 - 2}px)`;
                    }
                    iconBorder[9].style.visibility = 'hidden';
                    iconBorder[8].style.visibility = 'visible';
                    timeLineitemIcon.forEach(s => {
                        s.style.transform = `scale(${1})`;
                    });
                    timeLineitemIcon[lunbo02Current].style.transform = `scale(${timeLineScale})`;
                    developmentImg.src = imgPathOfZZZ;
                    break;
                case 10:
                    break;
                default:
                    break;
            }
        }
        isLunboMove = false;
        clearTimeout(atuoPlayDaley12);
        clearTimeout(atuoPlayDaley13);
    }

    function colorChange() {
        if(lunbo02Current == 9){
            arrowRight.style.background = '#F8F9FB';
            arrowRight.style.color = '#242933';
            arrowRight.style.border = '2px solid grey';
            arrowRight.style.background = ''
            arrowRight.style.opacity = 0.2;
        }else if(lunbo02Current == 0){
            arrowLeft.style.background = '#F8F9FB';
            arrowLeft.style.color = '#242933';
            arrowLeft.style.border = '2px solid grey';
            arrowLeft.style.background = ''
            arrowLeft.style.opacity = 0.2;
        }else if(lunbo02Current > 0 || lunbo02Current < 9){
            arrowLeft.style.opacity = 0.7;
            arrowRight.style.opacity = 0.7;
        }
    }

    // 调试工具: 初始化第一页为指定页面
    function deBugTool01(value){
        setTimeout(()=>{
            currentPage = value;
            pageFromAny = value;
            showPage(currentPage);
            isMoved = true;
            changePage();
            pointOutAll.classList.add('obvious');
            pointOutAll.style.display = 'flex';
        }, 200);
    }

    function deBugTool02(value){// 0 or 1
        pageFromAny = value;
        setTimeout(() => {
            page02current = value;
            page02Action(); 
            switch(value){
                case 0:
                    aboutmiHoYoContent.classList.remove('hiddens02');
                    aboutmiHoYoContent.classList.add('obvious02');
                    developmentContent.classList.add('hiddens02');
                    developmentContent.classList.remove('obvious02');
                    break;
                case 1:
                    developmentContent.classList.remove('hiddens02');
                    developmentContent.classList.add('obvious02');
                    aboutmiHoYoContent.classList.add('hiddens02');
                    aboutmiHoYoContent.classList.remove('obvious02');
                    break;
                default:
                    break;
            }
        }, 200);
    }

    // 第二页的游戏视频
    function page02OfVideoAction(){
        // 视频与视频效果
        let videoCanOfGame = document.querySelector('.videoCanOfGame'); // 视频盒子
        let videoOfGame = document.querySelector('.videoOfGame'); // 视频
        let showVideoCut02 = document.querySelector('.showVideoCut02'); // 关闭按钮
        let isMouseleave = true; // 非视频内移出鼠标的标志
        VideoCan.addEventListener('mouseover', () => {
            clearTimeout(atuoPlayDaley01);
            clearTimeout(atuoPlayDaley02);
            clearTimeout(atuoPlayDaley03);
            clearTimeout(atuoPlayDaley04);
            runBotton.style.opacity = 0;
            atuoPlayDaley05 = setTimeout(() => {
                runBotton.style.opacity = 1;
                runBotton.classList.add('runBottonBh01');
            }, 500);
        });  

        VideoCan.addEventListener('mouseleave', () =>{
            setTimeout(() =>{
                if(isMouseleave){
                    runBotton.classList.remove('runBottonBh01');
                    runBotton.style.opacity = 1;
                    clearTimeout(atuoPlayDaley05);
                    atuoPlayDaley04 = setTimeout(changePage, 500);
                }
            }, 100);
            
        }); 

        // 点击播放视频显示并自动播放
        VideoCan.addEventListener('click', () => {
            isMouseleave = false;
            clearTimeout(atuoPlayDaley01);
            clearTimeout(atuoPlayDaley02);
            clearTimeout(atuoPlayDaley03);
            clearTimeout(atuoPlayDaley04);
            runBotton.style.opacity = 1;
            clearTimeout(atuoPlayDaley05);
            videoCanOfGame.classList.remove('hiddens03');
            videoCanOfGame.classList.add('obvious03');
            // 根据当前轮播切换到对应视频
            switch(lunbo01Current){
                case 0:
                    videoOfGame.src = '../../resources/videos/videoOfGamebh2.mp4';
                    showVideoCut02.style.top = '125px';
                    break;
                case 1:
                    videoOfGame.src = '../../resources/videos/videoOfGamebh3.mp4';
                    showVideoCut02.style.top = '125px';
                    break;
                case 2:
                    videoOfGame.src = '../../resources/videos/videoOfGameWD.mp4';
                    showVideoCut02.style.top = '125px';
                    break;
                case 3:
                    videoOfGame.src = '../../resources/videos/videoOfGameYS.mp4';
                    showVideoCut02.style.top = '125px';
                    break;
                case 4:
                    videoOfGame.src = '../../resources/videos/videoOfGameSR.mp4';
                    showVideoCut02.style.top = '180px';
                    break;
                case 5:
                    videoOfGame.src = '../../resources/videos/videoOfGameZZZ.mp4';
                    showVideoCut02.style.top = '125px';
                    break;
                default:
                    break;
            }
            videoOfGame.currentTime = 0;
            // 等待以上所有工作做完后再播放视频确保能正常播放
            setTimeout(() => {
                videoOfGame.play();
            }, 300);
        });
        // 旋转叉叉
        showVideoCut02.addEventListener('mouseover', () => {
            showVideoCut02.classList.remove("showVideoCutRotate02");
            showVideoCut02.classList.add("showVideoCutRotate01");
            showVideoCut02.addEventListener('mouseleave', () => {
                showVideoCut02.classList.remove("showVideoCutRotate01");
                showVideoCut02.classList.add("showVideoCutRotate02");
            });
        });
        // 关闭视频
        showVideoCut02.addEventListener('click', () => {
            clearTimeout(atuoPlayDaley01);
            clearTimeout(atuoPlayDaley02);
            clearTimeout(atuoPlayDaley03);
            clearTimeout(atuoPlayDaley04);
            runBotton.style.opacity = 1;
            clearTimeout(atuoPlayDaley05);
            setTimeout(changePage, 500);
            videoCanOfGame.classList.add('hiddens03');
            videoCanOfGame.classList.remove('obvios03');
            videoOfGame.pause();
            isMouseleave = true;
        });

        // 点击模态窗口以外的窗口时关闭模态窗
        window.addEventListener('click', (e) => {
            if (e.target === videoCanOfGame) {
                clearTimeout(atuoPlayDaley01);
                clearTimeout(atuoPlayDaley02);
                clearTimeout(atuoPlayDaley03);
                clearTimeout(atuoPlayDaley04);
                runBotton.style.opacity = 1;
                clearTimeout(atuoPlayDaley05);
                setTimeout(changePage, 500);
                videoCanOfGame.classList.add('hiddens03');
                videoCanOfGame.classList.remove('obvios03');
                videoOfGame.pause();
                isMouseleave = true;
            }
        });
    }

    // 第四页要做的东西
    let joinmiHoYoContent = document.querySelector('.joinmiHoYoContent');
    // 左边

    // 人物图片
    let personOfQiyana = document.querySelector('#post03');
    let personOfYayi = document.querySelector('#post01');
    let personOfBuluoniya = document.querySelector('#post02');

    // 按钮触发
    let joinmiHoYoLeftEvent  = document.querySelectorAll('.joinmiHoYo-item_leftEvent');
    // 要变换的背景图片
    let joinmiHoYoLeftBottonBack = document.querySelectorAll('.joinmiHoYo-item_bottonBack'); // tX 530 - 0 px
    // 要变换的文字
    let joinmiHoYoLeftBottonText = document.querySelectorAll('.end'); // tX 30 - 0 px

    // 右边
    let joinmiHoYoRight = document.querySelector('.joinmiHoYo-item_right'); // 上下变动
    let joinmiHoYoRightcard = document.querySelectorAll('.join-wheel-card'); //height 115px - 95px
    let joinmiHoYoRightEvent = document.querySelectorAll('.join-wheel-card_event'); // mouse_event
    let joinmiHoYoRightNumber = document.querySelectorAll('.join-wheel-card_number'); // opacity
    let joinmiHoYoRightLine = document.querySelectorAll('.join-wheel-card_line'); // transform: translateY(-5px)
    let joinmiHoYoRightArrow = document.querySelectorAll('.more_btn'); // opacity
    let joinmiHoYoRightMouseleave = document.querySelectorAll('.join-wheel-card_breif'); // opacity
    let joinmiHoYoRightMouseover = document.querySelectorAll('.join-wheel-card_desc'); // transform: translateX(0);

    // 第四页要干的事
    page03Action();
    function page03Action(){
        for(let i = 0; i < joinmiHoYoLeftEvent.length; i++){
            joinmiHoYoLeftEvent[i].addEventListener('mouseover', () => {
                joinmiHoYoLeftBottonBack[i].style.transform = `translateX(${530}px)`;
                joinmiHoYoLeftBottonText[i].style.transform = `translateX(${30}px)`;
                joinmiHoYoLeftEvent[i].addEventListener('mouseleave', () => {
                    joinmiHoYoLeftBottonBack[i].style.transform = `translateX(${0}px)`;
                    joinmiHoYoLeftBottonText[i].style.transform = `translateX(${0}px)`;
                });
            });
            joinmiHoYoLeftEvent[i].addEventListener('click', () => {

            });
        }

        for(let i = 0; i < joinmiHoYoRightEvent.length; i++){
            joinmiHoYoRightEvent[i].addEventListener('mouseover', () => {
                // joinmiHoYoRightcard[i].style.height = '115px';
                switch(i){
                    case 0:
                        joinmiHoYoRightMouseover[0].style.transform = `translateX(${0}%)`;
                        joinmiHoYoRightcard[i].style.height = '115px';
                        joinmiHoYoRightLine[i].style.transform = `translateY(${-5}px)`;
                        joinmiHoYoRightNumber[0].style.opacity = 0;
                        joinmiHoYoRightArrow[0].style.opacity = 0;
                        break;
                    case 1:
                        break;
                    case 2:
                        joinmiHoYoRightMouseover[1].style.transform = `translateX(${0}%)`;
                        joinmiHoYoRightcard[i].style.height = '115px';
                        joinmiHoYoRightLine[i].style.transform = `translateY(${-5}px)`;
                        joinmiHoYoRightNumber[i].style.opacity = 0;
                        joinmiHoYoRightArrow[1].style.opacity = 0;
                        break;
                    case 3:
                        joinmiHoYoRightMouseover[2].style.transform = `translateX(${0}%)`;
                        joinmiHoYoRightcard[i].style.height = '115px';
                        joinmiHoYoRightLine[i].style.transform = `translateY(${-5}px)`;
                        joinmiHoYoRightNumber[i].style.opacity = 0;
                        joinmiHoYoRightArrow[2].style.opacity = 0;
                    default:
                        break;
                }
                
    
                joinmiHoYoRightEvent[i].addEventListener('mouseleave', () => {
                    // joinmiHoYoRightLine[i].style.transform = `translateY(${0}px)`;
                    // joinmiHoYoRightcard[i].style.height = '95px';
                    switch(i){
                        case 0:
                            joinmiHoYoRightMouseover[0].style.transform = `translateX(${-100}%)`;
                            joinmiHoYoRightcard[i].style.height = '95px';
                            joinmiHoYoRightLine[i].style.transform = `translateY(${0}px)`;
                            joinmiHoYoRightArrow[0].style.opacity = 1;
                            joinmiHoYoRightNumber[i].style.opacity = 1;
                            break;
                        case 1:
                            break;
                        case 2:
                            joinmiHoYoRightMouseover[1].style.transform = `translateX(${-100}%)`;
                            joinmiHoYoRightcard[i].style.height = '95px';
                            joinmiHoYoRightLine[i].style.transform = `translateY(${0}px)`;
                            joinmiHoYoRightArrow[1].style.opacity = 1;
                            joinmiHoYoRightNumber[i].style.opacity = 1;
                            break;
                        case 3:
                            joinmiHoYoRightMouseover[2].style.transform = `translateX(${-100}%)`;
                            joinmiHoYoRightcard[i].style.height = '95px';
                            joinmiHoYoRightLine[i].style.transform = `translateY(${0}px)`;
                            joinmiHoYoRightArrow[2].style.opacity = 1;
                            joinmiHoYoRightNumber[i].style.opacity = 1;
                        default:
                            break;
                    }
                });
            });
        }
        page03ImgMovingWithMouse();
    }
    function page03ChangeAction(){
         // 加入米哈游内容行为
        if(pageFromAny < 3){
            joinmiHoYoRight.classList.remove('KnowWeBh02');
            joinmiHoYoRight.classList.add('KnowWeBh01');
            setTimeout(()=>{
                joinmiHoYoRight.classList.remove('KnowWeBh01');
            }, 1000);
        }else if(pageFromAny > 3){
            joinmiHoYoRight.classList.remove('KnowWeBh01');
            joinmiHoYoRight.classList.add('KnowWeBh02');
            setTimeout(()=>{
                joinmiHoYoRight.classList.remove('KnowWeBh02');
            }, 1000);
        }else{
            // 避免重叠
        }
    }

    // 第四页中图片跟随鼠标移动
    function page03ImgMovingWithMouse(){
        // var mouseLastV = 0; // 鼠标前一时间段的速度
        var mouseV = 0; // 鼠标当前时间段的速度
        var f = 0.9; // 摩擦系数，模拟惯性
        var mouseX;
        var isMoving = false;
        window.addEventListener('mousemove', (e) => {
            isMoving = true;
            const imgWidth = personOfYayi.offsetWidth;
            const windowWidth = window.innerWidth;

            let minX = imgWidth / 10;
            let maxX = windowWidth - imgWidth / 10;
            mouseX = e.clientX;
            // 每1ms截取移动距离并计算速度 1ms延迟用于获取鼠标停止事件
            setTimeout(() => {
                mouseV = (mouseX - e.clientX)/0.001;
                // console.log("鼠标当前速度：" + mouseV);
                if(isMoved){
                    if(mouseV > 0){
                        // console.log('向前移动！');
                        // 此处补充
                    }else if(mouseV < 0){
                        // console.log('向后移动！');
                        // 此处补充 
                    }
                }
            }, 1);
            
            let newX = -Math.min(Math.max(mouseX, minX), maxX);
            // personOfYayi.style.transform = `translateX(${(newX) * 0.005}%)`;
            personOfYayi.style.transform = `translateX(${(newX) * 0.013 + 10}%)`;
            // personOfQiyana.style.transform = `translateX(${(newX) * 0.005}%)`;
            personOfQiyana.style.transform = `translateX(${(newX) * 0.018 + 10}%)`;
            // personOfBuluoniya.style.transform = `translateX(${(newX) * 0.005}%)`;
            personOfBuluoniya.style.transform = `translateX(${(newX) * 0.02 + 10}%)`;
        });
    }

    let newsCan = document.querySelector('.newsCan');
    let newsTopEvent = document.querySelector('.newsTopEvent'); // 新闻上半部分的鼠标事件
    let timerTextTop = document.querySelector('.timerTextTop'); // 时间文字上方文字
    let timerTextTopLeft = document.querySelector('.timerTextTopLeft');
    let timerTextTopRight = document.querySelector('.timerTextTopRight');
    let timerTextUnder = document.querySelector('.timerTextUnder'); // 时间文字下方文字
    let discriptions = document.querySelectorAll('.discriptions'); // 单个文字内容容器
    let discriptionsTitle = document.querySelectorAll('.discriptionsTitle'); // 文字内容的标题
    let discriptionsTitleLine = document.querySelector('.discriptionsTextLine'); // 底部文字的下划线
    let newsTopRightShowImg = document.querySelector('.newsTopRightShowImg'); // 新闻上半部分的右半部分的展示图片
    let newsTopRightShowImgFile = document.querySelector('.newsTopRightShowImgFile'); // 展示图片的文件
    let newsTopRightBack = document.querySelector('.newsTopRightBack'); // 背景图片
    let newsTopRightBackFile = document.querySelector('.newsTopRightBackFile'); // 背景图片的文字
    let newsBottomItem = document.querySelectorAll('.newsBottom-item_number'); // 底部的按钮
    // let newsBottomItemNumber = document.querySelectorAll('.newsBottom-item_number'); // 按钮中的文字
    let newsBottomMore = document.querySelector('.newsBottom-more'); // 按钮“点击查看更多新闻”
    let newsBottomMoreText = document.querySelector('.newsBottom-more_text'); // 文字

    const timerTopLeftText01 = '11';
    const timerTopRightText01 = '24';
    const timerUnderText01 = '2022';
    const timerTopLeftText02 = '10';
    const timerTopRightText02 = '10';
    const timerTopLeftText03 = '09';
    const timerTopRightText03 = '15';
    const timerUnderText03 = '2024';

    const imgFile01 = '../../resources/imgs/newsBackImgWD.png';
    const imgFile02 = '../../resources/imgs/newsBackImgContest.jpeg';
    const imgFile03 = '../../resources/imgs/newsBackImgmiHoYo.png';
    const bottomBackImg01 = 'url(../../resources/imgs/newsBottonBack.png)'
    const bottomBackImg02 = 'url(../../resources/imgs/newsBottonBackBlue.png)';
    newsBottomMore.classList.add('blackBack')
    let page04CurrentImg = 0;
    let imgFromAny = 0;
    // 第五页要干的
    page04Action();
    function page04Action(){
        if(pageFromAny < 4){
            newsCan.classList.remove('KnowWeBh02');
            newsCan.classList.add('KnowWeBh01');
            setTimeout(()=>{
                newsCan.classList.remove('KnowWeBh01');
            }, 1000);
        }
        else{
            // 避免重叠
        }

        newsTopEvent.addEventListener('mouseover', () => {
            discriptionsTitle.forEach(s => {
                s.style.color = '#3778e5';
            });
            discriptionsTitleLine.style.transition = 'transform 0.3s ease'
            newsTopRightShowImgFile.style.transform = 'scale(1.1)';
            discriptionsTitleLine.style.transform = 'translateX(100%)';

            newsTopEvent.addEventListener('mouseleave', () => {
                discriptionsTitle.forEach(s => {
                    s.style.color = 'black';
                });
                newsTopRightShowImgFile.style.transform = 'scale(1)';
                discriptionsTitleLine.style.transform = 'translateX(208%)';
                setTimeout(() => {
                    discriptionsTitleLine.style.transition = 'none';
                    discriptionsTitleLine.style.transform = 'translateX(0%)';
                }, 300);
            });
        });

        for(let i = 0; i < newsBottomItem.length; i++){
            newsBottomItem[i].addEventListener('mouseover', () => {
                if(page04CurrentImg != i){
                    newsBottomItem[i].classList.add('newsTextChangeTo');
                    newsBottomItem[i].classList.remove('newsTextChangeBack');
                }
                newsBottomItem[i].addEventListener('mouseleave', () => {
                    if(page04CurrentImg != i){
                        newsBottomItem[i].classList.add('newsTextChangeBack');
                        newsBottomItem[i].classList.remove('newsTextChangeTo');
                    }
                });
            });
            newsBottomItem[i].addEventListener('click', () => {
                if(page04CurrentImg != i){
                    newsBottomItem[page04CurrentImg].classList.add('newsTextChangeBack');
                    newsBottomItem[page04CurrentImg].classList.remove('newsTextChangeTo');
                    newsBottomItem[i].classList.add('newsTextChangeTo');
                    newsBottomItem[i].classList.remove('newsTextChangeBack');
                    page04CurrentImg = i;
                    
                    newsTextChangeForPage(i);
                    everyPage04Action();
                }
            });
            newsBottomMore.addEventListener('mouseover', () => {
                newsBottomMore.classList.remove('blackBack');
                newsBottomMore.classList.add('blueBack');
                newsBottomMoreText.style.color = '#3778E5';
                newsBottomMore.addEventListener('mouseleave', () => {
                    newsBottomMore.classList.remove('blueBack');
                    newsBottomMore.classList.add('blackBack');
                    newsBottomMoreText.style.color = '#676B73';
                });
            });
        }
        var mouseX;
        var mouseY;
        window.addEventListener('mousemove', (e) => {

            const imgWidth = newsTopRightBackFile.offsetWidth;
            const windowWidth = window.innerWidth;
            const imgHeight = newsTopRightBackFile.offsetHeight;
            const windowHeight = window.innerHeight;

            let minX = imgWidth / 10;
            let maxX = windowWidth - imgWidth / 10;
            let minY = imgHeight / 10;
            let maxY = windowHeight - imgHeight / 10;
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            let newX = -Math.min(Math.max(mouseX, minX), maxX);
            let newY = -Math.min(Math.max(mouseY, minY), maxY);
            
            newsTopRightBackFile.style.transform = `translate(${(newX) * 0.002 + 10}%, ${(newY) * 0.004}%)`;
            // newsTopRightBackFile.style.transform = `translateY(${(newY) * 0.003}%)`;
            
        });
    }

    function everyPage04Action(){
        switch(page04CurrentImg){
            case 0:
                timerTextTopLeft.textContent = timerTopLeftText01;
                timerTextTopRight.textContent = timerTopRightText01;
                timerTextUnder.textContent = timerUnderText01;
                newsTopRightShowImgFile.src = imgFile01;
                newsTopRightBackFile.src = imgFile01;
                newsBottomItem[0].classList.add('newsTextChangeTo');
                newsBottomItem[1].classList.remove('newsTextChangeTo');
                newsBottomItem[2].classList.remove('newsTextChangeTo');
                newsBottomItem[0].classList.remove('newsTextChangeBack');
                newsBottomItem[1].classList.add('newsTextChangeBack');
                newsBottomItem[2].classList.add('newsTextChangeBack');
                break;
            case 1:
                timerTextTopLeft.textContent = timerTopLeftText02;
                timerTextTopRight.textContent = timerTopRightText02;
                timerTextUnder.textContent = timerUnderText01;
                newsTopRightShowImgFile.src = imgFile02;
                newsTopRightBackFile.src = imgFile02;
                newsBottomItem[0].classList.remove('newsTextChangeTo');
                newsBottomItem[1].classList.add('newsTextChangeTo');
                newsBottomItem[2].classList.remove('newsTextChangeTo');
                newsBottomItem[0].classList.add('newsTextChangeBack');
                newsBottomItem[1].classList.remove('newsTextChangeBack');
                newsBottomItem[2].classList.add('newsTextChangeBack');
                break;
            case 2:
                timerTextTopLeft.textContent = timerTopLeftText03;
                timerTextTopRight.textContent = timerTopRightText03;
                timerTextUnder.textContent = timerUnderText03;
                newsTopRightShowImgFile.src = imgFile03;
                newsTopRightBackFile.src = imgFile03;
                newsBottomItem[0].classList.remove('newsTextChangeTo');
                newsBottomItem[1].classList.remove('newsTextChangeTo');
                newsBottomItem[2].classList.add('newsTextChangeTo');
                newsBottomItem[0].classList.add('newsTextChangeBack');
                newsBottomItem[1].classList.add('newsTextChangeBack');
                newsBottomItem[2].classList.remove('newsTextChangeBack');
                break;
            default:
                break;
        }
    }

    function newsTextChangeForPage(current){
        switch(current){
            case 0:
                discriptions[0].style.transition = 'all 0.5s ease-out';
                discriptions[1].style.transition = 'all 0.5s ease-out';
                discriptions[2].style.transition = 'all 0.5s ease-out';
                discriptions[0].style.opacity = 0;
                discriptions[1].style.opacity = 0;
                discriptions[2].style.opacity = 1;

                if(imgFromAny == 1){
                    discriptions[0].style.transform = 'translateX(-120%)';
                    discriptions[1].style.transform = 'translateX(120%)';
                    discriptions[2].style.transform = 'translateX(0%)';
                }else if(imgFromAny == 2){
                    discriptions[0].style.transform = 'translateX(120%)';
                    discriptions[1].style.transform = 'translateX(-120%)';
                    discriptions[2].style.transform = 'translateX(0%)';
                }
                setTimeout(() => {
                    discriptions[0].style.transition = 'none';
                    discriptions[1].style.transition = 'none';
                    discriptions[2].style.transition = 'none';
                    discriptions[0].style.transform = 'translateX(-120%)';
                    discriptions[1].style.transform = 'translateX(-120%)';
                    discriptions[2].style.transform = 'translateX(0%)';
                }, 500);
                imgFromAny = 0;
                break;
            case 1:
                discriptions[0].style.transition = 'all 0.5s ease-out';
                discriptions[1].style.transition = 'all 0.5s ease-out';
                discriptions[2].style.transition = 'all 0.5s ease-out';
                discriptions[0].style.opacity = 0;
                discriptions[1].style.opacity = 1;
                discriptions[2].style.opacity = 0;
                
                if(imgFromAny == 0){
                    discriptions[0].style.transform = 'translateX(-120%)';
                    discriptions[1].style.transform = 'translateX(0%)';
                    discriptions[2].style.transform = 'translateX(120%)';
                }else if(imgFromAny == 2){
                    discriptions[0].style.transform = 'translateX(120%)';
                    discriptions[1].style.transform = 'translateX(0%)';
                    discriptions[2].style.transform = 'translateX(-120%)';
                }
                setTimeout(() => {
                    discriptions[0].style.transition = 'none';
                    discriptions[1].style.transition = 'none';
                    discriptions[2].style.transition = 'none';
                    discriptions[0].style.transform = 'translateX(-120%)';
                    discriptions[1].style.transform = 'translateX(0%)';
                    discriptions[2].style.transform = 'translateX(-120%)';
                }, 500);
                imgFromAny = 1;
                break;
            case 2:
                discriptions[0].style.transition = 'all 0.5s ease-out';
                discriptions[1].style.transition = 'all 0.5s ease-out';
                discriptions[2].style.transition = 'all 0.5s ease-out';
                discriptions[0].style.opacity = 1;
                discriptions[1].style.opacity = 0;
                discriptions[2].style.opacity = 0;
                
                if(imgFromAny == 0){
                    discriptions[0].style.transform = 'translateX(0%)';
                    discriptions[1].style.transform = 'translateX(-120%)';
                    discriptions[2].style.transform = 'translateX(120%)';
                }else if(imgFromAny == 1){
                    discriptions[0].style.transform = 'translateX(0%)';
                    discriptions[1].style.transform = 'translateX(120%)';
                    discriptions[2].style.transform = 'translateX(-120%)';
                }
                setTimeout(() => {
                    discriptions[0].style.transition = 'none';
                    discriptions[1].style.transition = 'none';
                    discriptions[2].style.transition = 'none';
                    discriptions[0].style.transform = 'translateX(0%)';
                    discriptions[1].style.transform = 'translateX(-120%)';
                    discriptions[2].style.transform = 'translateX(-120%)';
                }, 500);
                imgFromAny = 2;
                break;
            default:
                break;
        }
    }

    function inEndPageChange(){
        console.log(endPageCurrent); 
        switch(endPageCurrent){
            case 0:
                pages[4].style.transform = `translateY(${0}%)`;
                pages[5].style.transform = `translateY(${100}%)`;
                // pages.forEach(s => {
                //     s.style.transition = 'all 0.5s ease';
                // });
                
                inTrueEnd = false;
                return;
                break;
            case 1:
                pages[4].style.transform = `translateY(${-20}%)`;
                pages[5].style.transform = `translateY(${50}%)`;
                return
                break;
            case 2:
                pages[4].style.transform = `translateY(${-30}%)`;
                pages[5].style.transform = `translateY(${20}%)`;
                return;
                break;
            case 3:
                pages[4].style.transform = `translateY(${-40}%)`;
                pages[5].style.transform = `translateY(${0}%)`;
                inTrueEnd = true;
                return
                break;
            default:
                break;
        }
    }
});

