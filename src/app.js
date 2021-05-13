var app = new Vue(
    {
        el: '#root',
        data: {

            menu_left_nav: [
                'Home',
                'pages',
                'menu',
            ],

            logo_nav: {
                logo: 'img/h5-logo-divided-header.png',
                alt: 'logo'
            },

            menu_right_nav: [
                'Event',
                'Blog',
                'Landing',
            ],


            //FOOTER
            crewFirst:
            "THE DON PEPPE CREW FIRST AND FOREMOST VALUES AN AUTHENTIC, WELL BAKED SLICE OF PIZZA.",
            
            addresses: [
                {
                    street: "1614 E.Bell Rd #104",
                    city: "Salerno, AZ 85022",
                    phone: "(602)867-1010"
                },
          
                {
                    street: "204 E. Piazzetta Tommaso",
                    city: "Rome, AZ 85022",
                    phone: "(358)867-1010"
                },
          
                {
                    street: "Vale Puglia 54",
                    city: "Torre Del Greco AZ 85022",
                    phone: "(359)867-1010"
                },
          
                {
                    street: "Corso Itali AA",
                    city: "Naples, AZ 85022",
                    phone: "(989)867-1010"
                }
            ]
        }
    }
);