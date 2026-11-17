import { ApplicationMenu, Record } from '@servicenow/sdk/core'

const tourTravelMenu = ApplicationMenu({
    $id: Now.ID['tour-travel-menu'],
    title: 'Tour Travel',
    active: true,
})

export const travelRequestsModule = Record({
    $id: Now.ID['travel-requests-module'],
    table: 'sys_app_module',
    data: {
        title: 'Travel Requests',
        application: tourTravelMenu,
        link_type: 'LIST',
        name: 'x_1486033_tour_tra_travel_req',
        active: true,
        order: 100,
    },
})
