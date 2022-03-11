export default {
    name: 'bedTypes',
    title: 'Bed Types',
    type: 'object',
    fields: [
        {
            title: 'Beds',
            name: 'beds',
            type: 'string',
            options: {
                list: [
                    { value: 'singleBed', title: 'Single Bed' },
                    { value: 'doubleBed', title: 'Double Bed' },
                    { value: 'kingBed', title: 'King Bed' },
                ],
                layout: 'radio',
            },
        },
    ],
};
