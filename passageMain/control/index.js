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

    // 第三页内容切换到的页数
    let page02current = 0; // 0 or 1

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
    
    // 鼠标滚动和切换页面 在页面内滚动鼠标才生效
    
    pages.forEach(s => {
        s.addEventListener('wheel', throttle(function(e){
            // e.preventDefault();
            isMoved = false;
            if(e.deltaY > 0 && currentPage < 5){
                currentPage = Math.min(currentPage + 1, pages.length - 1);
                isMoved = true;
                showPage(currentPage);
                changePage();
            }else if(e.deltaY < 0 && currentPage > 0){
                currentPage = Math.max(currentPage - 1, 0);
                isMoved = true;
                showPage(currentPage);
                changePage();
            }
        }, 800)); // 每0.8秒检测一次，避免短时间内滚动多次
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
    deBugTool01(2);
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

    // 滚动页面到特定页码时执行的操作
    function changePage(){
        if(isMoved){    
            switch(currentPage){
                case 0:
                    // 清除第2页轮播的计时器
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
                    // 非轮播做的
                    // lunbo01Current = 0;
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
                    page02Action();
                    setTimeout(backMaskBegin, 200);

                    isMovedinEnd = false;
                    pageFromAny = 2;
                    
                    break;
                case 3:
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
                if( currentPage == 1){
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
            
            ship2.style.left = (newX) * 0.005 + '%'
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
                clearTimeout(atuoPlayDaley06)
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
    
    // 第三页要做的事
    let KnowWeContent = document.querySelector(".KnowWeContent");
    // 切换的按钮
    let KnowWeAboutBotton = document.querySelector('.KnowWeAboutBotton');
    let KnowWeDevlopmentBotton = document.querySelector('.KnowWeDevlopmentBotton');
    let writeAbout = document.querySelector('.writeAbout');
    let blueAbout = document.querySelector('.blueAbout');
    let writeDevlopment = document.querySelector('.writeDevlopment');
    let blueDevlopment = document.querySelector('.blueDevlopment');
    
    function page02Action(){
        if(pageFromAny < 2){
            KnowWeContent.classList.remove('KnowWeBh02');
            KnowWeContent.classList.add('KnowWeBh01');
            setTimeout(()=>{
                KnowWeContent.classList.remove('KnowWeBh01');
            }, 1000);
        }else if(pageFromAny >= 2){
            KnowWeContent.classList.remove('KnowWeBh01');
            KnowWeContent.classList.add('KnowWeBh02');
            setTimeout(()=>{
                KnowWeContent.classList.remove('KnowWeBh02');
            }, 1000);
        }

        switch(page02current){
            case 0:
                KnowWeAboutBotton.addEventListener('mouseover', () => {
                    KnowWeAboutBotton.addEventListener('mouseleave', () => {

                    });
                });
                KnowWeAboutBotton.addEventListener('click', () => {

                });
                break;
            case 1:
                KnowWeDevlopmentBotton.addEventListener('mosueover', () => {
                    KnowWeDevlopmentBotton.addEventListener('mouseleave', () => {
                        
                    })
                });
                break;
            default:
                break;
        }
        

    }

    function page02BottonMoved(){

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
});

