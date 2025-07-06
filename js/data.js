const projectsData_id = [
    new Project('https://azisrosyid.github.io/portfolio/images/project1.png', 'Game Planet AR (Semester 2)', 'Game yang merupakan output dari kegiatan PPM di SMK Negeri 2 Pakem. Saya berkontribusi dalam merancang dan membuat sistem game menggunakan game engine Unity secara keseluruhan dengan anggota tim lain yang menyuplai asset game kepada saya.', 'https://drive.google.com/drive/folders/1AHcx-PG9zbxuQDjZl-7TZxqqKWP-BDHK?usp=sharing'),
    new Project('https://azisrosyid.github.io/portfolio/images/project2.png', 'E-Mathematics Aptitude Test (Semester 2)', 'Website yang digunakan untuk melakukan test matematika kepada peserta didik sebagai output disertasi client. Saya berperan untuk mengkonfigurasi back-end termasuk database menggunakan framework CodeIgniter 4 secara keseluruhan.', 'https://github.com/AzisRosyid/cbt-project'),
    new Project('https://azisrosyid.github.io/portfolio/images/project3.png', 'Panenku Indonesia (Semester 3)', 'Website yang digunakan untuk menfasilitasi transaksi kemitraan pada budidaya jamur tiram sebagai output project pkm client. Saya berkontribusi dalam mengkonfigurasi back-end fitur utama, yaitu transaksi kemitraan dan dashboard. Juga mengkonfigurasi database website dan manajemen web server.', 'https://panenkuindonesia.com/'),
    new Project('https://azisrosyid.github.io/portfolio/images/project4.png', 'Edu MIT (Semester 3)', 'Aplikasi mobile pada platform android yang digunakan untuk mengedukasi masyarakat dalam hal mitigasi bencana gunung merapi. Saya bertanggung jawab memimpin jalannya project dan menghandle aplikasi mobile secara keseluruhan menggunakan Flutter. Desain dan Asset dihandle oleh anggota tim.', 'https://play.google.com/store/apps/details?id=com.edumit.app_mitigasi_bencana'),
    new Project('https://azisrosyid.github.io/portfolio/images/project5.png', 'Qwhizy (Semester 3)', 'Aplikasi mobile pada platform android yang digunakan untuk membantu hafalan Al Quran. Project aplikasi ini dibuat untuk mengikuti ajang kompetisi client dan berhasil menjuarai ajang tersebut dengan posisi ke 2. Saya berkontribusi pada pembuatan aplikasi mobile menggunakan Flutter secara keseluruhan dan membuat API untuk login dan register aplikasi menggunakan framework Laravel.', 'https://play.google.com/store/apps/details?id=com.qwhizy.mdaq'),
    new Project('https://azisrosyid.github.io/portfolio/images/project6.png', 'Toll interchange-ED (Semester 3)', 'Aplikasi mobile pada platform android yang digunakan untuk mengedukasi pelajar SMK khususnya bidang DPIB pada materi perancangan geometri lengkung pada interchange jalan tol. Saya berperan dalam mengembangkan aplikasi secara keseluruhan menggunakan Flutter.', '#'),
    new Project('https://azisrosyid.github.io/portfolio/images/project7.png', 'Royal Photoshare (Semester 4)', 'Aplikasi mobile pada platform android yang digunakan untuk membantu usaha fotografi "Royal Artwork" dalam memudahkan dan meningkatkan efisiensi. Aplikasi ini dirancang secara eksklusif kepada usaha fotografi "Royal Artwork Yogyakarta". Saya berperan dalam pengembangan aplikasi secara keseluruhan menggunakan Flutter.', '#')
];

const projectsData_en = [
    new Project('https://azisrosyid.github.io/portfolio/images/project1.png', 'Game Planet AR (2nd Semester)', 'A game that was the output of PPM activities at SMK Negeri 2 Pakem. I contributed to designing and creating the entire game system using the Unity game engine, with other team members supplying game assets.', 'https://drive.google.com/drive/folders/1AHcx-PG9zbxuQDjZl-7TZxqqKWP-BDHK?usp=sharing'),
    new Project('https://azisrosyid.github.io/portfolio/images/project2.png', 'E-Mathematics Aptitude Test (2nd Semester)', 'A website used to conduct mathematics tests for students as the output of a client\'s dissertation. I was responsible for configuring the entire back-end, including the database, using the CodeIgniter 4 framework.', 'https://github.com/AzisRosyid/cbt-project'),
    new Project('https://azisrosyid.github.io/portfolio/images/project3.png', 'Panenku Indonesia (3rd Semester)', 'A website used to facilitate partnership transactions in oyster mushroom cultivation as the output of a client\'s PKM project. I contributed to configuring the back-end for the main features, namely partnership transactions and the dashboard, as well as configuring the website database and web server management.', 'https://panenkuindonesia.com/'),
    new Project('https://azisrosyid.github.io/portfolio/images/project4.png', 'Edu MIT (3rd Semester)', 'A mobile application on the Android platform used to educate the public on Mount Merapi disaster mitigation. I was responsible for leading the project and handling the entire mobile application using Flutter. Design and assets were handled by team members.', 'https://play.google.com/store/apps/details?id=com.edumit.app_mitigasi_bencana'),
    new Project('https://azisrosyid.github.io/portfolio/images/project5.png', 'Qwhizy (3rd Semester)', 'A mobile application on the Android platform used to assist with Al-Quran memorization. This application project was created for a client\'s competition and successfully won 2nd place. I contributed to the entire mobile application development using Flutter and created the login and register API using the Laravel framework.', 'https://play.google.com/store/apps/details?id=com.qwhizy.mdaq'),
    new Project('https://azisrosyid.github.io/portfolio/images/project6.png', 'Toll Interchange-ED (3rd Semester)', 'A mobile application on the Android platform used to educate vocational high school students, especially in the DPIB field, on the material of designing curved geometry for toll road interchanges. I was responsible for developing the entire application using Flutter.', '#'),
    new Project('https://azisrosyid.github.io/portfolio/images/project7.png', 'Royal Photoshare (4th Semester)', 'A mobile application on the Android platform used to help the "Royal Artwork" photography business improve convenience and efficiency. This application was designed exclusively for the "Royal Artwork Yogyakarta" photography business. In this project, I was responsible for the overall application development (UI and System) using Flutter.', '#')
];

const translations = {
    en: {
        nav_about: "About",
        nav_projects: "Projects",
        nav_contact: "Contact",
        language: "Language",
        about_title: "About Me",
        about_p1: "Hi, my name is Azis Rosyid. Dedicated student with a passion for technology, particularly in the realm of software engineering. Demonstrated expertise and hands-on experience in leveraging technology to solve complex problems.",
        about_p2: "Like to participating in scientific writing competitions, showcasing a strong commitment to academic and intellectual pursuits. Eager to contribute technical skills and innovative thinking to a dynamic team or project. Aspiring professional with a keen interest in staying at the forefront of technological advancements.",
        about_p3: "Let's embark on a journey to create exceptional software that not only meets but exceeds expectations. I'm excited to bring my skills and enthusiasm to your next project!",
        projects_title: "Projects",
        contact_title: "Contact Me",
        form_name: "Name",
        form_email: "Email",
        form_message: "Message",
        form_send: "Send Message",
        project_button: "View Project"
    },
    id: {
        nav_about: "Tentang",
        nav_projects: "Proyek",
        nav_contact: "Kontak",
        language: "Bahasa",
        about_title: "Tentang Saya",
        about_p1: "Hai, nama saya Azis Rosyid. Mahasiswa yang berdedikasi dengan hasrat terhadap teknologi, khususnya di bidang rekayasa perangkat lunak. Menunjukkan keahlian dan pengalaman langsung dalam memanfaatkan teknologi untuk memecahkan masalah yang kompleks.",
        about_p2: "Suka berpartisipasi dalam kompetisi penulisan ilmiah, menunjukkan komitmen yang kuat terhadap pengejaran akademis dan intelektual. Bersemangat untuk menyumbangkan keterampilan teknis dan pemikiran inovatif ke tim atau proyek yang dinamis. Profesional yang bercita-cita tinggi dengan minat yang besar untuk tetap menjadi yang terdepan dalam kemajuan teknologi.",
        about_p3: "Mari kita memulai perjalanan untuk menciptakan perangkat lunak luar biasa yang tidak hanya memenuhi tetapi melampaui harapan. Saya bersemangat untuk membawa keterampilan dan antusiasme saya ke proyek Anda berikutnya!",
        projects_title: "Proyek",
        contact_title: "Hubungi Saya",
        form_name: "Nama",
        form_email: "Email",
        form_message: "Pesan",
        form_send: "Kirim Pesan",
        project_button: "Lihat Proyek"
    }
};