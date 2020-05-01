const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
        {
            name: "卧龙吟",
            artist: '史云龙',
            url: 'http://music.163.com/song/media/outer/url?id=488721251.mp3',
            cover: 'https://p4.music.126.net/0jQ1kJag_Qx_X8caoZOrtA==/109951162966467515.jpg?imageView&thumbnail=130y130',
        },
        {
            name: '梅花三弄',
            artist: '龚一',
            url: 'http://music.163.com/song/media/outer/url?id=34002575.mp3',
            cover: 'https://p3.music.126.net/9oDdoOSfZHrZ04JNB2qoag==/3321624627806853.jpg?imageView&thumbnail=130y130',
        },
       
    ]
});