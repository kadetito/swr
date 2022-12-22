import bcrypt from "bcryptjs";

interface SeedTeams {
  team_name: string;
  formal_name: string;
  slug: string;
  location_city: string;
  year_foundation: string;
  shield_image: string;
  actually_squad_image: string;
  first_wear_image: string;
  second_wear_image: string;
  league: SeedLeague;
  stadium: SeedStadium;
  technical_staff: SeedTechnicalStaff[];
  players: SeedPlayers[];
}

interface SeedPlayers {
  name: string;
  slug: string;
  birthday: string;
  position: string;
  position_abbreviate: string;
  nationality: string;
  dorsal: string;
  club: string;
  image: string;
}

interface SeedLeague {
  identify: string;
  name: string;
}

interface SeedStadium {
  name: string;
  capacity: string;
  address: string;
  image: string;
}

interface SeedTechnicalStaff {
  name: string;
  appointment: string;
  image: string;
}
interface SeedUser {
  name: string;
  email: string;
  password: string;
  role: "admin" | "client";
  number_col: string;
  images: string[];
  slug: string;
  birthDate: string;
  expertise: string;
  tags: string[];
}

interface SeedData {
  users: SeedUser[];
  teams: SeedTeams[];
}

export const initialData: SeedData = {
  users: [
    {
      name: "Miguel Romero Dalmau",
      email: "fernando@google.com",
      password: bcrypt.hashSync("123456"),
      role: "admin",
      number_col: "PLJK88675",
      images: ["villegasscaled.jpg", "1740176-00-A_1.jpg"],
      slug: "miguel_romero_dalmau_pljk88675",
      birthDate: "1974-08-25",
      expertise: "Ginecología",
      tags: ["ginecologia", "pediatria"],
    },
    {
      name: "Javier Gallarriga Dalmau",
      email: "eduardo@google.com",
      password: bcrypt.hashSync("123456"),
      role: "client",
      number_col: "HJSH88675",
      images: ["sexologo-pedro-villegas.jpg", "1740176-00-A_1.jpg"],
      slug: "javier_gallarriga_dalmau_hjsh88675",
      birthDate: "1979-02-15",
      expertise: "Psicología",
      tags: ["psicologia", "pediatria"],
    },
  ],
  teams: [
    {
      team_name: "Futbol Club Barcelona",
      formal_name: "FC Barcelona",
      slug: "fc_barcelona",
      location_city: "Barcelona",
      year_foundation: "2002",
      shield_image:
        "https://assets.laliga.com/assets/2019/06/07/small/barcelona.png",
      actually_squad_image:
        "https://monesport.cat/app/uploads/sites/12/2022/11/gp25597_full-1-1024x512.jpg",
      first_wear_image:
        "https://m.media-amazon.com/images/I/51BYVULpC6L._AC_UL320_.jpg",
      second_wear_image:
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/f2aad51b-a9cb-41d1-8276-e2d5b56043ca/segunda-equipacion-stadium-fc-barcelona-2022-23-camiseta-de-futbol-dri-fit-nino-a-JFNN1N.png",
      league: {
        identify: "0001",
        name: "La Liga Iberdrola",
      },
      stadium: {
        name: "Johan Cruyff",
        capacity: "6000",
        address: "Sant Joan Despí, Barcelona",
        image:
          "https://cronicaglobal.elespanol.com/culemania/uploads/s1/64/59/03/9/una-imagen-del-estadi-johan-cruyff-fcb.jpeg",
      },
      technical_staff: [
        {
          name: "Jonatan Giráldez",
          appointment: "Coach Manager",
          image:
            "https://estaticos-cdn.elperiodico.com/clip/d621041c-929d-46e9-9db7-1ad7c21305b5_alta-libre-aspect-ratio_default_0.jpg",
        },
      ],
      players: [
        {
          name: "Sandra Paños",
          slug: "sandra_panyos",
          birthday: "1992-11-04",
          position: "Goalkeeper",
          position_abbreviate: "GK",
          nationality: "Spain",
          dorsal: "1",
          club: "FC Barcelona",
          image:
            "https://www.futboleras.es/data/players/Panos@1660663787206@530x530-adjust_middle.png",
        },
        {
          name: "Irene Paredes",
          slug: "irene_paredes",
          birthday: "1991-07-04",
          position: "Defensive",
          position_abbreviate: "DF",
          nationality: "Spain",
          dorsal: "2",
          club: "FC Barcelona",
          image:
            "https://img.uefa.com/imgml/TP/players/28/2022/324x324/250007458.jpg",
        },
        {
          name: "Laia Codina",
          slug: "laia_codina",
          birthday: "2000-01-22",
          position: "Defensive",
          position_abbreviate: "DM",
          nationality: "Spain",
          dorsal: "3",
          club: "FC Barcelona",
          image:
            "https://www.ceroacero.es/img/jogadores/47/608647_med__20190920140422_laia_codina.jpg",
        },
      ],
    },
    {
      team_name: "Real Madrid Club de Futbol",
      formal_name: "Real Madrid",
      slug: "real_madrid",
      location_city: "Madrid",
      year_foundation: "2020",
      shield_image:
        "https://assets.laliga.com/assets/2019/06/07/small/real-madrid.png",
      actually_squad_image:
        "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2020/07/14/15947385744002.png",
      first_wear_image:
        "https://cdn.shopify.com/s/files/1/0448/3609/4115/products/HF0292-RMCFMZ0075-02_500x480.jpg?v=1655974535",
      second_wear_image:
        "https://cdn.shopify.com/s/files/1/0448/3609/4115/products/RMCFMZ0076-01_533x.jpg",
      league: {
        identify: "0001",
        name: "La Liga Iberdrola",
      },
      stadium: {
        name: "Alfredo Di Stefano",
        capacity: "6000",
        address:
          "Av. de Alejandro de la Sota, 28055 Ciudad Deportiva del Real, Madrid",
        image:
          "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2020/05/29/15907876960647.jpg",
      },
      technical_staff: [
        {
          name: "Alberto Toril",
          appointment: "Coach Manager",
          image: "https://pbs.twimg.com/media/FWghYvUVEAAEs-Y?format=jpg",
        },
      ],
      players: [
        {
          name: "Misa Rodríguez",
          slug: "misa_rodriguez",
          birthday: "1999-07-22",
          position: "Goalkeeper",
          position_abbreviate: "GK",
          nationality: "Spain",
          dorsal: "1",
          club: "Real Madrid",
          image:
            "https://www.teldeactualidad.com/userfiles/deportes/2020/09/11427/misarodriguezrealmadrid.jpg",
        },
        {
          name: "Kenti Robles",
          slug: "kenti_robles",
          birthday: "1991-02-15",
          position: "Defensa",
          position_abbreviate: "DF",
          nationality: "México",
          dorsal: "2",
          club: "Real Madrid",
          image:
            "https://www.realmadrid.com/img/vertical_380px/kenti-robles_jt19822_20220919034533.jpg",
        },
        {
          name: "Teresa Abelleira",
          slug: "teresa_abelleira",
          birthday: "2000-01-09",
          position: "Midfielder",
          position_abbreviate: "MF",
          nationality: "Spain",
          dorsal: "3",
          club: "Real Madrid",
          image:
            "https://www.realmadrid.com/img/vertical_380px/teresa_jt10030_20220919034534.jpg",
        },
      ],
    },
    {
      team_name: "Atlético de Madrid Femenino",
      formal_name: "Atlético de Madrid",
      location_city: "Madrid",
      slug: "atletico_madrid",
      year_foundation: "2001",
      shield_image:
        "https://assets.laliga.com/assets/2019/06/07/small/atletico-feminas.png",
      actually_squad_image:
        "https://img-estaticos.atleticodemadrid.com/system/file5s/52051/medium2x2/PrB535pSmY_femenino_redes.jpg",
      first_wear_image:
        "https://images.footballfanatics.com/atletico-de-madrid/atl%C3%A9tico-de-madrid-home-stadium-shirt-2022-23_ss4_p-13303255+u-4r74j0bc507epx4vvfwr+v-8be24908cec14b20a909c6e0d07b0b0a.jpg",
      second_wear_image:
        "https://images.footballfanatics.com/atletico-de-madrid/atl%C3%A9tico-de-madrid-third-stadium-shirt-2022-23-with-correa-10-printing_ss4_p-13318824+u-1d52jkq6etcrdaautblk+v-bb59404b9a294ec6836f7e8b0dd90820.jpg",
      league: {
        identify: "0001",
        name: "La Liga Iberdrola",
      },
      stadium: {
        name: "Centro Deportivo Cívitas Alcalá de Henares",
        capacity: "2700",
        address: "Alcalá de Henares, Madrid",
        image:
          "https://estaticos.esmadrid.com/cdn/farfuture/mHEFC9nk8WhqKHe6p0m0C6mBhu2lZPiHJp5HttGvZ1E/mtime:1646729487/sites/default/files/styles/content_type_full/public/recursosturisticos/deporte/centro_deportivo_wanda_alcala_de_henares_2.jpg?itok=pEepGOSW",
      },
      technical_staff: [
        {
          name: "María Vargas",
          appointment: "Coach Manager",
          image:
            "https://www.atleticodemadrid.com/system/file3s/5752/large/maria_vargas_premio.jpg",
        },
      ],
      players: [
        {
          name: "Lola Gallardo",
          slug: "lola_gallardo",
          birthday: "1993-06-10",
          position: "Goalkeeper",
          position_abbreviate: "GK",
          nationality: "Spain",
          dorsal: "13",
          club: "Atlético de Madrid",
          image:
            "https://assets.laliga.com/squad/2022/t11212/p165356/512x512/p165356_t11212_2022_0_003_000.png",
        },
        {
          name: "Merel van Dongen",
          slug: "merel_van_dongen",
          birthday: "1993-02-11",
          position: "Defensive",
          position_abbreviate: "DF",
          nationality: "Nederlands",
          dorsal: "5",
          club: "Atlético de Madrid",
          image:
            "https://assets.laliga.com/squad/2022/t11212/p165609/512x512/p165609_t11212_2022_0_003_000.png",
        },
        {
          name: "Carmen Menayo",
          slug: "carmen_menayo",
          birthday: "1998-04-14",
          position: "Defensive",
          position_abbreviate: "MF",
          nationality: "Spain",
          dorsal: "11",
          club: "Atlético de Madrid",
          image:
            "https://assets.laliga.com/squad/2022/t11212/p176175/512x512/p176175_t11212_2022_0_003_000.png",
        },
      ],
    },
    {
      team_name: "Alhama CF",
      formal_name: "Alhama CF",
      location_city: "Murcia",
      slug: "alhama_cf",
      year_foundation: "2004",
      shield_image:
        "https://assets.laliga.com/assets/2022/08/11/small/84b1324944034fbe24ca0acca36f89f6.png",
      actually_squad_image:
        "https://intereconomia.com/wp-content/uploads/2022/08/Foto-Alhama-ElPozo-femenino.jpg",
      first_wear_image: "",
      second_wear_image: "",
      league: {
        identify: "0001",
        name: "La Liga Iberdrola",
      },
      stadium: {
        name: "Complejo Deportivo Guadalentín",
        capacity: "1500",
        address: "C. Lentisco, 30840 Alhama de Murcia, Murcia",
        image:
          "https://sietediasalhama.com/fotos/1/10379_snapshot2021-02-2818-39-03_thumb_468.jpg",
      },
      technical_staff: [
        {
          name: "Juan Antonio García Martínez",
          appointment: "Coach Manager",
          image:
            "https://www.futboleras.es/data/staffMembers/RANDRI@1631692564592@530x530-adjust_middle.jpg",
        },
      ],
      players: [
        {
          name: "Laura Martínez",
          slug: "laura_martinez_alhama",
          birthday: "2000-11-21",
          position: "Goalkeeper",
          position_abbreviate: "GK",
          nationality: "Spain",
          dorsal: "1",
          club: "Alhama CF",
          image:
            "https://www.futboleras.es/data/players/Laura%20Martinez@1662927478934@530x530-adjust_middle.jpg",
        },
        {
          name: "Olivia Oprea",
          slug: "olivia_oprea_alhama",
          birthday: "1987-03-19",
          position: "Defensive",
          position_abbreviate: "DF",
          nationality: "Rumania",
          dorsal: "2",
          club: "Alhama CF",
          image:
            "https://www.futboleras.es/data/players/Olivia%20Oprea@1662929101565@530x530-adjust_middle.jpg",
        },
        {
          name: "Lena Pérez",
          slug: "lena_perez_alhama",
          birthday: "1995-12-27",
          position: "Defensive",
          position_abbreviate: "MF",
          nationality: "Spain",
          dorsal: "3",
          club: "Alhama CF",
          image:
            "https://www.futboleras.es/data/players/Lena%20Perez@1662928765763@530x530-adjust_middle.jpg",
        },
      ],
    },
    {
      team_name: "Athletic Club de Bilbao",
      formal_name: "Athletic Club",
      location_city: "Bilbao",
      slug: "athletic_club",
      year_foundation: "2002",
      shield_image:
        "https://assets.laliga.com/assets/2019/06/07/small/athletic-femenino.png",
      actually_squad_image:
        "https://cdn.athletic-club.eus/imagenes/equipos/L/athletic-club-femenino_L.jpg",
      first_wear_image:
        "https://www.tradeinn.com/f/13812/138121805/new-balance-conjunto-athletic-club-bilbao-21-22-primera-equipacion-infantil.jpg",
      second_wear_image: "https://tiendayofutbol.es/8187/camiseta.jpg",
      league: {
        identify: "0001",
        name: "La Liga Iberdrola",
      },
      stadium: {
        name: "Instalaciones de Lezama",
        capacity: "3250",
        address: "Lezama (Vizcaya)",
        image:
          "https://cdn.athletic-club.eus/imagenes/paginas_plantilla/lezama-athletic-club-2018-1920x1080.jpg",
      },
      technical_staff: [
        {
          name: "Iraia Iturregi",
          appointment: "Coach Manager",
          image:
            "https://assets.laliga.com/squad/2022/t12034/man54750/2048x2048/man54750_t12034_2022_0_003_000.png",
        },
      ],
      players: [
        {
          name: "Sun Quiñones",
          slug: "sun_quinones",
          birthday: "1996-10-29",
          position: "Goalkeeper",
          position_abbreviate: "GK",
          nationality: "Spain",
          dorsal: "1",
          club: "Athletic Club",
          image:
            "https://cdn.athletic-club.eus/uploads/2021/07/2021.06.30-MARIASUN-QUI%C3%91ONES-EN-LEZAMA-Y-IMQ-12-480x704.jpg",
        },
        {
          name: "Garazi Murua",
          slug: "garazi_murua",
          birthday: "1995-01-24",
          position: "Defensive",
          position_abbreviate: "DF",
          nationality: "Spain",
          dorsal: "4",
          club: "Athletic Club",
          image:
            "https://assets.laliga.com/squad/2022/t12034/p192087/512x512/p192087_t12034_2022_0_003_000.png",
        },
        {
          name: "Naroa Uriarte",
          slug: "naroa_uriarte",
          birthday: "2001-02-05",
          position: "Defensive",
          position_abbreviate: "DF",
          nationality: "Spain",
          dorsal: "5",
          club: "Athletic Club",
          image:
            "https://assets.laliga.com/squad/2022/t12034/p469671/512x512/p469671_t12034_2022_0_003_000.png",
        },
      ],
    },
    {
      team_name: "Sevilla Fútbol Club SAD",
      formal_name: "Sevilla CF",
      location_city: "Sevilla",
      slug: "sevilla_cf",
      year_foundation: "2007",
      shield_image:
        "https://assets.laliga.com/assets/2019/06/07/small/sevilla.png",
      actually_squad_image:
        "https://static2-sevilla.abc.es/media/orgullodenervion/2021/06/25/s/foto-sevilla-femenino-U57321276403FAE-1200x630@abc.jpeg",
      first_wear_image:
        "https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/202208/08/00110410223423____2__1200x1200.jpg",
      second_wear_image:
        "https://img.planetafobal.com/2022/07/sevilla-castore-segunda-equipacion-2022-2023-wq.jpg",
      league: {
        identify: "0001",
        name: "La Liga Iberdrola",
      },
      stadium: {
        name: "Ciudad Deportiva José Ramón Cisneros Palacios",
        capacity: "7500",
        address: "Sevilla",
        image:
          "https://sevillafc.es/sites/default/files/inline-images/Gradas%20estadio%20Jes%C3%BAs%20Navas.jpg",
      },
      technical_staff: [
        {
          name: "Cristian Toro",
          appointment: "Coach Manager",
          image:
            "https://sevillafc.es/sites/default/files/team_players/profiles/Entrenador_Cristian_Toro.jpg",
        },
      ],
      players: [
        {
          name: "Esther Sullastres",
          slug: "esther_sullastres",
          birthday: "1993-03-20",
          position: "Goalkeeper",
          position_abbreviate: "GK",
          nationality: "Spain",
          dorsal: "1",
          club: "Sevilla CF",
          image:
            "https://assets.laliga.com/squad/2022/t13326/p249047/512x512/p249047_t13326_2022_0_003_000.png",
        },
        {
          name: "Teresa Mérida",
          slug: "teresa_merida",
          birthday: "2002-07-17",
          position: "Defensive",
          position_abbreviate: "DF",
          nationality: "Spain",
          dorsal: "4",
          club: "Sevilla CF",
          image:
            "https://assets.laliga.com/squad/2022/t13326/p248527/512x512/p248527_t13326_2022_0_003_000.png",
        },
        {
          name: "Almudena Rivero",
          slug: "almudena_rivero",
          birthday: "2002-03-07",
          position: "Defensive",
          position_abbreviate: "DF",
          nationality: "Spain",
          dorsal: "16",
          club: "Sevilla CF",
          image:
            "https://assets.laliga.com/squad/2022/t13326/p476162/512x512/p476162_t13326_2022_0_003_000.png",
        },
      ],
    },
  ],
};
