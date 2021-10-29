const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


// Handle show/hide user setting menu
const sidebarUserSettingBtn = $('.sidebar-user__setting');
const sidebarUserSetting = $('.sidebar-user__setting-menu');
var isShowSetting;

function handleUserSetting() {
    if (isShowSetting) {
        sidebarUserSetting.style.display = 'none';
        isShowSetting = false;
    }
    else {
        sidebarUserSetting.style.display = 'block';
        isShowSetting = true;
    }
}

document.addEventListener('click', () => {
    sidebarUserSetting.style.display = 'none';
    isShow = false;
})

sidebarUserSettingBtn.addEventListener('click', function (e) {
    handleUserSetting();
    e.stopPropagation();
})

$('.sidebar-user__setting-menu').addEventListener('click', function (e) {
    e.stopPropagation();
})

$$('.setting-menu__list-option-arrow').forEach((option, index) => {
    option.parentElement.onmouseenter = function () {
        $$('.list-option__box')[index].style.display = 'block';
    };
    option.parentElement.onmouseleave = function () {
        $$('.list-option__box')[index].style.display = 'none';
    };
})

// Handle sidebar options
const sidebarOptions = $$('.list-option');
const nctLogo = $('.sidebar-heading__logo-img');
const moreOptionsBtn = $$('.list-option__more-btn');
const moreOptionIcon = $$('.list-option__more-btn>i');
const moreOptions = $$('.list-option__more');
var isShowMoreOption;

sidebarOptions.forEach((option) => {
    option.onclick = function () {
        $('.list-option.active').classList.remove('active');
        this.classList.add('active');
    }
})

moreOptionsBtn.forEach((option, index) => {
    option.onclick = function (e) {
        e.stopPropagation();
        if (isShowMoreOption) {
            moreOptions[index].style.display = 'none';
            moreOptionIcon[index].style.transform = 'rotate(' + 0 + 'deg)';
            isShowMoreOption = false;
        }
        else {
            moreOptions[index].style.display = 'flex';
            moreOptionIcon[index].style.transform = 'rotate(' + 180 + 'deg)';
            isShowMoreOption = true;
        }
    }
})

nctLogo.onclick = function () {
    $('.list-option.active').classList.remove('active');
    sidebarOptions[1].classList.add('active');
}

// Handle feedback
const feedbackImg = $('.feedback-img');
const feedbackContainer = $('.feedback-container');
var isShowFeedback;
function handleFeedback() {
    if (isShowFeedback) {
        feedbackContainer.style.display = 'none';
        isShowFeedback = false;
    }
    else {
        feedbackContainer.style.display = 'flex';
        isShowFeedback = true;
    }
}

feedbackImg.addEventListener('click', function (e) {
    handleFeedback();
    e.stopPropagation();
})

document.addEventListener('click', function (e) {
    feedbackContainer.style.display = 'none';
    isShowFeedback = false;
})

feedbackContainer.addEventListener('click', function (e) {
    e.stopPropagation();
})

// Handle show/hide aside body
const asideBtn = $('.footer__head-btn');
const asideBtnDescription = $$('.head-btn__description');
const asidePlaylist = $('.aside-body__playlist');
const asideThumbnail = $('.aside-body__thumbnail');
const asideQualityBtn = $('.aside-footer__quality');
const asideQuality = $('.aside-body__quality')
const backThumbnailBtn = $('.playlist-header__btn')
const closeQualityBtn = $('.quality-header__btn');
var isShowQuality = false;
var isShowPlayList = false;

function hidePlaylist() {
    asideThumbnail.style.display = 'flex';
    asidePlaylist.style.display = 'none';
    asideQuality.style.display = 'none';
    isShowPlayList = false;
}

function showPlaylist() {
    asideThumbnail.style.display = 'none';
    asidePlaylist.style.display = 'block';
    asideQuality.style.display = 'none';
    isShowPlayList = true;
}

asideBtn.onclick = function () {
    if (isShowPlayList) {
        asideBtnDescription[1].classList.remove('active');
        asideBtnDescription[0].classList.add('active');
        hidePlaylist();
    }
    else {
        asideBtnDescription[0].classList.remove('active');
        asideBtnDescription[1].classList.add('active');
        showPlaylist();
    }
}

backThumbnailBtn.onclick = function () {
    hidePlaylist();
}

function hideQuality() {
    asideQuality.style.display = 'none';
    isShowQuality = false;
    if (isShowPlayList) {
        asidePlaylist.style.display = 'block';
        asideThumbnail.style.display = 'none';
    }
    else {
        asideThumbnail.style.display = 'flex';
        asidePlaylist.style.display = 'none';
    }
}

asideQualityBtn.onclick = function () {
    if (isShowQuality) {
        hideQuality();
    }
    else {
        asideQuality.style.display = 'block';
        asideThumbnail.style.display = 'none';
        asidePlaylist.style.display = 'none';
        isShowQuality = true;
    }
}

closeQualityBtn.onclick = function () {
    asideQuality.style.display = 'none';
    isShowQuality = false;
    if (isShowPlayList) {
        asidePlaylist.style.display = 'block';
        asideThumbnail.style.display = 'none';
    }
    else {
        asideThumbnail.style.display = 'flex';
        asidePlaylist.style.display = 'none';
    }
}

// Handle show/hide aside footer more options
const asideMoreOptions = $('.head-more__menu');
const asideMoreOptionBtn = $('.head-more__icon');
var isShowMoreOptions = false;

asideMoreOptionBtn.onclick = function (e) {
    e.stopPropagation();
    if (isShowMoreOptions) {
        asideMoreOptions.style.display = 'none';
        isShowMoreOptions = false;
    }
    else {
        asideMoreOptions.style.display = 'block';
        isShowMoreOptions = true;
    }
}

asideMoreOptions.onclick = function (e) {
    e.stopPropagation();
}

document.onclick = function () {
    asideMoreOptions.style.display = 'none';
    isShowMoreOptions = false;
}

// Handle play app
const asidePlaylistContainer = $('.playlist-content__container');
const audio = $('#aside-audio');
const controlBtn = $('.footer__control');
const playBtn = $$('.btn-control')[0];
const pauseBtn = $$('.btn-control')[1];
const progress = $('.footer__progress');
const volume = $('.volume-control');
const skipBtn = $('.btn-forward');
const backBtn = $('.btn-backward');
const randomBtn = $('.btn-shuffle');
const repeatBtn = $('.btn-repeat');
function convertSecond(s) {
    return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + s
};
const play = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    songs: [
        {
            name: "Ái Nộ",
            singer: "Masew, Khôi Vũ",
            path: "https://aredir.nixcdn.com/NhacCuaTui1021/AiNo1-MasewKhoiVu-7078913.mp3?st=ANUIXZBuaqHO6G7BpLCRmA&e=1635253007",
            thumbnail: "https://avatar-ex-swe.nixcdn.com/song/2021/08/30/2/1/a/e/1630316309035_300.jpg",
            listens: "2.5M"
        },
        {
            name: "Cưới Thôi",
            singer: "Masew, Masiu, B Ray, TAP",
            path: "https://aredir.nixcdn.com/NhacCuaTui1021/CuoiThoi-MasewMasiuBRayTAPVietNam-7085648.mp3?st=lbVHT-Jlo1iAMId9PMe49A&e=1635253007",
            thumbnail: "https://avatar-ex-swe.nixcdn.com/song/2021/09/09/f/c/f/d/1631181753902_300.jpg",
            listens: "2M"
        },
        {
            name: "Thê Lương",
            singer: "Phúc Chinh",
            path: "https://aredir.nixcdn.com/NhacCuaTui1012/TheLuong-PhucChinh-6971140.mp3?st=JXJs8nuM9JfQDUJkT68I8Q&e=1635253007",
            thumbnail: "https://avatar-ex-swe.nixcdn.com/song/2021/03/12/e/2/9/e/1615554946033_300.jpg",
            listens: "6.7M"
        },
        {
            name: "Dịu Dàng Em Đến",
            singer: "ERIK, NinjaZ",
            path: "https://aredir.nixcdn.com/NhacCuaTui1021/DiuDangEmDen-ERIKNinjaZ-7078877.mp3?st=muZVcIxgd51MvOayuXDZ_g&e=1635253007",
            thumbnail: "https://avatar-ex-swe.nixcdn.com/song/2021/08/30/2/1/a/e/1630307726211_300.jpg",
            listens: "1.3M"
        },
        {
            name: "Tình Thương Phu Thê",
            singer: "Chí Hướng",
            path: "https://aredir.nixcdn.com/NhacCuaTui1016/TinhThuongPhuThe-ChiHuong-7024958.mp3?st=VtSC8egvnlRwOmVtMwy5Lw&e=1635253007",
            thumbnail: "https://avatar-ex-swe.nixcdn.com/song/2021/05/26/a/4/3/5/1622033146255_300.jpg",
            listens: "1.6M"
        },
        {
            name: "3107 3",
            singer: "W/n, Duongg, Nâu, Titie",
            path: "https://aredir.nixcdn.com/Unv_Audio199/31073-WNDuonggNautitie-7059323.mp3?st=pMkm1uzWST4UPjz2OHLyEg&e=1635253007",
            thumbnail: "https://avatar-ex-swe.nixcdn.com/song/2021/08/02/f/d/b/3/1627913895076_300.jpg",
            listens: "194.4K"
        },
        {
            name: "Sài Gòn Đau Lòng Quá",
            singer: "Hứa Kim Tuyền, Hoàng Duyên",
            path: "https://aredir.nixcdn.com/NhacCuaTui1013/SaiGonDauLongQua-HuaKimTuyenHoangDuyen-6992977.mp3?st=9qMkDL0WeSljoC581xsqlQ&e=1635257516",
            thumbnail: "https://avatar-ex-swe.nixcdn.com/song/2021/03/27/d/2/9/1/1616859493571_300.jpg",
            listens: "11.7M"
        },
        {
            name: "Câu Hẹn Câu Thề",
            singer: "Đình Dũng, ACV",
            path: "https://aredir.nixcdn.com/NhacCuaTui1013/CauHenCauThe-DinhDung-6994741.mp3?st=9SNKl5em7SWj801UAK58-g&e=1635257673",
            thumbnail: "https://avatar-ex-swe.nixcdn.com/song/2021/03/29/2/2/1/e/1617029681297_300.jpg",
            listens: "9.2M"
        },
        {
            name: "Hương",
            singer: "Văn Mai Hương, Negav",
            path: "https://aredir.nixcdn.com/NhacCuaTui1010/Huong-VanMaiHuongNegav-6927340.mp3?st=XAkazbmY4H8u05RCDsuqdw&e=1635257698",
            thumbnail: "https://avatar-ex-swe.nixcdn.com/song/2021/01/22/9/f/2/1/1611280898757_300.jpg",
            listens: "1.3M"
        },
        {
            name: "Phận Duyên Lỡ Làng",
            singer: "Phát Huy T4, Truzg",
            path: "https://aredir.nixcdn.com/NhacCuaTui1014/PhanDuyenLoLang-PhatHuyT4Trugz-7004538.mp3?st=49OzwWQP64cMSpqxt5H48Q&e=1635257808",
            thumbnail: "https://avatar-ex-swe.nixcdn.com/song/2021/04/14/c/3/3/b/1618383513976_300.jpg",
            listens: "5.4M"
        },
        {
            name: "Muộn Rồi Mà Sao Còn",
            singer: "Sơn Tùng M-TP",
            path: "https://aredir.nixcdn.com/Believe_Audio19/MuonRoiMaSaoCon-SonTungMTP-7011803.mp3?st=3zhS337_VFcuFPO8CTydWg&e=1635257859",
            thumbnail: "https://avatar-ex-swe.nixcdn.com/song/2021/04/29/9/1/f/8/1619691182261_300.jpg",
            listens: "12.6M"
        },
        {
            name: "Chúng Ta Sau Này",
            singer: "T.R.I",
            path: "https://aredir.nixcdn.com/NhacCuaTui1010/ChungTaSauNay-TRI-6929586.mp3?st=7c1N-V4PU3KwT5w9awdxuw&e=1635257884",
            thumbnail: "https://avatar-ex-swe.nixcdn.com/song/2021/01/27/5/2/2/b/1611738358661_300.jpg",
            listens: "10.4M"
        },
        {
            name: "Có Hẹn Với Thanh Xuân",
            singer: "MONSTAR",
            path: "https://aredir.nixcdn.com/NhacCuaTui1010/ChungTaSauNay-TRI-6929586.mp3?st=7c1N-V4PU3KwT5w9awdxuw&e=1635257884",
            thumbnail: "https://avatar-ex-swe.nixcdn.com/song/2021/07/16/f/4/9/8/1626425507034_300.jpg",
            listens: "2.7M"
        },
        {
            name: "Trên Tình Bạn Dưới Tình Yêu",
            singer: "MIN",
            path: "https://aredir.nixcdn.com/NhacCuaTui1005/TrenTinhBanDuoiTinhYeu-MIN-6802163.mp3?st=edw3lTPkvyhup5bUyj_pMQ&e=1635257937",
            thumbnail: "https://avatar-ex-swe.nixcdn.com/song/2020/11/05/4/4/6/c/1604574284072_300.jpg",
            listens: "26.4M"
        },
        {
            name: "Độ Tộc 2",
            singer: "Masew, Độ Mixi, Phúc Du, Pháo",
            path: "https://aredir.nixcdn.com/NhacCuaTui1020/DoToc2-MasewDoMixiPhucDuPhao-7064730.mp3?st=hf2OnCHTuDNaxiRNyeKCFg&e=1635257958",
            thumbnail: "https://avatar-ex-swe.nixcdn.com/song/2021/08/10/b/2/e/0/1628579601228_300.jpg",
            listens: "2.3M"
        },
        {
            name: "Thức Giấc",
            singer: "Da LAB",
            path: "https://aredir.nixcdn.com/NhacCuaTui1018/ThucGiac-DaLAB-7048212.mp3?st=HMjBBbweeSk2K5Jck4xzig&e=1635257974",
            thumbnail: "https://avatar-ex-swe.nixcdn.com/song/2021/07/14/8/c/f/9/1626231010810_300.jpg",
            listens: "3.5M"
        },
        {
            name: "Níu Duyên",
            singer: "Lê Bảo Bình",
            path: "https://aredir.nixcdn.com/NhacCuaTui1008/NiuDuyen-LeBaoBinh-6872127.mp3?st=1E6v_-26M04gEj0FX-9s3w&e=1635257988",
            thumbnail: "https://avatar-ex-swe.nixcdn.com/song/2020/12/07/e/7/5/9/1607308157174_300.jpg",
            listens: "31M"
        },
        {
            name: "Sao Ta Ngược Lối",
            singer: "Đình Dũng",
            path: "https://aredir.nixcdn.com/NhacCuaTui1018/SaoTaNguocLoi-DinhDung-7052177.mp3?st=o5Ou5SgfrSc8nZqFwslNMw&e=1635258005",
            thumbnail: "https://avatar-ex-swe.nixcdn.com/song/2021/07/21/7/0/f/8/1626843874820_300.jpg",
            listens: "2.6M"
        },
        {
            name: "Gặp Gỡ, Yêu Đương Và Được Bên Em",
            singer: "Phan Mạnh Quỳnh",
            path: "https://aredir.nixcdn.com/NhacCuaTui1019/GapGoYeuDuongVaDuocBenEm-PhanManhQuynh-7061898.mp3?st=I8L7VjtFE47CIiGxy8H3nA&e=1635258021",
            thumbnail: "https://avatar-ex-swe.nixcdn.com/song/2021/08/08/2/9/5/8/1628404241673_300.jpg",
            listens: "1.7M"
        },
        {
            name: "Câu Hứa Chưa Vẹn Tròn",
            singer: "Phát Huy T4",
            path: "https://aredir.nixcdn.com/NhacCuaTui1022/CauHuaChuaVenTron-PhatHuyT4-7093319.mp3?st=nOgKWByZMPb7sal63qEc-g&e=1635258037",
            thumbnail: "https://avatar-ex-swe.nixcdn.com/song/2021/09/23/b/9/f/5/1632384189938_300.jpg",
            listens: "380.1K"
        }
    ],

    render: function () {
        const html = this.songs.map((song) => {
            return `
            <div class="content__container-song">
                  <div class="playlist-status__description">
                    <p class="status__description-name">${song.name}</p>
                    <p class="status__description-singer">${song.singer}</p>
                  </div>
                  <div class="playlist-status__more">
                    <div class="status__more-btn">
                      <i class="bi bi-three-dots-vertical"></i>
                    </div>

                    <div class="status__more-listens">
                      <i class="bi bi-headphones"></i>
                      <p>${song.listens}</p>
                    </div>
                  </div>
                </div>
            `
        });
        asidePlaylistContainer.innerHTML = html.join('');
    },

    defineProperties: function () {
        Object.defineProperty(this, "currentSong", {
            get: function () {
                return this.songs[this.currentIndex];
            }
        });
    },

    loadCurrentSong: function () {
        $('.playlist-status__img-song').src = `${this.currentSong.thumbnail}`;
        $('.status__description-name').innerHTML = this.currentSong.name;
        $('.status__description-singer').innerHTML = this.currentSong.singer;
        $('.status__more-listens > p').innerHTML = this.currentSong.listens;
        $('.thumbnail-img').src = `${this.currentSong.thumbnail}`;
        $('.aside-body__thumbnail-name').innerHTML = this.currentSong.name;
        $('.aside-body__thumbnail-singer').innerHTML = this.currentSong.singer;
        audio.src = `${this.currentSong.path}`;
    },

    skipSong: function () {
        this.currentIndex++;
        if (this.currentIndex >= this.songs.length) {
            this.currentIndex = 0;
        }
        this.loadCurrentSong();
        audio.play();
    },

    backSong: function () {
        this.currentIndex--;
        if (this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1;
        }
        this.loadCurrentSong();
        audio.play();
    },

    randomSong: function () {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * this.songs.length);
        }
        while (newIndex === this.currentIndex);
        this.currentIndex = newIndex;
        this.loadCurrentSong();
        audio.play();
    },

    handleEvents: function () {
        const playList = $$('.content__container-song');
        const statusMoreBtn = $$('.status__more-btn');
        // Handle click play/pause button
        controlBtn.onclick = function () {
            if (play.isPlaying) {
                audio.pause();
            }
            else {
                audio.play();
            }
        };

        // Handle play/pause audio
        audio.onplay = function () {
            play.isPlaying = true;
            $('.btn-control.active').classList.remove('active');
            pauseBtn.classList.add('active');
        };

        audio.onpause = function () {
            play.isPlaying = false;
            $('.btn-control.active').classList.remove('active');
            playBtn.classList.add('active');
        };

        // Handle ended audio
        audio.onended = function () {
            if (play.isRandom) {
                play.randomSong();
            }
            else {
                play.skipSong();
            }
        };

        // Handle progress
        audio.ontimeupdate = function () {
            if (play.isPlaying) {
                const progressValue = Math.floor((audio.currentTime / audio.duration) * 100);
                progress.value = progressValue;
                $('.footer__progress-now > p').innerHTML = convertSecond(Math.floor(audio.currentTime));
                $('.footer__progress-time > p').innerHTML = convertSecond(Math.floor(audio.duration));
            }
        };

        progress.oninput = function (e) {
            const timePlaying = (audio.duration / 100) * e.target.value;
            audio.currentTime = timePlaying;
            audio.play();
        };

        // Handle volume change
        volume.oninput = function (e) {
            const volumeValue = (e.target.value) / 100;
            audio.volume = volumeValue;
            if (volumeValue > 0.5) {
                $('.volume__icon.active').classList.remove('active');
                $$('.volume__icon')[0].classList.add('active');
            }
            else if (volumeValue <= 0.5 && volumeValue > 0) {
                $('.volume__icon.active').classList.remove('active');
                $$('.volume__icon')[1].classList.add('active');
            }
            else if (volumeValue == 0) {
                $('.volume__icon.active').classList.remove('active');
                $$('.volume__icon')[2].classList.add('active');
            }
        };

        // Handle click skip button
        skipBtn.onclick = function () {
            if (play.isRandom) {
                play.randomSong();
            }
            else {
                play.skipSong();
            }
        };

        // Handle click back button
        backBtn.onclick = function () {
            if (play.isRandom) {
                play.randomSong();
            }
            else {
                play.backSong();
            }
        };

        // Handle click random button
        randomBtn.onclick = function () {
            play.isRandom = !play.isRandom;
            if (play.isRandom) {
                randomBtn.style.color = 'var(--primary-color)';
            }
            else {
                randomBtn.style.color = '#f4f6f880';
            }
        };

        // Handle click repeat button
        repeatBtn.onclick = function () {
            play.isRepeat = !play.isRepeat;
            if (play.isRepeat) {
                repeatBtn.style.color = 'var(--primary-color)';
                audio.loop = true;
            }
            else {
                repeatBtn.style.color = '#f4f6f880';
                audio.loop = false;
            }
        };

        // Handle click song 
        playList.forEach((song, index) => {
            song.onclick = function () {
                play.currentIndex = index;
                play.loadCurrentSong();
                audio.play();
            }
        });

        // Handle click status more button
        statusMoreBtn.forEach(btn => {
            btn.onclick = function (e) {
                e.stopPropagation();
            }
        });
    },

    start: function () {
        this.defineProperties();
        this.loadCurrentSong();
        this.render();
        this.handleEvents();
    }
};

play.start();

// Handle body slide
const thumbnailBack = $$('.thumbnail__img-back');
const thumbnailNow = $$('.thumbnail__img-now');
const thumbnailNext = $$('.thumbnail__img-next');
const slideBtnLeft = $('.slide-btn__left');
const slideBtnRight = $('.slide-btn__right');
const slideStatusIcon = $$('.slide-status__icon');

var i = 1;
setInterval(function () {
    $('.thumbnail__img-back.active').classList.remove('active');
    thumbnailBack[i].classList.add('active');
    i = i < 6 ? i + 1 : 0;
}, 4000);

var j = i + 1;
setInterval(function () {
    $('.slide-status__icon.active').classList.remove('active');
    slideStatusIcon[j].classList.add('active');
    $('.thumbnail__img-now.active').classList.remove('active');
    thumbnailNow[j].classList.add('active');
    j = j < 6 ? j + 1 : 0;
}, 4000);

var k = j + 1;
setInterval(function () {
    $('.thumbnail__img-next.active').classList.remove('active');
    thumbnailNext[k].classList.add('active');
    k = k < 6 ? k + 1 : 0;
}, 4000);

// Handle wrapper slide
const wrapperLeftBtn1 = $('.header-control__left.wrapper1');
const wrapperRightBtn1 = $('.header-control__right.wrapper1');
const wrapperContainer1 = $('.content-wrapper__body.wrapper1');
const wrapperElement1 = $$('.wrapper__body-container.wrapper1');

wrapperRightBtn1.onclick = function () {
    $$('.wrapper__body-container.wrapper1.active').forEach(element => {
        element.classList.remove('active');
    })
    wrapperElement1[3].classList.add('active');
    wrapperElement1[4].classList.add('active');
    wrapperElement1[5].classList.add('active');
    wrapperElement1[6].classList.add('active');
    wrapperContainer1.style.transform = 'translateX(' + -726 + 'px)';
}

wrapperLeftBtn1.onclick = function () {
    $$('.wrapper__body-container.wrapper1.active').forEach(element => {
        element.classList.remove('active');
    })
    wrapperElement1[0].classList.add('active');
    wrapperElement1[1].classList.add('active');
    wrapperElement1[2].classList.add('active');
    wrapperElement1[3].classList.add('active');
    wrapperContainer1.style.transform = 'translateX(' + 0 + 'px)';
}

const wrapperLeftBtn2 = $('.header-control__left.wrapper2');
const wrapperRightBtn2 = $('.header-control__right.wrapper2');
const wrapperContainer2 = $('.content-wrapper__body.wrapper2');
const wrapperElement2 = $$('.wrapper__body-container.wrapper2');

wrapperRightBtn2.onclick = function () {
    $$('.wrapper__body-container.wrapper2.active').forEach(element => {
        element.classList.remove('active');
    })
    wrapperElement2[3].classList.add('active');
    wrapperElement2[4].classList.add('active');
    wrapperElement2[5].classList.add('active');
    wrapperElement2[6].classList.add('active');
    wrapperContainer2.style.transform = 'translateX(' + -726 + 'px)';
}

wrapperLeftBtn2.onclick = function () {
    $$('.wrapper__body-container.wrapper2.active').forEach(element => {
        element.classList.remove('active');
    })
    wrapperElement2[0].classList.add('active');
    wrapperElement2[1].classList.add('active');
    wrapperElement2[2].classList.add('active');
    wrapperElement2[3].classList.add('active');
    wrapperContainer2.style.transform = 'translateX(' + 0 + 'px)';
}

// Handle new content
const contentNew = {
    currentIndex: 0,
    isAuto: true,
    songs: [
        {
            name: 'Nam Quốc Sơn Hà',
            singer: 'DTAP, ERIK, RTee, Phương Mỹ Chi',
            date: '26/10/2021',
            image: 'https://avatar-ex-swe.nixcdn.com/song/2021/10/27/0/c/c/3/1635292271099_300.jpg'
        },
        {
            name: 'Mắt Nai Cha Cha Cha (MoodShow The 2nd Show)',
            singer: 'Bảo Anh',
            date: '26/10/2021',
            image: 'https://avatar-ex-swe.nixcdn.com/song/2021/10/25/2/6/3/7/1635154723054_300.jpg'
        },
        {
            name: 'Tiếp Tục',
            singer: 'JayM, 1DEE',
            date: '27/10/2021',
            image: 'https://avatar-ex-swe.nixcdn.com/song/2021/10/27/0/c/c/3/1635293481844_300.jpg'
        },
        {
            name: 'Anh Có Thể Trả Lời',
            singer: 'DC Tâm',
            date: '25/10/2021',
            image: 'https://avatar-ex-swe.nixcdn.com/song/2021/10/25/2/6/3/7/1635157235170_300.jpg'
        },
        {
            name: 'Sài Gòn Hồi Sinh Trở Lại',
            singer: 'Hàn Thái Tú',
            date: '25/10/2021',
            image: 'https://avatar-ex-swe.nixcdn.com/song/2021/10/25/2/6/3/7/1635157327338_300.jpg'
        },
        {
            name: 'Lạ Quá',
            singer: 'B Ray, Karik',
            date: '21/10/2021',
            image: 'https://avatar-ex-swe.nixcdn.com/song/2021/10/21/c/d/d/a/1634807126106_300.jpg'
        }
    ],

    render: function () {
        const htmlSong = this.songs.map((song) => {
            return `
            <div class="content-new__status-song">
                <i class="bi bi-play-circle-fill"></i>
                <img src="${song.image}" alt="Image"/>
            </div>
            `
        });
        $('.content-new__status').innerHTML = htmlSong.join('');
    },

    define: function () {
        Object.defineProperty(this, "currentSong", {
            get: () => this.songs[this.currentIndex]
        })
    },

    loadAuto: function () {
        setInterval(() => {
            this.currentIndex = this.currentIndex < this.songs.length - 1 ? ++this.currentIndex : 0;
            this.loadCurrentSong();
        }, 3000)
    },

    hover: function () {
        $$('.content-new__status-song').forEach((song, index) => {
            song.onmouseenter = () => {
                console.log(index);
                this.currentIndex = index;
                this.loadCurrentSong();
            }
        })
    },

    loadCurrentSong: function () {
        $('.content-new__header-img>img').src = this.currentSong.image;
        $('.description-name').innerHTML = this.currentSong.name;
        $('.description-singer').innerHTML = this.currentSong.singer;
        $('.description-date>p').innerHTML = `Ngày phát hành: ${this.currentSong.date}`;
    },

    start: function () {
        this.render();
        this.define();
        this.loadAuto();
        this.hover();
        this.loadCurrentSong();
    }
};

contentNew.start();

// Handle warning message
const warningMessage = $('.warning-container');
const warningElement = $$('.js-warning');

function handleWarning() {
    warningMessage.style.display = 'flex';
    setTimeout(() => {
        warningMessage.style.display = 'none';
    }, 1000)
}

warningElement.forEach(element =>
    element.addEventListener('click', handleWarning))