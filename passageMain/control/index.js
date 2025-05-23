window.addEventListener('load', function(){

    let introduce = document.querySelector("#introduction");


    let passagebackTV = document.querySelector(".videoOfPassageMain01");
    let runBorder = document.querySelector(".runBorder");
    let cubeRun = document.querySelector(".cubeRun");
    let showVideo = document.querySelector(".showVideo");
    let showVideoCut = document.querySelector(".showVideoCut");
    let showVideosTV = document.querySelector(".showVideosTV");

    showVideo.classList.add("changeHidden")
    // 视频播放完时重新播放
    passagebackTV.addEventListener('ended', () =>{
        passagebackTV.play();
    })
    // 鼠标放在那个播放按钮上的效果
    runBorder.addEventListener('mouseover', () => {
        const newImgsrc = '../resources/imgs/runBorderBlue.png';
        // 渐变效果
        
        setTimeout(() => {
            runBorder.src = newImgsrc
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
    
    // 叉掉视频
    showVideoCut.addEventListener('click', () => {
        showVideo.classList.remove('show');
        showVideo.style.opacity = 0;
        setTimeout(() => {
            showVideo.style.display = 'none';
        }, 300);
        showVideosTV.pause();
    });
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

    // 鼠标滚动事件
    let currentPage = 0; // 当前页面页数
    let aboutOfGame = document.querySelector("#aboutOfGame");
    let header = this.document.querySelector(".header");
    let PointOut01 = document.querySelector(".pointOut01")
    const pages = document.querySelectorAll(".pages");
    let bodyLanTitile = document.querySelector(".bodylan");
    let isMoved = false;
    let headTags = document.querySelectorAll('.headTags');

    
    
    window.addEventListener('wheel', throttle(function(e){
        // e.preventDefault();
        isMoved = false;
        if(e.deltaY > 0 && currentPage < 4){
            currentPage = Math.min(currentPage + 1, pages.length - 1);
            isMoved = true;
        }else if(e.deltaY < 0 && currentPage > 0){
            currentPage = Math.max(currentPage - 1, 0);
            isMoved = true;
        }
        showPage(currentPage);
        // e.preventDefault();
        changePage();
    }, 600));
    PointOut01.addEventListener('click', (e) => {
        currentPage = Math.min(currentPage + 1, pages.length - 1);
        isMoved = true;
        showPage(currentPage);
        e.preventDefault();
        changePage();
        isMoved = false;
    });
    // showPage(0);

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
            showPage(currentPage);
            changePage();
        })
    }
    function showPage(index) {
        pages.forEach((page, i) => {
            page.style.transform = `translateY(${(i - index) * 100}%)`;
        });
    }

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

    function changePage(){
        if(isMoved){    
            console.log(currentPage);
            switch(currentPage){
                case 0:
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
                    break;
                case 1:
                    header.classList.add('show');
                    header.style.display = 'inline-block';
                    headTags[0].style.color = '#676B73';
                    headTags[1].style.color = '#3778E5';
                    headTags[2].style.color = '#676B73';
                    headTags[3].style.color = '#676B73';
                    headTags[4].style.color = '#676B73';
                    break;
                case 2:
                    
                    headTags[0].style.color = '#676B73';
                    headTags[1].style.color = '#676B73';
                    headTags[2].style.color = '#3778E5';
                    headTags[3].style.color = '#676B73';
                    headTags[4].style.color = '#676B73';
                    break;
                case 3:
                    
                    headTags[0].style.color = '#676B73';
                    headTags[1].style.color = '#676B73';
                    headTags[2].style.color = '#676B73';
                    headTags[3].style.color = '#3778E5';
                    headTags[4].style.color = '#676B73';
                    break;
                case 4:
                    
                    headTags[0].style.color = '#676B73';
                    headTags[1].style.color = '#676B73';
                    headTags[2].style.color = '#676B73';
                    headTags[3].style.color = '#676B73';
                    headTags[4].style.color = '#3778E5';
                    break;
                default:
                    break;
            }
        }
    }
});

