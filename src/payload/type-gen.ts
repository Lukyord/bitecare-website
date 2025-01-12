/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  collections: {
    media: Media;
    users: User;
    'product-type': ProductType;
    product: Product;
    'product-tag': ProductTag;
    store: Store;
    'online-store': OnlineStore;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  collectionsJoins: {};
  collectionsSelect: {
    media: MediaSelect<false> | MediaSelect<true>;
    users: UsersSelect<false> | UsersSelect<true>;
    'product-type': ProductTypeSelect<false> | ProductTypeSelect<true>;
    product: ProductSelect<false> | ProductSelect<true>;
    'product-tag': ProductTagSelect<false> | ProductTagSelect<true>;
    store: StoreSelect<false> | StoreSelect<true>;
    'online-store': OnlineStoreSelect<false> | OnlineStoreSelect<true>;
    'payload-locked-documents': PayloadLockedDocumentsSelect<false> | PayloadLockedDocumentsSelect<true>;
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>;
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>;
  };
  db: {
    defaultIDType: string;
  };
  globals: {
    home: Home;
    common: Common;
    'about-us': AboutUs;
  };
  globalsSelect: {
    home: HomeSelect<false> | HomeSelect<true>;
    common: CommonSelect<false> | CommonSelect<true>;
    'about-us': AboutUsSelect<false> | AboutUsSelect<true>;
  };
  locale: 'en' | 'th';
  user: User & {
    collection: 'users';
  };
  jobs: {
    tasks: unknown;
    workflows: unknown;
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: string;
  alt: string;
  prefix?: string | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "product-type".
 */
export interface ProductType {
  id: string;
  /**
   * The name of the product type. Will be displayed on the website.
   */
  label: string;
  /**
   * Must be unique and can only contain lowercase letters, numbers, and hyphens.
   */
  product_type?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "product".
 */
export interface Product {
  id: string;
  product_type: string | ProductType;
  /**
   * The name of the product. Will be displayed on the website.
   */
  label: string;
  /**
   * Must be unique and can only contain lowercase letters, numbers, and hyphens.
   */
  slug: string;
  short_description: string;
  description: string;
  compare_description_main: string;
  compare_description_sub: string;
  primary_color: string;
  tags?: (string | ProductTag)[] | null;
  facts: {
    title: string;
    description: string;
    id?: string | null;
  }[];
  front_img: string | Media;
  back_img: string | Media;
  summary_img: string | Media;
  clinic_test_img: string | Media;
  palatability_test_img: string | Media;
  registration_number_img: string | Media;
  fact_sheet_img: string | Media;
  dog_image: string | Media;
  dog_image_cropped: string | Media;
  meta?: {
    title?: string | null;
    description?: string | null;
    /**
     * Maximum upload file size: 12MB. Recommended file size for images is <500KB.
     */
    image?: (string | null) | Media;
  };
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "product-tag".
 */
export interface ProductTag {
  id: string;
  label: string;
  description: string;
  icon_img: string | Media;
  color?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "store".
 */
export interface Store {
  id: string;
  /**
   * The name of the store. Will be displayed on the website.
   */
  name: string;
  /**
   * Customer name (Company name), will not be shown on the website but may required for legal purposes.
   */
  customer_name: string;
  address: string;
  province: string;
  district: string;
  subdistrict: string;
  /**
   * Phone number, can be left empty
   */
  phone?: string | null;
  /**
   * Postal code with the format of 12345
   */
  postal_code: string;
  link: string;
  /**
   * Store latitude will be used for Map API display
   */
  lat: string;
  /**
   * Store longitude will be used for Map API display
   */
  long: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "online-store".
 */
export interface OnlineStore {
  id: string;
  name: string;
  url: string;
  logo: string | Media;
  platform_color: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: string;
  document?:
    | ({
        relationTo: 'media';
        value: string | Media;
      } | null)
    | ({
        relationTo: 'users';
        value: string | User;
      } | null)
    | ({
        relationTo: 'product-type';
        value: string | ProductType;
      } | null)
    | ({
        relationTo: 'product';
        value: string | Product;
      } | null)
    | ({
        relationTo: 'product-tag';
        value: string | ProductTag;
      } | null)
    | ({
        relationTo: 'store';
        value: string | Store;
      } | null)
    | ({
        relationTo: 'online-store';
        value: string | OnlineStore;
      } | null);
  globalSlug?: string | null;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media_select".
 */
export interface MediaSelect<T extends boolean = true> {
  alt?: T;
  prefix?: T;
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users_select".
 */
export interface UsersSelect<T extends boolean = true> {
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "product-type_select".
 */
export interface ProductTypeSelect<T extends boolean = true> {
  label?: T;
  product_type?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "product_select".
 */
export interface ProductSelect<T extends boolean = true> {
  product_type?: T;
  label?: T;
  slug?: T;
  short_description?: T;
  description?: T;
  compare_description_main?: T;
  compare_description_sub?: T;
  primary_color?: T;
  tags?: T;
  facts?:
    | T
    | {
        title?: T;
        description?: T;
        id?: T;
      };
  front_img?: T;
  back_img?: T;
  summary_img?: T;
  clinic_test_img?: T;
  palatability_test_img?: T;
  registration_number_img?: T;
  fact_sheet_img?: T;
  dog_image?: T;
  dog_image_cropped?: T;
  meta?:
    | T
    | {
        title?: T;
        description?: T;
        image?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  _status?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "product-tag_select".
 */
export interface ProductTagSelect<T extends boolean = true> {
  label?: T;
  description?: T;
  icon_img?: T;
  color?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "store_select".
 */
export interface StoreSelect<T extends boolean = true> {
  name?: T;
  customer_name?: T;
  address?: T;
  province?: T;
  district?: T;
  subdistrict?: T;
  phone?: T;
  postal_code?: T;
  link?: T;
  lat?: T;
  long?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "online-store_select".
 */
export interface OnlineStoreSelect<T extends boolean = true> {
  name?: T;
  url?: T;
  logo?: T;
  platform_color?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents_select".
 */
export interface PayloadLockedDocumentsSelect<T extends boolean = true> {
  document?: T;
  globalSlug?: T;
  user?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences_select".
 */
export interface PayloadPreferencesSelect<T extends boolean = true> {
  user?: T;
  key?: T;
  value?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations_select".
 */
export interface PayloadMigrationsSelect<T extends boolean = true> {
  name?: T;
  batch?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "home".
 */
export interface Home {
  id: string;
  hero: {
    header_text: string;
    subheader_text: string;
    cta_text: string;
  };
  principle: {
    principle_header: string;
    principle_subheader: string;
    /**
     * Principles needs to be exactly 3
     */
    principles: {
      title: string;
      icon: string | Media;
      id?: string | null;
    }[];
  };
  slogan: {
    slogan_header: string;
    slogan_description: string;
  };
  product_comparison: {
    header: string;
  };
  faq: {
    faq_list?:
      | {
          question: string;
          answer: {
            root: {
              type: string;
              children: {
                type: string;
                version: number;
                [k: string]: unknown;
              }[];
              direction: ('ltr' | 'rtl') | null;
              format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
              indent: number;
              version: number;
            };
            [k: string]: unknown;
          };
          id?: string | null;
        }[]
      | null;
    ask_doctor: {
      ask_doctor_text: string;
      ask_doctor_link: string;
    };
  };
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "common".
 */
export interface Common {
  id: string;
  button: {
    meet_bite_care: string;
    tell_a_friend: string;
    see_our_products: string;
    view_more: string;
    faq: string;
    get_our_product: string;
    more_info: string;
    search: string;
    find_me: string;
    view_on_google_map: string;
    send_message: string;
    get_to_know_us: string;
    back_to_homepage: string;
    contact_us: string;
    retry: string;
  };
  footer: {
    tagline: {
      tagline_header: string;
      tagline_description: string;
    };
    legal: {
      copyright: string;
      privacy_policy: string;
      terms_and_conditions: string;
    };
  };
  error: {
    page_not_found: string;
    page_not_found_description: string;
    error: string;
    error_description: string;
  };
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "about-us".
 */
export interface AboutUs {
  id: string;
  landing: {
    welcome_to: string;
    landing_description: string;
    landing_quote: string;
  };
  bitecare_difference: {
    header: string;
    tailored_nutrition: string;
    tailored_nutrition_description: string;
    tailored_nutrition_quote?: string | null;
    premium_ingredients: string;
    premium_ingredients_description: string;
    premium_ingredients_quote?: string | null;
    rigorous_testing: string;
    rigorous_testing_description: string;
    rigorous_testing_quote?: string | null;
    bitecare_community_header: string;
    bitecare_community_description: string;
    bitecare_thanks: string;
  };
  contact_us: {
    header: string;
    email: string;
    send_us_a_message: string;
    phone_number: string;
    contact_hours: string;
    monday_sun: string;
    social: string;
    lets_collaborate: string;
    first_name: string;
    last_name: string;
    company_name: string;
    company_name_description: string;
    message: string;
    message_place_holder: string;
  };
  contact_us_toast: {
    something_went_wrong: string;
    success: string;
    message_sent: string;
  };
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "home_select".
 */
export interface HomeSelect<T extends boolean = true> {
  hero?:
    | T
    | {
        header_text?: T;
        subheader_text?: T;
        cta_text?: T;
      };
  principle?:
    | T
    | {
        principle_header?: T;
        principle_subheader?: T;
        principles?:
          | T
          | {
              title?: T;
              icon?: T;
              id?: T;
            };
      };
  slogan?:
    | T
    | {
        slogan_header?: T;
        slogan_description?: T;
      };
  product_comparison?:
    | T
    | {
        header?: T;
      };
  faq?:
    | T
    | {
        faq_list?:
          | T
          | {
              question?: T;
              answer?: T;
              id?: T;
            };
        ask_doctor?:
          | T
          | {
              ask_doctor_text?: T;
              ask_doctor_link?: T;
            };
      };
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "common_select".
 */
export interface CommonSelect<T extends boolean = true> {
  button?:
    | T
    | {
        meet_bite_care?: T;
        tell_a_friend?: T;
        see_our_products?: T;
        view_more?: T;
        faq?: T;
        get_our_product?: T;
        more_info?: T;
        search?: T;
        find_me?: T;
        view_on_google_map?: T;
        send_message?: T;
        get_to_know_us?: T;
        back_to_homepage?: T;
        contact_us?: T;
        retry?: T;
      };
  footer?:
    | T
    | {
        tagline?:
          | T
          | {
              tagline_header?: T;
              tagline_description?: T;
            };
        legal?:
          | T
          | {
              copyright?: T;
              privacy_policy?: T;
              terms_and_conditions?: T;
            };
      };
  error?:
    | T
    | {
        page_not_found?: T;
        page_not_found_description?: T;
        error?: T;
        error_description?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "about-us_select".
 */
export interface AboutUsSelect<T extends boolean = true> {
  landing?:
    | T
    | {
        welcome_to?: T;
        landing_description?: T;
        landing_quote?: T;
      };
  bitecare_difference?:
    | T
    | {
        header?: T;
        tailored_nutrition?: T;
        tailored_nutrition_description?: T;
        tailored_nutrition_quote?: T;
        premium_ingredients?: T;
        premium_ingredients_description?: T;
        premium_ingredients_quote?: T;
        rigorous_testing?: T;
        rigorous_testing_description?: T;
        rigorous_testing_quote?: T;
        bitecare_community_header?: T;
        bitecare_community_description?: T;
        bitecare_thanks?: T;
      };
  contact_us?:
    | T
    | {
        header?: T;
        email?: T;
        send_us_a_message?: T;
        phone_number?: T;
        contact_hours?: T;
        monday_sun?: T;
        social?: T;
        lets_collaborate?: T;
        first_name?: T;
        last_name?: T;
        company_name?: T;
        company_name_description?: T;
        message?: T;
        message_place_holder?: T;
      };
  contact_us_toast?:
    | T
    | {
        something_went_wrong?: T;
        success?: T;
        message_sent?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}