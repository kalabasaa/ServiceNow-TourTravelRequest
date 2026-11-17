import {
    BooleanColumn,
    ChoiceColumn,
    DateColumn,
    DecimalColumn,
    IntegerColumn,
    MultiLineTextColumn,
    StringColumn,
    Table,
} from '@servicenow/sdk/core'

export const x_1486033_tour_tra_travel_req = Table({
    name: 'x_1486033_tour_tra_travel_req',
    label: 'Travel Request',
    display: 'title',
    schema: {
        title: StringColumn({
            label: 'Title',
            mandatory: true,
        }),
        purpose: ChoiceColumn({
            label: 'Purpose',
            mandatory: true,
            choices: {
                tour_leg: { label: 'Tour Leg', sequence: 100 },
                festival: { label: 'Festival', sequence: 200 },
                promo_appearance: { label: 'Promo Appearance', sequence: 300 },
                recording_session: { label: 'Recording Session', sequence: 400 },
                other: { label: 'Other', sequence: 500 },
            },
        }),
        destination_city: StringColumn({
            label: 'Destination city',
        }),
        departure_date: DateColumn({
            label: 'Departure date',
            mandatory: true,
        }),
        return_date: DateColumn({
            label: 'Return date',
            mandatory: true,
        }),
        transportation: ChoiceColumn({
            label: 'Transportation',
            choices: {
                flight: { label: 'Flight', sequence: 100 },
                car_rental: { label: 'Car Rental', sequence: 200 },
                personal_vehicle: { label: 'Personal Vehicle', sequence: 300 },
            },
        }),
        flight_class: ChoiceColumn({
            label: 'Flight class',
            choices: {
                economy: { label: 'Economy', sequence: 100 },
                premium_economy: { label: 'Premium Economy', sequence: 200 },
                business: { label: 'Business', sequence: 300 },
            },
        }),
        rental_car_size: ChoiceColumn({
            label: 'Rental car size',
            choices: {
                compact: { label: 'Compact', sequence: 100 },
                mid_size: { label: 'Mid-size', sequence: 200 },
                full_size: { label: 'Full-size', sequence: 300 },
                suv: { label: 'SUV', sequence: 400 },
            },
        }),
        mileage_estimate: IntegerColumn({
            label: 'Mileage estimate',
        }),
        international_trip: BooleanColumn({
            label: 'International trip',
        }),
        passport_expiration_date: DateColumn({
            label: 'Passport expiration date',
        }),
        visa_required: BooleanColumn({
            label: 'Visa required',
        }),
        business_justification: MultiLineTextColumn({
            label: 'Business justification',
            mandatory: true,
            maxLength: 4000,
        }),
        estimated_total_cost: DecimalColumn({
            label: 'Estimated total cost',
            scale: 2,
        }),
    },
})
