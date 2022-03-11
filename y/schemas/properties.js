export default {
    name: 'property',
    type: 'document',
    title: 'Property',
    fields: [
        {
            name: 'propertyTitle',
            title: 'Property Title',
            type: 'string',
        },
        {
            name: 'location',
            title: 'Location',
            type: 'geopoint',
        },
        {
            name: 'propertyType',
            title: 'Property Type',
            type: 'string',
            options: {
                list: [
                    { value: 'house', title: 'house' },
                    { value: 'dormitory', title: 'dorm' },
                    { value: 'bedroom', title: 'Bedroom', type: 'bedTypes' },
                ],
                layout: 'radio',
            },
        },
        {
            name: 'bedTypes',
            title: 'Type of BedRoom',
            type: 'bedTypes',
        },
        {
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            option: {
                hotspot: true,
            },
        },
        {
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [{ type: 'propertyImage' }],
        },
        {
            name: 'pricePerNight',
            title: 'Price Per Night',
            type: 'number',
        },
        {
            name: 'beds',
            title: 'Beds',
            type: 'number',
        },
        {
            name: 'bedrooms',
            title: 'Bedrooms',
            type: 'number',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'propertyTitle',
                maxLength: 100,
            },
        },
        {
            name: 'id',
            title: 'ID',
            type: 'number',
        },
        {
            name: 'description',
            title: ' Description',
            type: 'text',
        },
        {
            name: 'host',
            title: 'Host',
            type: 'array',
            of: [{ type: 'host' }],
        },
        {
            name: 'review',
            title: 'Review',
            type: 'array',
            of: [{ type: 'review' }],
        },
    ],
};
