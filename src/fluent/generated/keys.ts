import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '5651e2375b884e3aa7451872faa53858'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'ddfb3329216c4bac873908db3bbbc362'
                    }
                    'tour-travel-menu': {
                        table: 'sys_app_application'
                        id: '41c443d8e5bb449ea01fdd051a240b78'
                    }
                    'travel-requests-module': {
                        table: 'sys_app_module'
                        id: '9f95ff1b4696470e8e29707349451cdd'
                    }
                }
                composite: [
                    {
                        table: 'sys_db_object'
                        id: '0fefb8fc07da4e9ea91c5a316b5b85da'
                        key: {
                            name: 'x_1486033_tour_tra_travel_req'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1c4f233a2cba482880143450dbab0e3f'
                        key: {
                            name: 'x_1486033_tour_tra_travel_req'
                            element: 'rental_car_size'
                            value: 'full_size'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '23eda363a8b84b13963da1cc4f29a1ec'
                        key: {
                            name: 'x_1486033_tour_tra_travel_req'
                            element: 'estimated_total_cost'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '26bb14bb806342618c7342894e1f92bd'
                        key: {
                            name: 'x_1486033_tour_tra_travel_req'
                            element: 'mileage_estimate'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2d619851a1104b899090c8202250adb2'
                        key: {
                            name: 'x_1486033_tour_tra_travel_req'
                            element: 'transportation'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2e3cbd34034849309dcc3815fbb648b0'
                        key: {
                            name: 'x_1486033_tour_tra_travel_req'
                            element: 'title'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2e6746c05f0c454397cbbb540f116e66'
                        key: {
                            name: 'x_1486033_tour_tra_travel_req'
                            element: 'business_justification'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2f74d3dcf2a541b298f6e187f6f6de63'
                        key: {
                            name: 'x_1486033_tour_tra_travel_req'
                            element: 'title'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '358ff8905aa34c478918c5821c244025'
                        key: {
                            name: 'x_1486033_tour_tra_travel_req'
                            element: 'rental_car_size'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '47220dab19994aa692cd23f6d6ac48d5'
                        key: {
                            name: 'x_1486033_tour_tra_travel_req'
                            element: 'rental_car_size'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '479d627509a5492ea6a15d090c586547'
                        key: {
                            name: 'x_1486033_tour_tra_travel_req'
                            element: 'flight_class'
                            value: 'business'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '494144922d1448edbb6fcd3d2eab503b'
                        key: {
                            name: 'x_1486033_tour_tra_travel_req'
                            element: 'passport_expiration_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4944742dbea1453b8e6407b5f619039c'
                        key: {
                            name: 'x_1486033_tour_tra_travel_req'
                            element: 'departure_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4a444f037803463db4aca7468b17d595'
                        key: {
                            name: 'x_1486033_tour_tra_travel_req'
                            element: 'transportation'
                            value: 'flight'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5382a35049a94385afd2c18a5f418830'
                        key: {
                            name: 'x_1486033_tour_tra_travel_req'
                            element: 'purpose'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '545a5617d0ec4e9d92336ad13d0492d9'
                        key: {
                            name: 'x_1486033_tour_tra_travel_req'
                            element: 'international_trip'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '599aa471687f4caabcb7431ec2199ffa'
                        key: {
                            name: 'x_1486033_tour_tra_travel_req'
                            element: 'flight_class'
                            value: 'premium_economy'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5cd525069da340f7ab60802bfc5089ce'
                        key: {
                            name: 'x_1486033_tour_tra_travel_req'
                            element: 'international_trip'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '66e68d20f55d4673a0d39b1c756ad0fc'
                        key: {
                            name: 'x_1486033_tour_tra_travel_req'
                            element: 'purpose'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '696f59fb75fe4b76a33e42f0a51b1d6c'
                        key: {
                            name: 'x_1486033_tour_tra_travel_req'
                            element: 'transportation'
                            value: 'personal_vehicle'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6cde00b89d0d44dda51f988d7c417198'
                        key: {
                            name: 'x_1486033_tour_tra_travel_req'
                            element: 'destination_city'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '721dc7a8d6c940f99a8fab4737810eca'
                        key: {
                            name: 'x_1486033_tour_tra_travel_req'
                            element: 'rental_car_size'
                            value: 'suv'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7244948a207e4eb89b0b3f2e277d9fe0'
                        key: {
                            name: 'x_1486033_tour_tra_travel_req'
                            element: 'purpose'
                            value: 'recording_session'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '78cd8dc48861429b9663f3965bd52ce5'
                        key: {
                            name: 'x_1486033_tour_tra_travel_req'
                            element: 'departure_date'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7b8525bd36d34660b894a3ab39821aa2'
                        key: {
                            name: 'x_1486033_tour_tra_travel_req'
                            element: 'purpose'
                            value: 'promo_appearance'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7d1c121715884db097f53e59817d1702'
                        key: {
                            name: 'x_1486033_tour_tra_travel_req'
                            element: 'visa_required'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7e92a0b558e5405ab4a7286f690e78d5'
                        key: {
                            name: 'x_1486033_tour_tra_travel_req'
                            element: 'rental_car_size'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '85ea5ce889ff474a8e58b19b8af66670'
                        key: {
                            name: 'x_1486033_tour_tra_travel_req'
                            element: 'flight_class'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '86104b75108941ab891ab0e211fe287a'
                        key: {
                            name: 'x_1486033_tour_tra_travel_req'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8b0a88e9d56a4a1987907816284f0a44'
                        key: {
                            name: 'x_1486033_tour_tra_travel_req'
                            element: 'return_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '95d2a594fa3c4ea7bd7b53f7bda43f9b'
                        key: {
                            name: 'x_1486033_tour_tra_travel_req'
                            element: 'passport_expiration_date'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9b62a9baacf64225a61333ef00433485'
                        key: {
                            name: 'x_1486033_tour_tra_travel_req'
                            element: 'flight_class'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '9e6f7cb57d2c4d2aac7c75ee4e22b2d4'
                        key: {
                            name: 'x_1486033_tour_tra_travel_req'
                            element: 'flight_class'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a2d5ba0c5e9742e58f295271e4304064'
                        key: {
                            name: 'x_1486033_tour_tra_travel_req'
                            element: 'estimated_total_cost'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ae615c6af4b74f5393a6beac0a842a2e'
                        key: {
                            name: 'x_1486033_tour_tra_travel_req'
                            element: 'transportation'
                            value: 'car_rental'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'b6e3325ba3ab454784707bfb9aaa55e2'
                        key: {
                            name: 'x_1486033_tour_tra_travel_req'
                            element: 'purpose'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c074b4a1f797484e83a8aa11e19f31cc'
                        key: {
                            name: 'x_1486033_tour_tra_travel_req'
                            element: 'flight_class'
                            value: 'economy'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c3af5debb8db4a9db9a59a43571697e6'
                        key: {
                            name: 'x_1486033_tour_tra_travel_req'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c6563c490ab44d3a89b6667a9850f2ee'
                        key: {
                            name: 'x_1486033_tour_tra_travel_req'
                            element: 'rental_car_size'
                            value: 'mid_size'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c7eff9247ad147d3a161222d52e774aa'
                        key: {
                            name: 'x_1486033_tour_tra_travel_req'
                            element: 'business_justification'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c8b9d66d12ac4403aeca88276739cb4b'
                        key: {
                            name: 'x_1486033_tour_tra_travel_req'
                            element: 'destination_city'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cd350a49a7d14578bebdeeb6c30f0f39'
                        key: {
                            name: 'x_1486033_tour_tra_travel_req'
                            element: 'mileage_estimate'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cd401049a621454a90fa0389441db521'
                        key: {
                            name: 'x_1486033_tour_tra_travel_req'
                            element: 'transportation'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd3db81b0102d491da69028ce9cb0c865'
                        key: {
                            name: 'x_1486033_tour_tra_travel_req'
                            element: 'rental_car_size'
                            value: 'compact'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd7b0c30ddb4b41939d8a5ec64784be03'
                        key: {
                            name: 'x_1486033_tour_tra_travel_req'
                            element: 'purpose'
                            value: 'tour_leg'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'da854bb3a6c84ff2ba2dbb06e0fa8836'
                        key: {
                            name: 'x_1486033_tour_tra_travel_req'
                            element: 'purpose'
                            value: 'other'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e6d73a37c3fc44df8b1ca90c092bac7e'
                        key: {
                            name: 'x_1486033_tour_tra_travel_req'
                            element: 'return_date'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'eef9109b716e44b38874c636bc588ab6'
                        key: {
                            name: 'x_1486033_tour_tra_travel_req'
                            element: 'transportation'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'fa75c06aa1f94271a1914b76aae62abd'
                        key: {
                            name: 'x_1486033_tour_tra_travel_req'
                            element: 'purpose'
                            value: 'festival'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fb755250c82743e698c6b1a5debf52a9'
                        key: {
                            name: 'x_1486033_tour_tra_travel_req'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fc0be74d893d4ff39957d8c9ebb7fb71'
                        key: {
                            name: 'x_1486033_tour_tra_travel_req'
                            element: 'visa_required'
                            language: 'en'
                        }
                    },
                ]
            }
        }
    }
}
