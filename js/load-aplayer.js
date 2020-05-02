<link rel="stylesheet" class="aplayer-secondary-style-marker" href="https://cdn.jsdelivr.net/npm/aplayer@latest/dist/APlayer.min.css"><script src="https://cdn.jsdelivr.net/npm/aplayer@latest/dist/APlayer.min.js" class="aplayer-secondary-script-marker"></script><script class="meting-secondary-script-marker" src="https://cdn.jsdelivr.net/npm/meting@1/dist/Meting.min.js"></script>document.addEventListener("DOMContentLoaded", function() {
  let apContainer = document.createElement("div");
  apContainer.id = "aplayer";
  document.body.append(apContainer);
    const ap = new APlayer({
        container: document.getElementById('aplayer'),
        mini: false,            < !--���������㲥��ģʽ -->
    autoplay: false,        < !--��Ƶ���Զ����� -->
    theme: '#FADFA3',       < !--����ɫ -->
    loop: 'all',            < !--��Ƶѭ������, ��ѡֵ: 'all', 'one', 'none'-- >
    order: 'random',        < !--��Ƶѭ��˳��, ��ѡֵ: 'list', 'random'-- >
    preload: 'auto',        < !--Ԥ���أ���ѡֵ: 'none', 'metadata', 'auto'-- >
    volume: 0.7,            < !--Ĭ����������ע�ⲥ����������û����ã��û��ֶ�����������Ĭ��������ʧЧ-- >
    mutex: true,            < !--���⣬��ֹ���������ͬʱ���ţ���ǰ����������ʱ��ͣ����������-- >
    listFolded: false,      < !--�б�Ĭ���۵��� false��ʾ���۵�-- >
    listMaxHeight: '120px', < !--�б����߶ȣ������˸߶Ƚ��й�����-- >
    lrcType: 0,             < !--������ͣ�0��ʾ����ʾ���-- >
    audio: [
        {
            name: '��˹�',                         < !--��������-->
        artist: 'Ѧ֮ǫ',                       < !--��������-->
        url: '/resources/music/��˹�.mp3',     < !--����·��-->
        cover: '/resources/music/�����ѩ.jpg', < !--��������ͼƬ-->
        theme: '#46718b' < !--ѡ�и���������-->
        },
    {
        name: '��˹�',
        artist: 'Ѧ֮ǫ',
        url: '/resources/music/��˹�.mp3',
        cover: '/resources/music/�����ѩ.jpg',
        theme: '#46718b'
    },
    {
        name: '��˹�',
        artist: 'Ѧ֮ǫ',
        url: '/resources/music/��˹�.mp3',
        cover: '/resources/music/�����ѩ.jpg',
        theme: '#46718b'
    }]
});
});