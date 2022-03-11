import type {
    SanityReference,
    SanityKeyedReference,
    SanityAsset,
    SanityImage,
    SanityFile,
    SanityGeoPoint,
    SanityBlock,
    SanityDocument,
    SanityImageCrop,
    SanityImageHotspot,
    SanityKeyed,
    SanityImageAsset,
    SanityImageMetadata,
    SanityImageDimensions,
    SanityImagePalette,
    SanityImagePaletteSwatch,
} from 'sanity-codegen';

export type {
    SanityReference,
    SanityKeyedReference,
    SanityAsset,
    SanityImage,
    SanityFile,
    SanityGeoPoint,
    SanityBlock,
    SanityDocument,
    SanityImageCrop,
    SanityImageHotspot,
    SanityKeyed,
    SanityImageAsset,
    SanityImageMetadata,
    SanityImageDimensions,
    SanityImagePalette,
    SanityImagePaletteSwatch,
};

/**
 * Property
 *
 *
 */
export interface Property extends SanityDocument {
    _type: 'property';

    /**
     * Property Title — `string`
     *
     *
     */
    propertyTitle?: string;

    /**
     * Location — `geopoint`
     *
     *
     */
    location?: SanityGeoPoint;

    /**
     * Property Type — `string`
     *
     *
     */
    propertyType?: 'house' | 'dormitory' | 'bedroom';

    /**
     * Type of BedRoom — `bedTypes`
     *
     *
     */
    bedTypes?: BedTypes;

    /**
     * Main Image — `image`
     *
     *
     */
    mainImage?: {
        _type: 'image';
        asset: SanityReference<SanityImageAsset>;
        crop?: SanityImageCrop;
        hotspot?: SanityImageHotspot;
    };

    /**
     * Images — `array`
     *
     *
     */
    images?: Array<SanityKeyed<PropertyImage>>;

    /**
     * Price Per Night — `number`
     *
     *
     */
    pricePerNight?: number;

    /**
     * Beds — `number`
     *
     *
     */
    beds?: number;

    /**
     * Bedrooms — `number`
     *
     *
     */
    bedrooms?: number;

    /**
     * Slug — `slug`
     *
     *
     */
    slug?: { _type: 'slug'; current: string };

    /**
     * ID — `number`
     *
     *
     */
    id?: number;

    /**
     *  Description — `text`
     *
     *
     */
    description?: string;

    /**
     * Host — `array`
     *
     *
     */
    host?: Array<SanityKeyed<Host>>;

    /**
     * Review — `array`
     *
     *
     */
    review?: Array<SanityKeyed<Review>>;
}

/**
 * Person
 *
 *
 */
export interface Person extends SanityDocument {
    _type: 'person';

    /**
     * Name — `string`
     *
     * Please use first name and last name
     */
    name?: string;

    /**
     * Slug — `slug`
     *
     *
     */
    slug?: { _type: 'slug'; current: string };

    /**
     * ID — `number`
     *
     *
     */
    id?: number;

    /**
     * Image — `image`
     *
     *
     */
    image?: {
        _type: 'image';
        asset: SanityReference<SanityImageAsset>;
        crop?: SanityImageCrop;
        hotspot?: SanityImageHotspot;
    };
}

export type BedTypes = {
    _type: 'bedTypes';
    /**
     * Beds — `string`
     *
     *
     */
    beds?: 'singleBed' | 'doubleBed' | 'kingBed';
};

export type PropertyImage = {
    _type: 'propertyImage';
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;

    /**
     * Caption — `string`
     *
     *
     */
    caption?: string;
};

export type Review = {
    _type: 'review';
    /**
     * Review Description — `string`
     *
     *
     */
    reviewDescription?: string;

    /**
     * Traveller — `traveller`
     *
     *
     */
    traveller?: Traveller;

    /**
     * Rating — `string`
     *
     *
     */
    rating?: '5Stars' | '4Stars' | '3Stars' | '2Stars' | '1Stars';
};

export type Traveller = SanityReference<Person>;

export type Host = SanityReference<Person>;

export type Documents = Property | Person;
