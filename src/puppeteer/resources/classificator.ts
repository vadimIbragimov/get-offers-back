


export const classificator = [
    {
        id: "0",
        name: "Adidas",
        brand: [
            "/adidas/", 
            "/adids/", 
            "/abibas/", 
            "/адидас/"
        ],
        series: [
          {
            name: "Yeezy",
            regexp: [
                "/yeezy/", 
                "/yezy/", 
                "/yeezzy/", 
                "/yezzy/", 
                "/изи/", 
                "/kanye/", 
                "/boost/", 
                "/ezzy/"
            ],
            models: [
              {
                name: "Yeezy 350 v2",
                regexp: [
                    "/350/", 
                    "/v2/", 
                    "/350v2/"
                ],
              },
              {
                name: "Yeezy 500",
                regexp: [
                    "/500/"
                ],
              },
              {
                name: "Yeezy 380",
                regexp: [
                    "/380/"
                ],
              },
              {
                name: "Yeezy 700",
                regexp: [
                    "/700/"
                ],
              },
            ]
          },
            {
                name: "Y-3",
                regexp: [
                    "/y-3/", 
                    "/у-3/", 
                    "/y3/",
                    "/у3/",
                ],
            },
            {
                name: "Raf Simons",
                regexp: [
                    "/raf/", 
                    "/simons/", 
                    "/rafsimons/", 
                    "/раф/"
                ],
            },
            {
                name: "Alexander Wang",
                regexp: [
                    "/alexander/", 
                    "/wang/"
                ],
            },
            {
                name: "Ozweego",
                regexp: [
                    "/ozweego/", 
                    "/ozwego/",
                    "/озвего/"
                ],
            },

        ],
      },


      {
        id: "1",
        name: "Nike",
        brand: [
            "/nike/", 
            "/nik/", 
            "/n*ke/", 
            "/найк/", 
            "/nake/"
        ],
        series: [
            {
                name: "Air",
                regexp: [
                    "/air/", 
                    "/аир/", 
                    "/эир/", 
                ],
                models: [
                    {
                        name: "Air Jordan",
                        regexp: [
                            "/jordan/", 
                            "/джордан/", 
                            "/джорданы/", 
                            "/жоры/", 
                            "/airjordan/", 
                            "/jordn/", 
                            "/.jordan/", 
                            "/жордан/",
                            "/jordon/",
                        ],
                    },
                    {
                        name: "Air Max",
                        regexp: [
                            "/airmax/", 
                            "/max/", 
                            "/макс/", 
                            "/эир/", 
                        ],
                    },
                    {
                        name: "Air Force",
                        regexp: [
                            "/force/", 
                            "/airforce/", 
                            "/forc/", 
                            "/forse/", 
                            "/форс/",
                            "/af/",
                        ],
                    },
                    {
                        name: "Air Vapormax",
                        regexp: [
                            "/vapormax/", 
                            "/vapor/", 
                        ],
                    },

                ]
            },
            {
                name: "SB",
                regexp: [
                    "/sb/",
                    "/skateboarding/", 
                ],
            },
            {
                name: "Nike x Off-White",
                regexp: [
                    "/off/",
                    "/offwhite/",
                    "/off-white/",
                    "/офф/"
                ],
            },
            {
                name: "Suptempo",
                regexp: [
                    "/suptempo/",
                ],
            },
            {
                name: "Dunk",
                regexp: [
                    "/dunk/",
                ],
            },


        ],
      },

      {
        id: "2",
        name: "Alexander McQueen",
        brand: [
            "/mcqueen/", 
        ],
      },

      {
        id: "3",
        name: "Asics",
        brand: [
            "/asics/", 
        ],
      },

      {
        id: "4",
        name: "A Bathing Ape",
        brand: [
            "/bape/", 
            "/bathing/", 
            "/ape/", 
            "/бэйп/"
        ],
        series: [
            {                
                name: "Shark",
                regexp: [
                      "/shark/", 
                      "/шарк/", 
                ],
            },
            {                
                name: "Hoodies",
                regexp: [
                      "/hoodie/", 
                      "/logo/", 
                      "/худи/", 
                      "/худак/",
                      "/толстовка/",
                      "/sleeve/", 
                      "/long/", 
                      "/сливак/",
                      "/слив/",
                      "/лонг/",
                      "/лонг-слив/"
                ],
            },
            {                
                name: "T-shirt",
                regexp: [
                      "/t-shirt/", 
                      "/tee/", 
                      "/shirt/", 
                      "/thirt/", 
                      "/тишка/", 
                      "/футболка/",
                      "/sleeve/", 
                      "/long/", 
                      "/сливак/",
                      "/слив/",
                      "/лонг/",
                      "/лонг-слив/"
                ],
            },
            {                
                name: "Jacket",
                regexp: [
                      "/jacket/",
                      "/куртка/",
                      "/плащ/",
                ],
            },
            {                
                name: "Camo",
                regexp: [
                      "/camo/",
                ],
            },
        ]
      },

      {
        id: "5",
        name: "Balenciaga",
        brand: [
            "/balenciaga/", 
            "/balensiaga/", 
            "/баленсиага/", 
        ],
        series: [
            {                
              name: "Triple-s",
              regexp: [
                    "/triple-s/", 
                    "/triple/", 
                    "/трипл-с/", 
                    "/трипл/", 
              ],
            },
            {                
                name: "Hoodies",
                regexp: [
                      "/hoodie/", 
                      "/logo/", 
                      "/bb/", 
                      "/худи/", 
                      "/худак/",
                      "/толстовка/",
                      "/sleeve/", 
                      "/long/", 
                      "/сливак/",
                      "/слив/",
                      "/лонг/",
                      "/лонг-слив/"
                ],
            },
            {                
                name: "Long sleeve",
                regexp: [
                      "/sleeve/", 
                      "/long/", 
                      "/сливак/"
                ],
            },
            {                
                name: "T-shirt",
                regexp: [
                      "/t-shirt/", 
                      "/tee/", 
                      "/shirt/", 
                      "/thirt/", 
                      "/тишка/", 
                      "/футболка/",
                      "/sleeve/", 
                      "/long/", 
                      "/сливак/",
                      "/слив/",
                      "/лонг/",
                      "/лонг-слив/"
                ],
            },
            {                
                name: "Track",
                regexp: [
                      "/track/",
                ],
            },
            {                
                name: "Jacket",
                regexp: [
                      "/jacket/",
                      "/куртка/",
                      "/плащ/",
                ],
            },
        ]
      },

      
      {
        id: "6",
        name: "Calvin Klein",
        brand: [
            "/calvin/", 
            "/klein/", 
            "/ck/", 
        ],
        series: [
            {                
                name: "Jeans",
                regexp: [
                      "/jeans/", 
                      "/джинс/", 
                ],
            },
            {                
                name: "T-shirt",
                regexp: [
                      "/t-shirt/", 
                      "/tee/", 
                      "/shirt/", 
                      "/thirt/", 
                      "/тишка/", 
                      "/футболка/",
                      "/sleeve/", 
                      "/long/", 
                      "/сливак/",
                      "/слив/",
                      "/лонг/",
                      "/лонг-слив/"
                ],
            },
            {                
                name: "Long sleeve",
                regexp: [
                      "/sleeve/", 
                      "/long/", 
                      "/сливак/"
                ],
            },
            {                
                name: "Jacket",
                regexp: [
                      "/jacket/",
                      "/куртка/",
                      "/плащ/",
                ],
            },
            {                
                name: "Hoodies",
                regexp: [
                      "/hoodie/", 
                      "/logo/", 
                      "/худи/", 
                      "/худак/",
                      "/толстовка/",
                      "/слив/",
                      "/лонг/",
                      "/лонг-слив/"
                ],
            },
        ]
    },
    {
        id: "7",
        name: "Converse",
        brand: [
            "/converse/", 
            "/конверс/", 
            "/конверсы/", 
        ],
        series: [
            {                
                name: "All Star",
                regexp: [
                      "/star/", 
                      "/all/", 
                      "/стар/", 
                ],
            },
            {                
                name: "Ramones",
                regexp: [
                      "/ramones/", 
                      "/рамоны/", 
                ],
            },
            {                
                name: "T-shirt",
                regexp: [
                      "/t-shirt/", 
                      "/tee/", 
                      "/shirt/", 
                      "/thirt/", 
                      "/тишка/", 
                      "/футболка/",
                      "/слив/",
                      "/лонг/",
                      "/лонг-слив/"
                ],
            },
        ]
    },
    {
        id: "8",
        name: "Dolce&Gabbana",
        brand: [
            "/dolce/", 
            "/gabbana/", 
            "/dolce&Gabbana/", 
        ],
        series: [
            {                
                name: "T-shirt",
                regexp: [
                      "/t-shirt/", 
                      "/tee/", 
                      "/shirt/", 
                      "/thirt/", 
                      "/тишка/", 
                      "/футболка/",
                      "/слив/",
                      "/лонг/",
                      "/лонг-слив/"
                ],
            },
        ]
    },

    {
        id: "9",
        name: "Fila",
        brand: [
            "/fila/", 
            "/фила/", 
        ],
        series: [
            {                
                name: "T-shirt",
                regexp: [
                      "/t-shirt/", 
                      "/tee/", 
                      "/shirt/", 
                      "/thirt/", 
                      "/polo/",
                      "/sleeve/", 
                      "/long/", 
                      "/тишка/", 
                      "/футболка/",
                      "/слив/",
                      "/лонг/",
                      "/лонг-слив/",
                      "/поло/"
                ],
            },
            {                
                name: "Hoodies",
                regexp: [
                      "/hoodie/", 
                      "/logo/", 
                      "/худи/", 
                      "/худак/",
                      "/толстовка/",
                      "/sleeve/", 
                      "/long/", 
                      "/сливак/",
                      "/слив/",
                      "/лонг/",
                      "/лонг-слив/"
                ],
            },
            {                
                name: "Jacket",
                regexp: [
                      "/jacket/",
                      "/куртка/",
                      "/плащ/",
                ],
            },
        ]
    },

    {
        id: "10",
        name: "Fred Perry",
        brand: [
            "/perry/", 
            "/fred/", 
            "/fp/", 
            "/фред/", 
        ],
        series: [
            {                
                name: "T-shirt",
                regexp: [
                      "/t-shirt/", 
                      "/tee/", 
                      "/shirt/", 
                      "/thirt/", 
                      "/polo/",
                      "/тишка/", 
                      "/футболка/",
                      "/sleeve/", 
                      "/long/", 
                      "/сливак/",
                      "/слив/",
                      "/лонг/",
                      "/лонг-слив/",
                      "/поло/"
                ],
            },
        ]
    },

    {
        id: "11",
        name: "Givenchy",
        brand: [
            "/givenchy/", 
            "/живанши/", 
            "/дживанши/", 
            "/givanchy/", 
        ],
        series: [
            {                
                name: "T-shirt",
                regexp: [
                      "/t-shirt/", 
                      "/tee/", 
                      "/shirt/", 
                      "/thirt/",
                      "/polo/", 
                      "/тишка/", 
                      "/футболка/",
                ],
            },
            {                
                name: "Sweatshirt",
                regexp: [
                      "/sweatshirt/",
                      "/свитшот/",
                      "/свитер/",
                      "/кофта/",
                      "/sleeve/", 
                      "/long/", 
                      "/сливак/",
                      "/слив/",
                      "/лонг/",
                      "/лонг-слив/",
                      "/толстовка/",
                ],
            },
            {                
                name: "Hoodies",
                regexp: [
                      "/hoodie/", 
                      "/logo/", 
                      "/худи/", 
                      "/худак/",
                      "/толстовка/",
                      "/sleeve/", 
                      "/long/", 
                      "/сливак/",
                      "/слив/",
                      "/лонг/",
                      "/лонг-слив/"
                ],
            },
        ]
    },

    {
        id: "12",
        name: "Heron Preston",
        brand: [
            "/heron/", 
            "/preston/", 
            "/стиль/", 
            "/херон/", 
            "/престон/", 
        ],
        series: [
            {                
                name: "T-shirt",
                regexp: [
                      "/t-shirt/", 
                      "/tee/", 
                      "/shirt/", 
                      "/thirt/", 
                      "/тишка/", 
                      "/футболка/",
                ],
            },
            {                
                name: "Sweatshirt",
                regexp: [
                      "/sweatshirt/",
                      "/свитшот/",
                      "/свитер/",
                      "/кофта/",
                      "/sleeve/", 
                      "/long/", 
                      "/сливак/",
                      "/слив/",
                      "/лонг/",
                      "/лонг-слив/",
                      "/толстовка/",
                ],
            },
            {                
                name: "Hoodies",
                regexp: [
                      "/hoodie/", 
                      "/logo/", 
                      "/худи/", 
                      "/худак/",
                      "/толстовка/",
                      "/sleeve/", 
                      "/long/", 
                      "/сливак/",
                      "/слив/",
                      "/лонг/",
                      "/лонг-слив/"
                ],
            },
        ]
    },

    {
        id: "13",
        name: "Kappa",
        brand: [
            "/kappa/", 
            "/kapa/", 
            "/каппа/", 
            "/капа/", 
        ],
        series: [
            {                
                name: "Sweatshirt",
                regexp: [
                      "/sweatshirt/",
                      "/свитшот/",
                      "/свитер/",
                      "/кофта/",
                      "/sleeve/", 
                      "/long/", 
                      "/сливак/",
                      "/слив/",
                      "/лонг/",
                      "/лонг-слив/",
                      "/толстовка/",
                ],
            },
            {                
                name: "Hoodies",
                regexp: [
                      "/hoodie/", 
                      "/logo/", 
                      "/худи/", 
                      "/худак/",
                      "/толстовка/",
                      "/sleeve/", 
                      "/long/", 
                      "/сливак/",
                      "/слив/",
                      "/лонг/",
                      "/лонг-слив/"
                ],
            },
        ]
    },

    {
        id: "14",
        name: "Levis",
        brand: [
            "/levis/", 
            "/levs/", 
            "/левайс/", 
        ],
        series: [
            {                
                name: "T-shirt",
                regexp: [
                      "/t-shirt/", 
                      "/tee/", 
                      "/shirt/", 
                      "/thirt/", 
                      "/тишка/", 
                      "/футболка/",
                ],
            },
            {                
                name: "Sweatshirt",
                regexp: [
                      "/sweatshirt/",
                      "/свитшот/",
                      "/свитер/",
                      "/кофта/",
                      "/sleeve/", 
                      "/long/", 
                      "/сливак/",
                      "/слив/",
                      "/лонг/",
                      "/лонг-слив/",
                      "/толстовка/",
                ],
            },
            {                
                name: "Hoodies",
                regexp: [
                      "/hoodie/", 
                      "/logo/", 
                      "/sleeve/", 
                      "/long/", 
                      "/худи/", 
                      "/худак/",
                      "/толстовка/",
                      "/сливак/",
                      "/слив/",
                      "/лонг/",
                      "/лонг-слив/",
                ],
            },
            {                
                name: "Jeans",
                regexp: [
                      "/jeans/", 
                      "/джинс/", 
                      "/джинсы/", 
                ],
            },
        ]
    },

    {
        id: "15",
        name: "Louis Vuitton",
        brand: [
            "/louis/", 
            "/vuitton/", 
            "/луи/", 
        ],
        series: [
            {                
                name: "T-shirt",
                regexp: [
                      "/t-shirt/", 
                      "/tee/", 
                      "/shirt/", 
                      "/thirt/", 
                      "/тишка/", 
                      "/футболка/",
                      "/sleeve/", 
                      "/long/", 
                      "/сливак/",
                      "/слив/",
                      "/лонг/",
                      "/лонг-слив/",
                ],
            },
            {                
                name: "Hoodies",
                regexp: [
                      "/hoodie/", 
                      "/logo/", 
                      "/худи/", 
                      "/худак/",
                      "/толстовка/",
                      "/sleeve/", 
                      "/long/", 
                      "/сливак/",
                      "/слив/",
                      "/лонг/",
                      "/лонг-слив/",
                ],
            },
            {                
                name: "Belt",
                regexp: [
                      "/belt/", 
                      "/ремень/",
                      "/пояс/",
                ],
            },
            {                
                name: "Bag / Backpack", 
                regexp: [
                      "/bag/", 
                      "/backpack/",
                      "/портфель/",
                      "/сумка/",
                      "/сумочка/",
                      "/чемодан/",
                ],
            },
            {                
                name: "Portemonnaie", 
                regexp: [
                      "/bag/", 
                      "/portemonnaie/",
                      "/портмоне/",
                      "/портмане/",
                      "/партмоне/",
                      "/кошелек/",
                      "/кошелёк/",
                      "/кошель/",
                      "/кашель/",
                      "/бумажник/",
                      "/барсетка/",
                ],
            },
            {                
                name: "Jacket",
                regexp: [
                      "/jacket/",
                      "/куртка/",
                      "/плащ/",
                ],
            },
        ]
    },

    {
        id: "16",
        name: "Lacoste",
        brand: [
            "/lacoste/", 
            "/lacost/", 
            "/лакост/", 
        ],
        series: [
            {                
                name: "Hoodies",
                regexp: [
                      "/hoodie/", 
                      "/logo/", 
                      "/худи/", 
                      "/худак/",
                      "/толстовка/",
                      "/sleeve/", 
                      "/long/", 
                      "/сливак/",
                      "/слив/",
                      "/лонг/",
                      "/лонг-слив/",
                ],
            },
            {                
                name: "Sweatshirt",
                regexp: [
                      "/sweatshirt/",
                      "/свитшот/",
                      "/свитер/",
                      "/кофта/",
                      "/sleeve/", 
                      "/long/", 
                      "/сливак/",
                      "/слив/",
                      "/лонг/",
                      "/толстовка/",
                ],
            },
            {                
                name: "T-shirt / Polo",
                regexp: [
                      "/t-shirt/", 
                      "/tee/", 
                      "/shirt/", 
                      "/thirt/", 
                      "/polo/",
                      "/тишка/", 
                      "/футболка/",
                ],
            },
            {                
                name: "Belt",
                regexp: [
                      "/belt/", 
                      "/ремень/",
                      "/пояс/",
                ],
            },
        ]
    },
    {
        id: "17",
        name: "Moncler",
        brand: [
            "/moncler/", 
            "/monkler/", 
            "/монклер/", 
        ],
        series: [
            {                
                name: "Пуховик / Jacket",
                regexp: [
                      "/пуховик/", 
                      "/пухан/", 
                      "/пуловер/", 
                      "/jacket/",
                      "/куртка/",
                      "/плащ/",
                ],
            },
        ]
    },
    {
        id: "19",
        name: "New Balance",
        brand: [
            "/balance/", 
            "/нью/", 
            "/беленс/", 
        ],
    },
    {
        id: "20",
        name: "Napapijri",
        brand: [
            "/napapigri/", 
            "/napapijri/", 
            "/напапири/", 
        ],
    },
    {
        id: "21",
        name: "Off-White",
        brand: [
            "/off-white/", 
            "/off/", 
            "/офф/", 
            "/вайт/", 
        ],
        series: [
            {                
                name: "Hoodies",
                regexp: [
                      "/hoodie/", 
                      "/logo/", 
                      "/худи/", 
                      "/худак/",
                      "/толстовка/",
                      "/sleeve/", 
                      "/long/", 
                      "/сливак/",
                      "/слив/",
                      "/лонг/",
                      "/лонг-слив/",
                ],
            },
            {                
                name: "Sweatshirt",
                regexp: [
                      "/sweatshirt/",
                      "/свитшот/",
                      "/свитер/",
                      "/кофта/",
                      "/sleeve/", 
                      "/long/", 
                      "/сливак/",
                      "/слив/",
                      "/лонг/",
                      "/толстовка/",
                ],
            },
            {                
                name: "T-shirt / Polo",
                regexp: [
                      "/t-shirt/", 
                      "/tee/", 
                      "/shirt/", 
                      "/thirt/", 
                      "/polo/",
                      "/тишка/", 
                      "/футболка/",
                ],
            },
            {                
                name: "Belt",
                regexp: [
                      "/belt/", 
                      "/industrial/", 
                      "/индастриал/", 
                      "/ремень/",
                      "/пояс/",
                ],
            },
            {
                name: "Nike Air x Off-White",
                regexp: [
                    "/nike/",
                    "/найк/",
                    "/n*ke/",
                    "/air/",
                ],
            },
            {                
                name: "Bag / Backpack", 
                regexp: [
                      "/bag/", 
                      "/backpack/",
                      "/портфель/",
                      "/сумка/",
                      "/сумочка/",
                      "/чемодан/",
                ],
            },
        ]
    },
    {
        id: "22",
        name: "Polo Ralph Lauren",
        brand: [
            "/lauren/", 
            "/ralph/", 
            "/ральф/", 
        ],
        series: [
            {                
                name: "Hoodies",
                regexp: [
                      "/hoodie/", 
                      "/logo/", 
                      "/худи/", 
                      "/худак/",
                      "/толстовка/",
                ],
            },
            {                
                name: "Sweatshirt",
                regexp: [
                      "/sweatshirt/",
                      "/свитшот/",
                      "/свитер/",
                      "/кофта/",
                      "/sleeve/", 
                      "/long/", 
                      "/сливак/",
                      "/слив/",
                      "/лонг/",
                      "/толстовка/",
                ],
            },
            {                
                name: "T-shirt / Polo",
                regexp: [
                      "/t-shirt/", 
                      "/tee/", 
                      "/shirt/", 
                      "/thirt/", 
                      "/polo/",
                      "/тишка/", 
                      "/футболка/",
                      "/поло/",
                ],
            },
        ]
    },
    {
        id: "23",
        name: "Supreme",
        brand: [
            "/supreme/", 
            "/suprem/", 
            "/суприм/", 
        ],
        series: [
            {                
                name: "Box Logo",
                regexp: [
                      "/hoodie/", 
                      "/logo/", 
                      "/bogo/", 
                      "/box/", 
                      "/boxlogo/", 
                      "/box-logo/", 
                      "/худи/", 
                      "/бого/", 
                      "/бокс/", 
                      "/лого/", 
                      "/худак/",
                      "/толстовка/",
                ],
            },
            {                
                name: "Sweatshirt",
                regexp: [
                      "/sweatshirt/",
                      "/свитшот/",
                      "/свитер/",
                      "/кофта/",
                      "/sleeve/", 
                      "/long/", 
                      "/сливак/",
                      "/слив/",
                      "/лонг/",
                      "/толстовка/",
                ],
            },
            {                
                name: "T-shirt / Polo",
                regexp: [
                      "/t-shirt/", 
                      "/tee/", 
                      "/shirt/", 
                      "/thirt/", 
                      "/polo/",
                      "/тишка/", 
                      "/футболка/",
                      "/поло/",
                ],
            },
        ]
    },
    
      



    
        

    {
        id: 2,
        name: 'Gucci',
        regexp: /gucci|гучи|guci/gi,
        entries: [
            {
                id: 0,
                name: 'logo bag',
                regexp: /logo|bag/gi,
            },
        ],
        
    },
    {
        id: 3,
        name: 'Stone Island',
        regexp: /stone|island|стон|ston/gi,
        entries: [
            // {
            //     id: 0,
            //     name: 'logo bag',
            //     regexp: /logo|bag/gi,
            // },
        ],
        
    },
    {
        id: 4,
        name: 'Travis Scott',
        regexp: /Travis|Travis Scott/gi,
        entries: [
            // {
            //     id: 0,
            //     name: 'logo bag',
            //     regexp: /logo|bag/gi,
            // },
        ],
        
    },
    {
        id: 5,
        name: 'Off-White',
        regexp: /Off white|off-white/gi,
        entries: [
            {
                id: 0,
                name: 'belt',
                regexp: /belt|ремень|industrial/gi,
            },
        ],
        
    },
    {
        id: 6,
        name: 'The North Face',
        regexp: /thenorthface|tnf|thenorthface|тнф/gi,
        entries: [
            // {
            //     id: 0,
            //     name: 'belt',
            //     regexp: /belt|ремень|industrial/gi,
            // },
        ],
        
    },
    {
        id: 7,
        name: 'Rick Owens',
        regexp: /rickowens|rick owens/gi,
        entries: [
            {
                id: 0,
                name: 'Ramones',
                regexp: /ramones|рамоны/gi,
            },
        ],
    },
    {
        id: 8,
        name: 'Heron Preston',
        regexp: /heron preston|preston|херон престон/gi,
        entries: [
            // {
            //     id: 0,
            //     name: 'Ramones',
            //     regexp: /ramones|рамоны/gi,
            // },
        ],
    },
    {
        id: 9,
        name: 'Calvin Klein',
        regexp: /calvin klein|ck/gi,
        entries: [
            {
                id: 0,
                name: 'Logo',
                regexp: /logo|лого/gi,
            },
            {
                id: 1,
                name: 'Jeans',
                regexp: /jeans/gi,
            },
        ],
    },
    {
        id: 10,
        name: 'Supreme',
        regexp: /supreme|суприм|suprem/gi,
        entries: [
            {
                id: 0,
                name: 'Box-Logo',
                regexp: /logo|лого|box logo|box|bogo|бого|sweatshirt|hooded/gi,
            },
        ],
    },
    {
        id: 11,
        name: 'Burberry',
        regexp: /burberry/gi,
        entries: [
            // {
            //     id: 0,
            //     name: 'Box-Logo',
            //     regexp: /logo|лого|box logo|box|bogo|бого/gi,
            // },
        ],
    },
    {
        id: 12,
        name: 'Lacoste',
        regexp: /lacoste|лакост|lacost/gi,
        entries: [
            // {
            //     id: 0,
            //     name: 'Box-Logo',
            //     regexp: /logo|лого|box logo|box|bogo|бого/gi,
            // },
        ],
    },
    {
        id: 13,
        name: 'Balenciaga',
        regexp: /balenciaga|balensiaga/gi,
        entries: [
            {
                id: 0,
                name: 'tee',
                regexp: /tee|t shirt|t-shirt|тишка/gi,
            },
        ],
    },
    {
        id: 14,
        name: 'Kenzo',
        regexp: /kenzo|кензо/gi,
        entries: [
            {
                id: 0,
                name: 'tee',
                regexp: /tee|t shirt|t-shirt|тишка/gi,
            },
        ],
    },
    {
        id: 15,
        name: 'Dolce Gabbana',
        regexp: /Dolce Gabbana|Gabbana|Dolce|Dolce&Gabbana/gi,
        entries: [
            // {
            //     id: 0,
            //     name: 'tee',
            //     regexp: /tee|t shirt|t-shirt|тишка/gi,
            // },
        ],
    },
    {
        id: 16,
        name: 'Haliky',
        regexp: /Haliky|Dolce/gi,
        entries: [
            {
                id: 0,
                name: 'Logo',
                regexp: /logo|Hoodie|лого|худи/gi,
            },
        ],
    },
    {
        id: 17,
        name: 'Bape',
        regexp: /bape/gi,
        entries: [
            // {
            //     id: 0,
            //     name: 'tee',
            //     regexp: /tee|t shirt|t-shirt|тишка/gi,
            // },
        ],
    },
    {
        id: 18,
        name: 'stussy',
        regexp: /stussy/gi,
        entries: [
            // {
            //     id: 0,
            //     name: 'tee',
            //     regexp: /tee|t shirt|t-shirt|тишка/gi,
            // },
        ],
    },
    {
        id: 19,
        name: 'Champion',
        regexp: /champion|чемпион|ch*mpion/gi,
        entries: [
            // {
            //     id: 0,
            //     name: 'tee',
            //     regexp: /tee|t shirt|t-shirt|тишка/gi,
            // },
        ],
    },
    {
        id: 20,
        name: 'Tommy Hilfiger',
        regexp: /Tommy Hilfiger|Hilfiger/gi,
        entries: [
            // {
            //     id: 0,
            //     name: 'tee',
            //     regexp: /tee|t shirt|t-shirt|тишка/gi,
            // },
        ],
    },
    {
        id: 21,
        name: 'Fred Perry',
        regexp: /Fred Perry|Perry/gi,
        entries: [
            // {
            //     id: 0,
            //     name: 'tee',
            //     regexp: /tee|t shirt|t-shirt|тишка/gi,
            // },
        ],
    },
    {
        id: 22,
        name: 'Levis',
        regexp: /levis/gi,
        entries: [
            // {
            //     id: 0,
            //     name: 'tee',
            //     regexp: /tee|t shirt|t-shirt|тишка/gi,
            // },
        ],
    },
    {
        id: 23,
        name: 'Anti Social Social Club',
        regexp: /Anti Social Social Club|ASSC|Anti Sosial Sosial Club/gi,
        entries: [
            // {
            //     id: 0,
            //     name: 'tee',
            //     regexp: /tee|t shirt|t-shirt|тишка/gi,
            // },
        ],
    },
    
    
    

];