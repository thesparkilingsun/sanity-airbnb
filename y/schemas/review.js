export default {
    name: 'review',
    type: 'object',
    title: 'Review',
    fields: [
        {
            name: 'reviewDescription',
            title: 'Review Description',
            type: 'string',
        },
        {
            name: 'traveller',
            title: 'Traveller',
            type: 'traveller',
        },
        {
            name: 'rating',
            title: 'Rating',
            type: 'string',
            options: {
                list: [
                    { title: '5 stars', value: '5Stars' },
                    { title: '4 stars', value: '4Stars' },
                    { title: '3 stars', value: '3Stars' },
                    { title: '2 stars', value: '2Stars' },
                    { title: '1 stars', value: '1Stars' },
                ],
                layout: 'radio',
            },
        },
    ],
};
