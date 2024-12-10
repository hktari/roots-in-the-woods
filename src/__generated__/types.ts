export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  GatsbyImageData: { input: any; output: any; }
  JSON: { input: any; output: any; }
};

export type AvifOptions = {
  lossless?: InputMaybe<Scalars['Boolean']['input']>;
  quality?: InputMaybe<Scalars['Int']['input']>;
  speed?: InputMaybe<Scalars['Int']['input']>;
};

export type ArtistsJson = Node & {
  __typename?: 'ArtistsJson';
  children: Array<Node>;
  country?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  images?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  internal: Internal;
  links?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  order?: Maybe<Scalars['Int']['output']>;
  parent?: Maybe<Node>;
  stage?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  uid?: Maybe<Scalars['String']['output']>;
};

export type ArtistsJsonConnection = {
  __typename?: 'ArtistsJsonConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<ArtistsJsonEdge>;
  group: Array<ArtistsJsonGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<ArtistsJson>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type ArtistsJsonConnectionDistinctArgs = {
  field: ArtistsJsonFieldsEnum;
};


export type ArtistsJsonConnectionGroupArgs = {
  field: ArtistsJsonFieldsEnum;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ArtistsJsonConnectionMaxArgs = {
  field: ArtistsJsonFieldsEnum;
};


export type ArtistsJsonConnectionMinArgs = {
  field: ArtistsJsonFieldsEnum;
};


export type ArtistsJsonConnectionSumArgs = {
  field: ArtistsJsonFieldsEnum;
};

export type ArtistsJsonEdge = {
  __typename?: 'ArtistsJsonEdge';
  next?: Maybe<ArtistsJson>;
  node: ArtistsJson;
  previous?: Maybe<ArtistsJson>;
};

export enum ArtistsJsonFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalContentFilePath = 'children___children___internal___contentFilePath',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalContentFilePath = 'children___internal___contentFilePath',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalContentFilePath = 'children___parent___internal___contentFilePath',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Country = 'country',
  Id = 'id',
  Images = 'images',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalContentFilePath = 'internal___contentFilePath',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Links = 'links',
  Order = 'order',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalContentFilePath = 'parent___children___internal___contentFilePath',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalContentFilePath = 'parent___internal___contentFilePath',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalContentFilePath = 'parent___parent___internal___contentFilePath',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  Stage = 'stage',
  Title = 'title',
  Uid = 'uid'
}

export type ArtistsJsonFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  country?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  images?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  links?: InputMaybe<StringQueryOperatorInput>;
  order?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  stage?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<StringQueryOperatorInput>;
};

export type ArtistsJsonFilterListInput = {
  elemMatch?: InputMaybe<ArtistsJsonFilterInput>;
};

export type ArtistsJsonGroupConnection = {
  __typename?: 'ArtistsJsonGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<ArtistsJsonEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<ArtistsJsonGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<ArtistsJson>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type ArtistsJsonGroupConnectionDistinctArgs = {
  field: ArtistsJsonFieldsEnum;
};


export type ArtistsJsonGroupConnectionGroupArgs = {
  field: ArtistsJsonFieldsEnum;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ArtistsJsonGroupConnectionMaxArgs = {
  field: ArtistsJsonFieldsEnum;
};


export type ArtistsJsonGroupConnectionMinArgs = {
  field: ArtistsJsonFieldsEnum;
};


export type ArtistsJsonGroupConnectionSumArgs = {
  field: ArtistsJsonFieldsEnum;
};

export type ArtistsJsonSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ArtistsJsonFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type BlurredOptions = {
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: InputMaybe<ImageFormat>;
  /** Width of the generated low-res preview. Default is 20px */
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type BooleanQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
};

export type ContentfulActivity = ContentfulEntry & ContentfulReference & Node & {
  __typename?: 'ContentfulActivity';
  children: Array<Node>;
  contentful_id: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image?: Maybe<ContentfulAsset>;
  internal: Internal;
  node_locale: Scalars['String']['output'];
  parent?: Maybe<Node>;
  title: Scalars['String']['output'];
};

export type ContentfulActivityConnection = {
  __typename?: 'ContentfulActivityConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<ContentfulActivityEdge>;
  group: Array<ContentfulActivityGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<ContentfulActivity>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type ContentfulActivityConnectionDistinctArgs = {
  field: ContentfulActivityFieldsEnum;
};


export type ContentfulActivityConnectionGroupArgs = {
  field: ContentfulActivityFieldsEnum;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulActivityConnectionMaxArgs = {
  field: ContentfulActivityFieldsEnum;
};


export type ContentfulActivityConnectionMinArgs = {
  field: ContentfulActivityFieldsEnum;
};


export type ContentfulActivityConnectionSumArgs = {
  field: ContentfulActivityFieldsEnum;
};

export type ContentfulActivityEdge = {
  __typename?: 'ContentfulActivityEdge';
  next?: Maybe<ContentfulActivity>;
  node: ContentfulActivity;
  previous?: Maybe<ContentfulActivity>;
};

export enum ContentfulActivityFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalContentFilePath = 'children___children___internal___contentFilePath',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalContentFilePath = 'children___internal___contentFilePath',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalContentFilePath = 'children___parent___internal___contentFilePath',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  ContentfulId = 'contentful_id',
  Description = 'description',
  Id = 'id',
  ImageChildren = 'image___children',
  ImageChildrenChildren = 'image___children___children',
  ImageChildrenChildrenChildren = 'image___children___children___children',
  ImageChildrenChildrenId = 'image___children___children___id',
  ImageChildrenId = 'image___children___id',
  ImageChildrenInternalContent = 'image___children___internal___content',
  ImageChildrenInternalContentDigest = 'image___children___internal___contentDigest',
  ImageChildrenInternalContentFilePath = 'image___children___internal___contentFilePath',
  ImageChildrenInternalDescription = 'image___children___internal___description',
  ImageChildrenInternalFieldOwners = 'image___children___internal___fieldOwners',
  ImageChildrenInternalIgnoreType = 'image___children___internal___ignoreType',
  ImageChildrenInternalMediaType = 'image___children___internal___mediaType',
  ImageChildrenInternalOwner = 'image___children___internal___owner',
  ImageChildrenInternalType = 'image___children___internal___type',
  ImageChildrenParentChildren = 'image___children___parent___children',
  ImageChildrenParentId = 'image___children___parent___id',
  ImageContentfulId = 'image___contentful_id',
  ImageCreatedAt = 'image___createdAt',
  ImageDescription = 'image___description',
  ImageFileContentType = 'image___file___contentType',
  ImageFileDetailsSize = 'image___file___details___size',
  ImageFileFileName = 'image___file___fileName',
  ImageFileUrl = 'image___file___url',
  ImageFilename = 'image___filename',
  ImageFilesize = 'image___filesize',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ImageGatsbyImage = 'image___gatsbyImage',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ImageGatsbyImageData = 'image___gatsbyImageData',
  ImageHeight = 'image___height',
  ImageId = 'image___id',
  ImageInternalContent = 'image___internal___content',
  ImageInternalContentDigest = 'image___internal___contentDigest',
  ImageInternalContentFilePath = 'image___internal___contentFilePath',
  ImageInternalDescription = 'image___internal___description',
  ImageInternalFieldOwners = 'image___internal___fieldOwners',
  ImageInternalIgnoreType = 'image___internal___ignoreType',
  ImageInternalMediaType = 'image___internal___mediaType',
  ImageInternalOwner = 'image___internal___owner',
  ImageInternalType = 'image___internal___type',
  ImageMimeType = 'image___mimeType',
  ImageNodeLocale = 'image___node_locale',
  ImageParentChildren = 'image___parent___children',
  ImageParentChildrenChildren = 'image___parent___children___children',
  ImageParentChildrenId = 'image___parent___children___id',
  ImageParentId = 'image___parent___id',
  ImageParentInternalContent = 'image___parent___internal___content',
  ImageParentInternalContentDigest = 'image___parent___internal___contentDigest',
  ImageParentInternalContentFilePath = 'image___parent___internal___contentFilePath',
  ImageParentInternalDescription = 'image___parent___internal___description',
  ImageParentInternalFieldOwners = 'image___parent___internal___fieldOwners',
  ImageParentInternalIgnoreType = 'image___parent___internal___ignoreType',
  ImageParentInternalMediaType = 'image___parent___internal___mediaType',
  ImageParentInternalOwner = 'image___parent___internal___owner',
  ImageParentInternalType = 'image___parent___internal___type',
  ImageParentParentChildren = 'image___parent___parent___children',
  ImageParentParentId = 'image___parent___parent___id',
  ImagePlaceholderUrl = 'image___placeholderUrl',
  ImagePublicUrl = 'image___publicUrl',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ImageResizeHeight = 'image___resize___height',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ImageResizeSrc = 'image___resize___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ImageResizeWidth = 'image___resize___width',
  ImageSize = 'image___size',
  ImageSpaceId = 'image___spaceId',
  ImageSysRevision = 'image___sys___revision',
  ImageSysType = 'image___sys___type',
  ImageTitle = 'image___title',
  ImageUpdatedAt = 'image___updatedAt',
  ImageUrl = 'image___url',
  ImageWidth = 'image___width',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalContentFilePath = 'internal___contentFilePath',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  NodeLocale = 'node_locale',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalContentFilePath = 'parent___children___internal___contentFilePath',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalContentFilePath = 'parent___internal___contentFilePath',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalContentFilePath = 'parent___parent___internal___contentFilePath',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  Title = 'title'
}

export type ContentfulActivityFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  image?: InputMaybe<ContentfulAssetFilterInput>;
  internal?: InputMaybe<InternalFilterInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulActivityGroupConnection = {
  __typename?: 'ContentfulActivityGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<ContentfulActivityEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<ContentfulActivityGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<ContentfulActivity>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type ContentfulActivityGroupConnectionDistinctArgs = {
  field: ContentfulActivityFieldsEnum;
};


export type ContentfulActivityGroupConnectionGroupArgs = {
  field: ContentfulActivityFieldsEnum;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulActivityGroupConnectionMaxArgs = {
  field: ContentfulActivityFieldsEnum;
};


export type ContentfulActivityGroupConnectionMinArgs = {
  field: ContentfulActivityFieldsEnum;
};


export type ContentfulActivityGroupConnectionSumArgs = {
  field: ContentfulActivityFieldsEnum;
};

export type ContentfulActivitySortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulActivityFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulArtist = ContentfulEntry & ContentfulReference & Node & {
  __typename?: 'ContentfulArtist';
  children: Array<Node>;
  contentful_id: Scalars['String']['output'];
  countryOfOrigin?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  internal: Internal;
  lineup?: Maybe<Array<Maybe<ContentfulLineup>>>;
  name?: Maybe<Scalars['String']['output']>;
  node_locale: Scalars['String']['output'];
  parent?: Maybe<Node>;
  photo?: Maybe<ContentfulAsset>;
  socialMediaLink?: Maybe<Scalars['String']['output']>;
  spaceId?: Maybe<Scalars['String']['output']>;
  stage?: Maybe<ContentfulStage>;
  sys?: Maybe<ContentfulArtistSys>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};


export type ContentfulArtistCreatedAtArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type ContentfulArtistUpdatedAtArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ContentfulArtistConnection = {
  __typename?: 'ContentfulArtistConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<ContentfulArtistEdge>;
  group: Array<ContentfulArtistGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<ContentfulArtist>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type ContentfulArtistConnectionDistinctArgs = {
  field: ContentfulArtistFieldsEnum;
};


export type ContentfulArtistConnectionGroupArgs = {
  field: ContentfulArtistFieldsEnum;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulArtistConnectionMaxArgs = {
  field: ContentfulArtistFieldsEnum;
};


export type ContentfulArtistConnectionMinArgs = {
  field: ContentfulArtistFieldsEnum;
};


export type ContentfulArtistConnectionSumArgs = {
  field: ContentfulArtistFieldsEnum;
};

export type ContentfulArtistEdge = {
  __typename?: 'ContentfulArtistEdge';
  next?: Maybe<ContentfulArtist>;
  node: ContentfulArtist;
  previous?: Maybe<ContentfulArtist>;
};

export enum ContentfulArtistFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalContentFilePath = 'children___children___internal___contentFilePath',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalContentFilePath = 'children___internal___contentFilePath',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalContentFilePath = 'children___parent___internal___contentFilePath',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  ContentfulId = 'contentful_id',
  CountryOfOrigin = 'countryOfOrigin',
  CreatedAt = 'createdAt',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalContentFilePath = 'internal___contentFilePath',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Lineup = 'lineup',
  LineupArtists = 'lineup___artists',
  LineupArtistsChildren = 'lineup___artists___children',
  LineupArtistsChildrenChildren = 'lineup___artists___children___children',
  LineupArtistsChildrenId = 'lineup___artists___children___id',
  LineupArtistsContentfulId = 'lineup___artists___contentful_id',
  LineupArtistsCountryOfOrigin = 'lineup___artists___countryOfOrigin',
  LineupArtistsCreatedAt = 'lineup___artists___createdAt',
  LineupArtistsId = 'lineup___artists___id',
  LineupArtistsInternalContent = 'lineup___artists___internal___content',
  LineupArtistsInternalContentDigest = 'lineup___artists___internal___contentDigest',
  LineupArtistsInternalContentFilePath = 'lineup___artists___internal___contentFilePath',
  LineupArtistsInternalDescription = 'lineup___artists___internal___description',
  LineupArtistsInternalFieldOwners = 'lineup___artists___internal___fieldOwners',
  LineupArtistsInternalIgnoreType = 'lineup___artists___internal___ignoreType',
  LineupArtistsInternalMediaType = 'lineup___artists___internal___mediaType',
  LineupArtistsInternalOwner = 'lineup___artists___internal___owner',
  LineupArtistsInternalType = 'lineup___artists___internal___type',
  LineupArtistsLineup = 'lineup___artists___lineup',
  LineupArtistsLineupArtists = 'lineup___artists___lineup___artists',
  LineupArtistsLineupChildren = 'lineup___artists___lineup___children',
  LineupArtistsLineupContentfulId = 'lineup___artists___lineup___contentful_id',
  LineupArtistsLineupCreatedAt = 'lineup___artists___lineup___createdAt',
  LineupArtistsLineupId = 'lineup___artists___lineup___id',
  LineupArtistsLineupName = 'lineup___artists___lineup___name',
  LineupArtistsLineupNodeLocale = 'lineup___artists___lineup___node_locale',
  LineupArtistsLineupSpaceId = 'lineup___artists___lineup___spaceId',
  LineupArtistsLineupUpdatedAt = 'lineup___artists___lineup___updatedAt',
  LineupArtistsLineupUrl = 'lineup___artists___lineup___url',
  LineupArtistsName = 'lineup___artists___name',
  LineupArtistsNodeLocale = 'lineup___artists___node_locale',
  LineupArtistsParentChildren = 'lineup___artists___parent___children',
  LineupArtistsParentId = 'lineup___artists___parent___id',
  LineupArtistsPhotoChildren = 'lineup___artists___photo___children',
  LineupArtistsPhotoContentfulId = 'lineup___artists___photo___contentful_id',
  LineupArtistsPhotoCreatedAt = 'lineup___artists___photo___createdAt',
  LineupArtistsPhotoDescription = 'lineup___artists___photo___description',
  LineupArtistsPhotoFilename = 'lineup___artists___photo___filename',
  LineupArtistsPhotoFilesize = 'lineup___artists___photo___filesize',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LineupArtistsPhotoGatsbyImage = 'lineup___artists___photo___gatsbyImage',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LineupArtistsPhotoGatsbyImageData = 'lineup___artists___photo___gatsbyImageData',
  LineupArtistsPhotoHeight = 'lineup___artists___photo___height',
  LineupArtistsPhotoId = 'lineup___artists___photo___id',
  LineupArtistsPhotoMimeType = 'lineup___artists___photo___mimeType',
  LineupArtistsPhotoNodeLocale = 'lineup___artists___photo___node_locale',
  LineupArtistsPhotoPlaceholderUrl = 'lineup___artists___photo___placeholderUrl',
  LineupArtistsPhotoPublicUrl = 'lineup___artists___photo___publicUrl',
  LineupArtistsPhotoSize = 'lineup___artists___photo___size',
  LineupArtistsPhotoSpaceId = 'lineup___artists___photo___spaceId',
  LineupArtistsPhotoTitle = 'lineup___artists___photo___title',
  LineupArtistsPhotoUpdatedAt = 'lineup___artists___photo___updatedAt',
  LineupArtistsPhotoUrl = 'lineup___artists___photo___url',
  LineupArtistsPhotoWidth = 'lineup___artists___photo___width',
  LineupArtistsSocialMediaLink = 'lineup___artists___socialMediaLink',
  LineupArtistsSpaceId = 'lineup___artists___spaceId',
  LineupArtistsStageArtist = 'lineup___artists___stage___artist',
  LineupArtistsStageChildren = 'lineup___artists___stage___children',
  LineupArtistsStageContentfulId = 'lineup___artists___stage___contentful_id',
  LineupArtistsStageCreatedAt = 'lineup___artists___stage___createdAt',
  LineupArtistsStageId = 'lineup___artists___stage___id',
  LineupArtistsStageNodeLocale = 'lineup___artists___stage___node_locale',
  LineupArtistsStageOrder = 'lineup___artists___stage___order',
  LineupArtistsStageSpaceId = 'lineup___artists___stage___spaceId',
  LineupArtistsStageTitle = 'lineup___artists___stage___title',
  LineupArtistsStageUpdatedAt = 'lineup___artists___stage___updatedAt',
  LineupArtistsSysRevision = 'lineup___artists___sys___revision',
  LineupArtistsSysType = 'lineup___artists___sys___type',
  LineupArtistsUpdatedAt = 'lineup___artists___updatedAt',
  LineupChildren = 'lineup___children',
  LineupChildrenChildren = 'lineup___children___children',
  LineupChildrenChildrenChildren = 'lineup___children___children___children',
  LineupChildrenChildrenId = 'lineup___children___children___id',
  LineupChildrenId = 'lineup___children___id',
  LineupChildrenInternalContent = 'lineup___children___internal___content',
  LineupChildrenInternalContentDigest = 'lineup___children___internal___contentDigest',
  LineupChildrenInternalContentFilePath = 'lineup___children___internal___contentFilePath',
  LineupChildrenInternalDescription = 'lineup___children___internal___description',
  LineupChildrenInternalFieldOwners = 'lineup___children___internal___fieldOwners',
  LineupChildrenInternalIgnoreType = 'lineup___children___internal___ignoreType',
  LineupChildrenInternalMediaType = 'lineup___children___internal___mediaType',
  LineupChildrenInternalOwner = 'lineup___children___internal___owner',
  LineupChildrenInternalType = 'lineup___children___internal___type',
  LineupChildrenParentChildren = 'lineup___children___parent___children',
  LineupChildrenParentId = 'lineup___children___parent___id',
  LineupContentfulId = 'lineup___contentful_id',
  LineupCreatedAt = 'lineup___createdAt',
  LineupId = 'lineup___id',
  LineupInternalContent = 'lineup___internal___content',
  LineupInternalContentDigest = 'lineup___internal___contentDigest',
  LineupInternalContentFilePath = 'lineup___internal___contentFilePath',
  LineupInternalDescription = 'lineup___internal___description',
  LineupInternalFieldOwners = 'lineup___internal___fieldOwners',
  LineupInternalIgnoreType = 'lineup___internal___ignoreType',
  LineupInternalMediaType = 'lineup___internal___mediaType',
  LineupInternalOwner = 'lineup___internal___owner',
  LineupInternalType = 'lineup___internal___type',
  LineupName = 'lineup___name',
  LineupNodeLocale = 'lineup___node_locale',
  LineupParentChildren = 'lineup___parent___children',
  LineupParentChildrenChildren = 'lineup___parent___children___children',
  LineupParentChildrenId = 'lineup___parent___children___id',
  LineupParentId = 'lineup___parent___id',
  LineupParentInternalContent = 'lineup___parent___internal___content',
  LineupParentInternalContentDigest = 'lineup___parent___internal___contentDigest',
  LineupParentInternalContentFilePath = 'lineup___parent___internal___contentFilePath',
  LineupParentInternalDescription = 'lineup___parent___internal___description',
  LineupParentInternalFieldOwners = 'lineup___parent___internal___fieldOwners',
  LineupParentInternalIgnoreType = 'lineup___parent___internal___ignoreType',
  LineupParentInternalMediaType = 'lineup___parent___internal___mediaType',
  LineupParentInternalOwner = 'lineup___parent___internal___owner',
  LineupParentInternalType = 'lineup___parent___internal___type',
  LineupParentParentChildren = 'lineup___parent___parent___children',
  LineupParentParentId = 'lineup___parent___parent___id',
  LineupSpaceId = 'lineup___spaceId',
  LineupSysRevision = 'lineup___sys___revision',
  LineupSysType = 'lineup___sys___type',
  LineupUpdatedAt = 'lineup___updatedAt',
  LineupUrl = 'lineup___url',
  Name = 'name',
  NodeLocale = 'node_locale',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalContentFilePath = 'parent___children___internal___contentFilePath',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalContentFilePath = 'parent___internal___contentFilePath',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalContentFilePath = 'parent___parent___internal___contentFilePath',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PhotoChildren = 'photo___children',
  PhotoChildrenChildren = 'photo___children___children',
  PhotoChildrenChildrenChildren = 'photo___children___children___children',
  PhotoChildrenChildrenId = 'photo___children___children___id',
  PhotoChildrenId = 'photo___children___id',
  PhotoChildrenInternalContent = 'photo___children___internal___content',
  PhotoChildrenInternalContentDigest = 'photo___children___internal___contentDigest',
  PhotoChildrenInternalContentFilePath = 'photo___children___internal___contentFilePath',
  PhotoChildrenInternalDescription = 'photo___children___internal___description',
  PhotoChildrenInternalFieldOwners = 'photo___children___internal___fieldOwners',
  PhotoChildrenInternalIgnoreType = 'photo___children___internal___ignoreType',
  PhotoChildrenInternalMediaType = 'photo___children___internal___mediaType',
  PhotoChildrenInternalOwner = 'photo___children___internal___owner',
  PhotoChildrenInternalType = 'photo___children___internal___type',
  PhotoChildrenParentChildren = 'photo___children___parent___children',
  PhotoChildrenParentId = 'photo___children___parent___id',
  PhotoContentfulId = 'photo___contentful_id',
  PhotoCreatedAt = 'photo___createdAt',
  PhotoDescription = 'photo___description',
  PhotoFileContentType = 'photo___file___contentType',
  PhotoFileDetailsSize = 'photo___file___details___size',
  PhotoFileFileName = 'photo___file___fileName',
  PhotoFileUrl = 'photo___file___url',
  PhotoFilename = 'photo___filename',
  PhotoFilesize = 'photo___filesize',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  PhotoGatsbyImage = 'photo___gatsbyImage',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  PhotoGatsbyImageData = 'photo___gatsbyImageData',
  PhotoHeight = 'photo___height',
  PhotoId = 'photo___id',
  PhotoInternalContent = 'photo___internal___content',
  PhotoInternalContentDigest = 'photo___internal___contentDigest',
  PhotoInternalContentFilePath = 'photo___internal___contentFilePath',
  PhotoInternalDescription = 'photo___internal___description',
  PhotoInternalFieldOwners = 'photo___internal___fieldOwners',
  PhotoInternalIgnoreType = 'photo___internal___ignoreType',
  PhotoInternalMediaType = 'photo___internal___mediaType',
  PhotoInternalOwner = 'photo___internal___owner',
  PhotoInternalType = 'photo___internal___type',
  PhotoMimeType = 'photo___mimeType',
  PhotoNodeLocale = 'photo___node_locale',
  PhotoParentChildren = 'photo___parent___children',
  PhotoParentChildrenChildren = 'photo___parent___children___children',
  PhotoParentChildrenId = 'photo___parent___children___id',
  PhotoParentId = 'photo___parent___id',
  PhotoParentInternalContent = 'photo___parent___internal___content',
  PhotoParentInternalContentDigest = 'photo___parent___internal___contentDigest',
  PhotoParentInternalContentFilePath = 'photo___parent___internal___contentFilePath',
  PhotoParentInternalDescription = 'photo___parent___internal___description',
  PhotoParentInternalFieldOwners = 'photo___parent___internal___fieldOwners',
  PhotoParentInternalIgnoreType = 'photo___parent___internal___ignoreType',
  PhotoParentInternalMediaType = 'photo___parent___internal___mediaType',
  PhotoParentInternalOwner = 'photo___parent___internal___owner',
  PhotoParentInternalType = 'photo___parent___internal___type',
  PhotoParentParentChildren = 'photo___parent___parent___children',
  PhotoParentParentId = 'photo___parent___parent___id',
  PhotoPlaceholderUrl = 'photo___placeholderUrl',
  PhotoPublicUrl = 'photo___publicUrl',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  PhotoResizeHeight = 'photo___resize___height',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  PhotoResizeSrc = 'photo___resize___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  PhotoResizeWidth = 'photo___resize___width',
  PhotoSize = 'photo___size',
  PhotoSpaceId = 'photo___spaceId',
  PhotoSysRevision = 'photo___sys___revision',
  PhotoSysType = 'photo___sys___type',
  PhotoTitle = 'photo___title',
  PhotoUpdatedAt = 'photo___updatedAt',
  PhotoUrl = 'photo___url',
  PhotoWidth = 'photo___width',
  SocialMediaLink = 'socialMediaLink',
  SpaceId = 'spaceId',
  StageArtist = 'stage___artist',
  StageArtistChildren = 'stage___artist___children',
  StageArtistChildrenChildren = 'stage___artist___children___children',
  StageArtistChildrenId = 'stage___artist___children___id',
  StageArtistContentfulId = 'stage___artist___contentful_id',
  StageArtistCountryOfOrigin = 'stage___artist___countryOfOrigin',
  StageArtistCreatedAt = 'stage___artist___createdAt',
  StageArtistId = 'stage___artist___id',
  StageArtistInternalContent = 'stage___artist___internal___content',
  StageArtistInternalContentDigest = 'stage___artist___internal___contentDigest',
  StageArtistInternalContentFilePath = 'stage___artist___internal___contentFilePath',
  StageArtistInternalDescription = 'stage___artist___internal___description',
  StageArtistInternalFieldOwners = 'stage___artist___internal___fieldOwners',
  StageArtistInternalIgnoreType = 'stage___artist___internal___ignoreType',
  StageArtistInternalMediaType = 'stage___artist___internal___mediaType',
  StageArtistInternalOwner = 'stage___artist___internal___owner',
  StageArtistInternalType = 'stage___artist___internal___type',
  StageArtistLineup = 'stage___artist___lineup',
  StageArtistLineupArtists = 'stage___artist___lineup___artists',
  StageArtistLineupChildren = 'stage___artist___lineup___children',
  StageArtistLineupContentfulId = 'stage___artist___lineup___contentful_id',
  StageArtistLineupCreatedAt = 'stage___artist___lineup___createdAt',
  StageArtistLineupId = 'stage___artist___lineup___id',
  StageArtistLineupName = 'stage___artist___lineup___name',
  StageArtistLineupNodeLocale = 'stage___artist___lineup___node_locale',
  StageArtistLineupSpaceId = 'stage___artist___lineup___spaceId',
  StageArtistLineupUpdatedAt = 'stage___artist___lineup___updatedAt',
  StageArtistLineupUrl = 'stage___artist___lineup___url',
  StageArtistName = 'stage___artist___name',
  StageArtistNodeLocale = 'stage___artist___node_locale',
  StageArtistParentChildren = 'stage___artist___parent___children',
  StageArtistParentId = 'stage___artist___parent___id',
  StageArtistPhotoChildren = 'stage___artist___photo___children',
  StageArtistPhotoContentfulId = 'stage___artist___photo___contentful_id',
  StageArtistPhotoCreatedAt = 'stage___artist___photo___createdAt',
  StageArtistPhotoDescription = 'stage___artist___photo___description',
  StageArtistPhotoFilename = 'stage___artist___photo___filename',
  StageArtistPhotoFilesize = 'stage___artist___photo___filesize',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  StageArtistPhotoGatsbyImage = 'stage___artist___photo___gatsbyImage',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  StageArtistPhotoGatsbyImageData = 'stage___artist___photo___gatsbyImageData',
  StageArtistPhotoHeight = 'stage___artist___photo___height',
  StageArtistPhotoId = 'stage___artist___photo___id',
  StageArtistPhotoMimeType = 'stage___artist___photo___mimeType',
  StageArtistPhotoNodeLocale = 'stage___artist___photo___node_locale',
  StageArtistPhotoPlaceholderUrl = 'stage___artist___photo___placeholderUrl',
  StageArtistPhotoPublicUrl = 'stage___artist___photo___publicUrl',
  StageArtistPhotoSize = 'stage___artist___photo___size',
  StageArtistPhotoSpaceId = 'stage___artist___photo___spaceId',
  StageArtistPhotoTitle = 'stage___artist___photo___title',
  StageArtistPhotoUpdatedAt = 'stage___artist___photo___updatedAt',
  StageArtistPhotoUrl = 'stage___artist___photo___url',
  StageArtistPhotoWidth = 'stage___artist___photo___width',
  StageArtistSocialMediaLink = 'stage___artist___socialMediaLink',
  StageArtistSpaceId = 'stage___artist___spaceId',
  StageArtistStageArtist = 'stage___artist___stage___artist',
  StageArtistStageChildren = 'stage___artist___stage___children',
  StageArtistStageContentfulId = 'stage___artist___stage___contentful_id',
  StageArtistStageCreatedAt = 'stage___artist___stage___createdAt',
  StageArtistStageId = 'stage___artist___stage___id',
  StageArtistStageNodeLocale = 'stage___artist___stage___node_locale',
  StageArtistStageOrder = 'stage___artist___stage___order',
  StageArtistStageSpaceId = 'stage___artist___stage___spaceId',
  StageArtistStageTitle = 'stage___artist___stage___title',
  StageArtistStageUpdatedAt = 'stage___artist___stage___updatedAt',
  StageArtistSysRevision = 'stage___artist___sys___revision',
  StageArtistSysType = 'stage___artist___sys___type',
  StageArtistUpdatedAt = 'stage___artist___updatedAt',
  StageChildren = 'stage___children',
  StageChildrenChildren = 'stage___children___children',
  StageChildrenChildrenChildren = 'stage___children___children___children',
  StageChildrenChildrenId = 'stage___children___children___id',
  StageChildrenId = 'stage___children___id',
  StageChildrenInternalContent = 'stage___children___internal___content',
  StageChildrenInternalContentDigest = 'stage___children___internal___contentDigest',
  StageChildrenInternalContentFilePath = 'stage___children___internal___contentFilePath',
  StageChildrenInternalDescription = 'stage___children___internal___description',
  StageChildrenInternalFieldOwners = 'stage___children___internal___fieldOwners',
  StageChildrenInternalIgnoreType = 'stage___children___internal___ignoreType',
  StageChildrenInternalMediaType = 'stage___children___internal___mediaType',
  StageChildrenInternalOwner = 'stage___children___internal___owner',
  StageChildrenInternalType = 'stage___children___internal___type',
  StageChildrenParentChildren = 'stage___children___parent___children',
  StageChildrenParentId = 'stage___children___parent___id',
  StageContentfulId = 'stage___contentful_id',
  StageCreatedAt = 'stage___createdAt',
  StageId = 'stage___id',
  StageInternalContent = 'stage___internal___content',
  StageInternalContentDigest = 'stage___internal___contentDigest',
  StageInternalContentFilePath = 'stage___internal___contentFilePath',
  StageInternalDescription = 'stage___internal___description',
  StageInternalFieldOwners = 'stage___internal___fieldOwners',
  StageInternalIgnoreType = 'stage___internal___ignoreType',
  StageInternalMediaType = 'stage___internal___mediaType',
  StageInternalOwner = 'stage___internal___owner',
  StageInternalType = 'stage___internal___type',
  StageNodeLocale = 'stage___node_locale',
  StageOrder = 'stage___order',
  StageParentChildren = 'stage___parent___children',
  StageParentChildrenChildren = 'stage___parent___children___children',
  StageParentChildrenId = 'stage___parent___children___id',
  StageParentId = 'stage___parent___id',
  StageParentInternalContent = 'stage___parent___internal___content',
  StageParentInternalContentDigest = 'stage___parent___internal___contentDigest',
  StageParentInternalContentFilePath = 'stage___parent___internal___contentFilePath',
  StageParentInternalDescription = 'stage___parent___internal___description',
  StageParentInternalFieldOwners = 'stage___parent___internal___fieldOwners',
  StageParentInternalIgnoreType = 'stage___parent___internal___ignoreType',
  StageParentInternalMediaType = 'stage___parent___internal___mediaType',
  StageParentInternalOwner = 'stage___parent___internal___owner',
  StageParentInternalType = 'stage___parent___internal___type',
  StageParentParentChildren = 'stage___parent___parent___children',
  StageParentParentId = 'stage___parent___parent___id',
  StageSpaceId = 'stage___spaceId',
  StageSysRevision = 'stage___sys___revision',
  StageSysType = 'stage___sys___type',
  StageTitle = 'stage___title',
  StageUpdatedAt = 'stage___updatedAt',
  SysContentTypeSysId = 'sys___contentType___sys___id',
  SysContentTypeSysLinkType = 'sys___contentType___sys___linkType',
  SysContentTypeSysType = 'sys___contentType___sys___type',
  SysRevision = 'sys___revision',
  SysType = 'sys___type',
  UpdatedAt = 'updatedAt'
}

export type ContentfulArtistFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  countryOfOrigin?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  lineup?: InputMaybe<ContentfulLineupFilterListInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  photo?: InputMaybe<ContentfulAssetFilterInput>;
  socialMediaLink?: InputMaybe<StringQueryOperatorInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  stage?: InputMaybe<ContentfulStageFilterInput>;
  sys?: InputMaybe<ContentfulArtistSysFilterInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
};

export type ContentfulArtistFilterListInput = {
  elemMatch?: InputMaybe<ContentfulArtistFilterInput>;
};

export type ContentfulArtistGroupConnection = {
  __typename?: 'ContentfulArtistGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<ContentfulArtistEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<ContentfulArtistGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<ContentfulArtist>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type ContentfulArtistGroupConnectionDistinctArgs = {
  field: ContentfulArtistFieldsEnum;
};


export type ContentfulArtistGroupConnectionGroupArgs = {
  field: ContentfulArtistFieldsEnum;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulArtistGroupConnectionMaxArgs = {
  field: ContentfulArtistFieldsEnum;
};


export type ContentfulArtistGroupConnectionMinArgs = {
  field: ContentfulArtistFieldsEnum;
};


export type ContentfulArtistGroupConnectionSumArgs = {
  field: ContentfulArtistFieldsEnum;
};

export type ContentfulArtistSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulArtistFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulArtistSys = {
  __typename?: 'ContentfulArtistSys';
  contentType?: Maybe<ContentfulArtistSysContentType>;
  revision?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ContentfulArtistSysContentType = {
  __typename?: 'ContentfulArtistSysContentType';
  sys?: Maybe<ContentfulArtistSysContentTypeSys>;
};

export type ContentfulArtistSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulArtistSysContentTypeSysFilterInput>;
};

export type ContentfulArtistSysContentTypeSys = {
  __typename?: 'ContentfulArtistSysContentTypeSys';
  id?: Maybe<Scalars['String']['output']>;
  linkType?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ContentfulArtistSysContentTypeSysFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulArtistSysFilterInput = {
  contentType?: InputMaybe<ContentfulArtistSysContentTypeFilterInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulAsset = ContentfulReference & Node & RemoteFile & {
  __typename?: 'ContentfulAsset';
  children: Array<Node>;
  contentful_id: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['Date']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  file?: Maybe<ContentfulAssetFile>;
  filename: Scalars['String']['output'];
  filesize?: Maybe<Scalars['Int']['output']>;
  /** Data used in the <GatsbyImage /> component. See https://gatsby.dev/img for more info. */
  gatsbyImage?: Maybe<Scalars['GatsbyImageData']['output']>;
  gatsbyImageData?: Maybe<Scalars['GatsbyImageData']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  internal: Internal;
  mimeType: Scalars['String']['output'];
  node_locale?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Node>;
  placeholderUrl?: Maybe<Scalars['String']['output']>;
  publicUrl: Scalars['String']['output'];
  resize?: Maybe<RemoteFileResize>;
  size?: Maybe<Scalars['Int']['output']>;
  spaceId?: Maybe<Scalars['String']['output']>;
  sys?: Maybe<ContentfulAssetSys>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};


export type ContentfulAssetCreatedAtArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type ContentfulAssetGatsbyImageArgs = {
  aspectRatio?: InputMaybe<Scalars['Float']['input']>;
  backgroundColor?: InputMaybe<Scalars['String']['input']>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  cropFocus?: InputMaybe<Array<InputMaybe<RemoteFileCropFocus>>>;
  fit?: InputMaybe<RemoteFileFit>;
  formats?: InputMaybe<Array<RemoteFileFormat>>;
  height?: InputMaybe<Scalars['Int']['input']>;
  layout?: InputMaybe<RemoteFileLayout>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  placeholder?: InputMaybe<RemoteFilePlaceholder>;
  quality?: InputMaybe<Scalars['Int']['input']>;
  sizes?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulAssetGatsbyImageDataArgs = {
  aspectRatio?: InputMaybe<Scalars['Float']['input']>;
  backgroundColor?: InputMaybe<Scalars['String']['input']>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  cornerRadius?: InputMaybe<Scalars['Int']['input']>;
  cropFocus?: InputMaybe<ContentfulImageCropFocus>;
  formats?: InputMaybe<Array<InputMaybe<GatsbyImageFormat>>>;
  height?: InputMaybe<Scalars['Int']['input']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']['input']>;
  layout?: InputMaybe<GatsbyImageLayout>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  placeholder?: InputMaybe<GatsbyImagePlaceholder>;
  quality?: InputMaybe<Scalars['Int']['input']>;
  resizingBehavior?: InputMaybe<ImageResizingBehavior>;
  sizes?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulAssetResizeArgs = {
  aspectRatio?: InputMaybe<Scalars['Float']['input']>;
  cropFocus?: InputMaybe<Array<InputMaybe<RemoteFileCropFocus>>>;
  fit?: InputMaybe<RemoteFileFit>;
  format?: InputMaybe<RemoteFileFormat>;
  height?: InputMaybe<Scalars['Int']['input']>;
  quality?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulAssetUpdatedAtArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ContentfulAssetConnection = {
  __typename?: 'ContentfulAssetConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<ContentfulAssetEdge>;
  group: Array<ContentfulAssetGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type ContentfulAssetConnectionDistinctArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetConnectionGroupArgs = {
  field: ContentfulAssetFieldsEnum;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulAssetConnectionMaxArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetConnectionMinArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetConnectionSumArgs = {
  field: ContentfulAssetFieldsEnum;
};

export type ContentfulAssetEdge = {
  __typename?: 'ContentfulAssetEdge';
  next?: Maybe<ContentfulAsset>;
  node: ContentfulAsset;
  previous?: Maybe<ContentfulAsset>;
};

export enum ContentfulAssetFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalContentFilePath = 'children___children___internal___contentFilePath',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalContentFilePath = 'children___internal___contentFilePath',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalContentFilePath = 'children___parent___internal___contentFilePath',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  Description = 'description',
  FileContentType = 'file___contentType',
  FileDetailsImageHeight = 'file___details___image___height',
  FileDetailsImageWidth = 'file___details___image___width',
  FileDetailsSize = 'file___details___size',
  FileFileName = 'file___fileName',
  FileUrl = 'file___url',
  Filename = 'filename',
  Filesize = 'filesize',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  GatsbyImage = 'gatsbyImage',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  GatsbyImageData = 'gatsbyImageData',
  Height = 'height',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalContentFilePath = 'internal___contentFilePath',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  MimeType = 'mimeType',
  NodeLocale = 'node_locale',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalContentFilePath = 'parent___children___internal___contentFilePath',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalContentFilePath = 'parent___internal___contentFilePath',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalContentFilePath = 'parent___parent___internal___contentFilePath',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PlaceholderUrl = 'placeholderUrl',
  PublicUrl = 'publicUrl',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ResizeHeight = 'resize___height',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ResizeSrc = 'resize___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ResizeWidth = 'resize___width',
  Size = 'size',
  SpaceId = 'spaceId',
  SysRevision = 'sys___revision',
  SysType = 'sys___type',
  Title = 'title',
  UpdatedAt = 'updatedAt',
  Url = 'url',
  Width = 'width'
}

export type ContentfulAssetFile = {
  __typename?: 'ContentfulAssetFile';
  contentType?: Maybe<Scalars['String']['output']>;
  details?: Maybe<ContentfulAssetFileDetails>;
  fileName?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type ContentfulAssetFileDetails = {
  __typename?: 'ContentfulAssetFileDetails';
  image?: Maybe<ContentfulAssetFileDetailsImage>;
  size?: Maybe<Scalars['Int']['output']>;
};

export type ContentfulAssetFileDetailsFilterInput = {
  image?: InputMaybe<ContentfulAssetFileDetailsImageFilterInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
};

export type ContentfulAssetFileDetailsImage = {
  __typename?: 'ContentfulAssetFileDetailsImage';
  height?: Maybe<Scalars['Int']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

export type ContentfulAssetFileDetailsImageFilterInput = {
  height?: InputMaybe<IntQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
};

export type ContentfulAssetFileFilterInput = {
  contentType?: InputMaybe<StringQueryOperatorInput>;
  details?: InputMaybe<ContentfulAssetFileDetailsFilterInput>;
  fileName?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulAssetFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  file?: InputMaybe<ContentfulAssetFileFilterInput>;
  filename?: InputMaybe<StringQueryOperatorInput>;
  filesize?: InputMaybe<IntQueryOperatorInput>;
  gatsbyImage?: InputMaybe<GatsbyImageDataQueryOperatorInput>;
  gatsbyImageData?: InputMaybe<GatsbyImageDataQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mimeType?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  placeholderUrl?: InputMaybe<StringQueryOperatorInput>;
  publicUrl?: InputMaybe<StringQueryOperatorInput>;
  resize?: InputMaybe<RemoteFileResizeFilterInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulAssetSysFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
};

export type ContentfulAssetFilterListInput = {
  elemMatch?: InputMaybe<ContentfulAssetFilterInput>;
};

export type ContentfulAssetGroupConnection = {
  __typename?: 'ContentfulAssetGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<ContentfulAssetEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<ContentfulAssetGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type ContentfulAssetGroupConnectionDistinctArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetGroupConnectionGroupArgs = {
  field: ContentfulAssetFieldsEnum;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulAssetGroupConnectionMaxArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetGroupConnectionMinArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetGroupConnectionSumArgs = {
  field: ContentfulAssetFieldsEnum;
};

export type ContentfulAssetSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulAssetFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulAssetSys = {
  __typename?: 'ContentfulAssetSys';
  revision?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ContentfulAssetSysFilterInput = {
  revision?: InputMaybe<IntQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulBanner = ContentfulEntry & ContentfulReference & Node & {
  __typename?: 'ContentfulBanner';
  children: Array<Node>;
  contentful_id: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  imageDesktop?: Maybe<ContentfulAsset>;
  imageMobile?: Maybe<ContentfulAsset>;
  internal: Internal;
  node_locale: Scalars['String']['output'];
  parent?: Maybe<Node>;
  spaceId?: Maybe<Scalars['String']['output']>;
  sys?: Maybe<ContentfulBannerSys>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};


export type ContentfulBannerCreatedAtArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type ContentfulBannerUpdatedAtArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ContentfulBannerConnection = {
  __typename?: 'ContentfulBannerConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<ContentfulBannerEdge>;
  group: Array<ContentfulBannerGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<ContentfulBanner>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type ContentfulBannerConnectionDistinctArgs = {
  field: ContentfulBannerFieldsEnum;
};


export type ContentfulBannerConnectionGroupArgs = {
  field: ContentfulBannerFieldsEnum;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulBannerConnectionMaxArgs = {
  field: ContentfulBannerFieldsEnum;
};


export type ContentfulBannerConnectionMinArgs = {
  field: ContentfulBannerFieldsEnum;
};


export type ContentfulBannerConnectionSumArgs = {
  field: ContentfulBannerFieldsEnum;
};

export type ContentfulBannerEdge = {
  __typename?: 'ContentfulBannerEdge';
  next?: Maybe<ContentfulBanner>;
  node: ContentfulBanner;
  previous?: Maybe<ContentfulBanner>;
};

export enum ContentfulBannerFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalContentFilePath = 'children___children___internal___contentFilePath',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalContentFilePath = 'children___internal___contentFilePath',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalContentFilePath = 'children___parent___internal___contentFilePath',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  Id = 'id',
  ImageDesktopChildren = 'imageDesktop___children',
  ImageDesktopChildrenChildren = 'imageDesktop___children___children',
  ImageDesktopChildrenChildrenChildren = 'imageDesktop___children___children___children',
  ImageDesktopChildrenChildrenId = 'imageDesktop___children___children___id',
  ImageDesktopChildrenId = 'imageDesktop___children___id',
  ImageDesktopChildrenInternalContent = 'imageDesktop___children___internal___content',
  ImageDesktopChildrenInternalContentDigest = 'imageDesktop___children___internal___contentDigest',
  ImageDesktopChildrenInternalContentFilePath = 'imageDesktop___children___internal___contentFilePath',
  ImageDesktopChildrenInternalDescription = 'imageDesktop___children___internal___description',
  ImageDesktopChildrenInternalFieldOwners = 'imageDesktop___children___internal___fieldOwners',
  ImageDesktopChildrenInternalIgnoreType = 'imageDesktop___children___internal___ignoreType',
  ImageDesktopChildrenInternalMediaType = 'imageDesktop___children___internal___mediaType',
  ImageDesktopChildrenInternalOwner = 'imageDesktop___children___internal___owner',
  ImageDesktopChildrenInternalType = 'imageDesktop___children___internal___type',
  ImageDesktopChildrenParentChildren = 'imageDesktop___children___parent___children',
  ImageDesktopChildrenParentId = 'imageDesktop___children___parent___id',
  ImageDesktopContentfulId = 'imageDesktop___contentful_id',
  ImageDesktopCreatedAt = 'imageDesktop___createdAt',
  ImageDesktopDescription = 'imageDesktop___description',
  ImageDesktopFileContentType = 'imageDesktop___file___contentType',
  ImageDesktopFileDetailsSize = 'imageDesktop___file___details___size',
  ImageDesktopFileFileName = 'imageDesktop___file___fileName',
  ImageDesktopFileUrl = 'imageDesktop___file___url',
  ImageDesktopFilename = 'imageDesktop___filename',
  ImageDesktopFilesize = 'imageDesktop___filesize',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ImageDesktopGatsbyImage = 'imageDesktop___gatsbyImage',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ImageDesktopGatsbyImageData = 'imageDesktop___gatsbyImageData',
  ImageDesktopHeight = 'imageDesktop___height',
  ImageDesktopId = 'imageDesktop___id',
  ImageDesktopInternalContent = 'imageDesktop___internal___content',
  ImageDesktopInternalContentDigest = 'imageDesktop___internal___contentDigest',
  ImageDesktopInternalContentFilePath = 'imageDesktop___internal___contentFilePath',
  ImageDesktopInternalDescription = 'imageDesktop___internal___description',
  ImageDesktopInternalFieldOwners = 'imageDesktop___internal___fieldOwners',
  ImageDesktopInternalIgnoreType = 'imageDesktop___internal___ignoreType',
  ImageDesktopInternalMediaType = 'imageDesktop___internal___mediaType',
  ImageDesktopInternalOwner = 'imageDesktop___internal___owner',
  ImageDesktopInternalType = 'imageDesktop___internal___type',
  ImageDesktopMimeType = 'imageDesktop___mimeType',
  ImageDesktopNodeLocale = 'imageDesktop___node_locale',
  ImageDesktopParentChildren = 'imageDesktop___parent___children',
  ImageDesktopParentChildrenChildren = 'imageDesktop___parent___children___children',
  ImageDesktopParentChildrenId = 'imageDesktop___parent___children___id',
  ImageDesktopParentId = 'imageDesktop___parent___id',
  ImageDesktopParentInternalContent = 'imageDesktop___parent___internal___content',
  ImageDesktopParentInternalContentDigest = 'imageDesktop___parent___internal___contentDigest',
  ImageDesktopParentInternalContentFilePath = 'imageDesktop___parent___internal___contentFilePath',
  ImageDesktopParentInternalDescription = 'imageDesktop___parent___internal___description',
  ImageDesktopParentInternalFieldOwners = 'imageDesktop___parent___internal___fieldOwners',
  ImageDesktopParentInternalIgnoreType = 'imageDesktop___parent___internal___ignoreType',
  ImageDesktopParentInternalMediaType = 'imageDesktop___parent___internal___mediaType',
  ImageDesktopParentInternalOwner = 'imageDesktop___parent___internal___owner',
  ImageDesktopParentInternalType = 'imageDesktop___parent___internal___type',
  ImageDesktopParentParentChildren = 'imageDesktop___parent___parent___children',
  ImageDesktopParentParentId = 'imageDesktop___parent___parent___id',
  ImageDesktopPlaceholderUrl = 'imageDesktop___placeholderUrl',
  ImageDesktopPublicUrl = 'imageDesktop___publicUrl',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ImageDesktopResizeHeight = 'imageDesktop___resize___height',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ImageDesktopResizeSrc = 'imageDesktop___resize___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ImageDesktopResizeWidth = 'imageDesktop___resize___width',
  ImageDesktopSize = 'imageDesktop___size',
  ImageDesktopSpaceId = 'imageDesktop___spaceId',
  ImageDesktopSysRevision = 'imageDesktop___sys___revision',
  ImageDesktopSysType = 'imageDesktop___sys___type',
  ImageDesktopTitle = 'imageDesktop___title',
  ImageDesktopUpdatedAt = 'imageDesktop___updatedAt',
  ImageDesktopUrl = 'imageDesktop___url',
  ImageDesktopWidth = 'imageDesktop___width',
  ImageMobileChildren = 'imageMobile___children',
  ImageMobileChildrenChildren = 'imageMobile___children___children',
  ImageMobileChildrenChildrenChildren = 'imageMobile___children___children___children',
  ImageMobileChildrenChildrenId = 'imageMobile___children___children___id',
  ImageMobileChildrenId = 'imageMobile___children___id',
  ImageMobileChildrenInternalContent = 'imageMobile___children___internal___content',
  ImageMobileChildrenInternalContentDigest = 'imageMobile___children___internal___contentDigest',
  ImageMobileChildrenInternalContentFilePath = 'imageMobile___children___internal___contentFilePath',
  ImageMobileChildrenInternalDescription = 'imageMobile___children___internal___description',
  ImageMobileChildrenInternalFieldOwners = 'imageMobile___children___internal___fieldOwners',
  ImageMobileChildrenInternalIgnoreType = 'imageMobile___children___internal___ignoreType',
  ImageMobileChildrenInternalMediaType = 'imageMobile___children___internal___mediaType',
  ImageMobileChildrenInternalOwner = 'imageMobile___children___internal___owner',
  ImageMobileChildrenInternalType = 'imageMobile___children___internal___type',
  ImageMobileChildrenParentChildren = 'imageMobile___children___parent___children',
  ImageMobileChildrenParentId = 'imageMobile___children___parent___id',
  ImageMobileContentfulId = 'imageMobile___contentful_id',
  ImageMobileCreatedAt = 'imageMobile___createdAt',
  ImageMobileDescription = 'imageMobile___description',
  ImageMobileFileContentType = 'imageMobile___file___contentType',
  ImageMobileFileDetailsSize = 'imageMobile___file___details___size',
  ImageMobileFileFileName = 'imageMobile___file___fileName',
  ImageMobileFileUrl = 'imageMobile___file___url',
  ImageMobileFilename = 'imageMobile___filename',
  ImageMobileFilesize = 'imageMobile___filesize',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ImageMobileGatsbyImage = 'imageMobile___gatsbyImage',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ImageMobileGatsbyImageData = 'imageMobile___gatsbyImageData',
  ImageMobileHeight = 'imageMobile___height',
  ImageMobileId = 'imageMobile___id',
  ImageMobileInternalContent = 'imageMobile___internal___content',
  ImageMobileInternalContentDigest = 'imageMobile___internal___contentDigest',
  ImageMobileInternalContentFilePath = 'imageMobile___internal___contentFilePath',
  ImageMobileInternalDescription = 'imageMobile___internal___description',
  ImageMobileInternalFieldOwners = 'imageMobile___internal___fieldOwners',
  ImageMobileInternalIgnoreType = 'imageMobile___internal___ignoreType',
  ImageMobileInternalMediaType = 'imageMobile___internal___mediaType',
  ImageMobileInternalOwner = 'imageMobile___internal___owner',
  ImageMobileInternalType = 'imageMobile___internal___type',
  ImageMobileMimeType = 'imageMobile___mimeType',
  ImageMobileNodeLocale = 'imageMobile___node_locale',
  ImageMobileParentChildren = 'imageMobile___parent___children',
  ImageMobileParentChildrenChildren = 'imageMobile___parent___children___children',
  ImageMobileParentChildrenId = 'imageMobile___parent___children___id',
  ImageMobileParentId = 'imageMobile___parent___id',
  ImageMobileParentInternalContent = 'imageMobile___parent___internal___content',
  ImageMobileParentInternalContentDigest = 'imageMobile___parent___internal___contentDigest',
  ImageMobileParentInternalContentFilePath = 'imageMobile___parent___internal___contentFilePath',
  ImageMobileParentInternalDescription = 'imageMobile___parent___internal___description',
  ImageMobileParentInternalFieldOwners = 'imageMobile___parent___internal___fieldOwners',
  ImageMobileParentInternalIgnoreType = 'imageMobile___parent___internal___ignoreType',
  ImageMobileParentInternalMediaType = 'imageMobile___parent___internal___mediaType',
  ImageMobileParentInternalOwner = 'imageMobile___parent___internal___owner',
  ImageMobileParentInternalType = 'imageMobile___parent___internal___type',
  ImageMobileParentParentChildren = 'imageMobile___parent___parent___children',
  ImageMobileParentParentId = 'imageMobile___parent___parent___id',
  ImageMobilePlaceholderUrl = 'imageMobile___placeholderUrl',
  ImageMobilePublicUrl = 'imageMobile___publicUrl',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ImageMobileResizeHeight = 'imageMobile___resize___height',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ImageMobileResizeSrc = 'imageMobile___resize___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ImageMobileResizeWidth = 'imageMobile___resize___width',
  ImageMobileSize = 'imageMobile___size',
  ImageMobileSpaceId = 'imageMobile___spaceId',
  ImageMobileSysRevision = 'imageMobile___sys___revision',
  ImageMobileSysType = 'imageMobile___sys___type',
  ImageMobileTitle = 'imageMobile___title',
  ImageMobileUpdatedAt = 'imageMobile___updatedAt',
  ImageMobileUrl = 'imageMobile___url',
  ImageMobileWidth = 'imageMobile___width',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalContentFilePath = 'internal___contentFilePath',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  NodeLocale = 'node_locale',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalContentFilePath = 'parent___children___internal___contentFilePath',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalContentFilePath = 'parent___internal___contentFilePath',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalContentFilePath = 'parent___parent___internal___contentFilePath',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  SpaceId = 'spaceId',
  SysContentTypeSysId = 'sys___contentType___sys___id',
  SysContentTypeSysLinkType = 'sys___contentType___sys___linkType',
  SysContentTypeSysType = 'sys___contentType___sys___type',
  SysRevision = 'sys___revision',
  SysType = 'sys___type',
  Title = 'title',
  UpdatedAt = 'updatedAt'
}

export type ContentfulBannerFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  imageDesktop?: InputMaybe<ContentfulAssetFilterInput>;
  imageMobile?: InputMaybe<ContentfulAssetFilterInput>;
  internal?: InputMaybe<InternalFilterInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulBannerSysFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
};

export type ContentfulBannerGroupConnection = {
  __typename?: 'ContentfulBannerGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<ContentfulBannerEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<ContentfulBannerGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<ContentfulBanner>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type ContentfulBannerGroupConnectionDistinctArgs = {
  field: ContentfulBannerFieldsEnum;
};


export type ContentfulBannerGroupConnectionGroupArgs = {
  field: ContentfulBannerFieldsEnum;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulBannerGroupConnectionMaxArgs = {
  field: ContentfulBannerFieldsEnum;
};


export type ContentfulBannerGroupConnectionMinArgs = {
  field: ContentfulBannerFieldsEnum;
};


export type ContentfulBannerGroupConnectionSumArgs = {
  field: ContentfulBannerFieldsEnum;
};

export type ContentfulBannerSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulBannerFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulBannerSys = {
  __typename?: 'ContentfulBannerSys';
  contentType?: Maybe<ContentfulBannerSysContentType>;
  revision?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ContentfulBannerSysContentType = {
  __typename?: 'ContentfulBannerSysContentType';
  sys?: Maybe<ContentfulBannerSysContentTypeSys>;
};

export type ContentfulBannerSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulBannerSysContentTypeSysFilterInput>;
};

export type ContentfulBannerSysContentTypeSys = {
  __typename?: 'ContentfulBannerSysContentTypeSys';
  id?: Maybe<Scalars['String']['output']>;
  linkType?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ContentfulBannerSysContentTypeSysFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulBannerSysFilterInput = {
  contentType?: InputMaybe<ContentfulBannerSysContentTypeFilterInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulContentType = Node & {
  __typename?: 'ContentfulContentType';
  children: Array<Node>;
  description?: Maybe<Scalars['String']['output']>;
  displayField?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  internal: Internal;
  name?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Node>;
  sys?: Maybe<ContentfulContentTypeSys>;
};

export type ContentfulContentTypeConnection = {
  __typename?: 'ContentfulContentTypeConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<ContentfulContentTypeEdge>;
  group: Array<ContentfulContentTypeGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type ContentfulContentTypeConnectionDistinctArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeConnectionGroupArgs = {
  field: ContentfulContentTypeFieldsEnum;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulContentTypeConnectionMaxArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeConnectionMinArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeConnectionSumArgs = {
  field: ContentfulContentTypeFieldsEnum;
};

export type ContentfulContentTypeEdge = {
  __typename?: 'ContentfulContentTypeEdge';
  next?: Maybe<ContentfulContentType>;
  node: ContentfulContentType;
  previous?: Maybe<ContentfulContentType>;
};

export enum ContentfulContentTypeFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalContentFilePath = 'children___children___internal___contentFilePath',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalContentFilePath = 'children___internal___contentFilePath',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalContentFilePath = 'children___parent___internal___contentFilePath',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Description = 'description',
  DisplayField = 'displayField',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalContentFilePath = 'internal___contentFilePath',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Name = 'name',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalContentFilePath = 'parent___children___internal___contentFilePath',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalContentFilePath = 'parent___internal___contentFilePath',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalContentFilePath = 'parent___parent___internal___contentFilePath',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  SysType = 'sys___type'
}

export type ContentfulContentTypeFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  displayField?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  sys?: InputMaybe<ContentfulContentTypeSysFilterInput>;
};

export type ContentfulContentTypeGroupConnection = {
  __typename?: 'ContentfulContentTypeGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<ContentfulContentTypeEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<ContentfulContentTypeGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type ContentfulContentTypeGroupConnectionDistinctArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeGroupConnectionGroupArgs = {
  field: ContentfulContentTypeFieldsEnum;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulContentTypeGroupConnectionMaxArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeGroupConnectionMinArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeGroupConnectionSumArgs = {
  field: ContentfulContentTypeFieldsEnum;
};

export type ContentfulContentTypeSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulContentTypeFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulContentTypeSys = {
  __typename?: 'ContentfulContentTypeSys';
  type?: Maybe<Scalars['String']['output']>;
};

export type ContentfulContentTypeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulEntry = {
  children: Array<Node>;
  contentful_id: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  internal: Internal;
  node_locale: Scalars['String']['output'];
  parent?: Maybe<Node>;
};

export type ContentfulEntryConnection = {
  __typename?: 'ContentfulEntryConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<ContentfulEntryEdge>;
  group: Array<ContentfulEntryGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<ContentfulEntry>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type ContentfulEntryConnectionDistinctArgs = {
  field: ContentfulEntryFieldsEnum;
};


export type ContentfulEntryConnectionGroupArgs = {
  field: ContentfulEntryFieldsEnum;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulEntryConnectionMaxArgs = {
  field: ContentfulEntryFieldsEnum;
};


export type ContentfulEntryConnectionMinArgs = {
  field: ContentfulEntryFieldsEnum;
};


export type ContentfulEntryConnectionSumArgs = {
  field: ContentfulEntryFieldsEnum;
};

export type ContentfulEntryEdge = {
  __typename?: 'ContentfulEntryEdge';
  next?: Maybe<ContentfulEntry>;
  node: ContentfulEntry;
  previous?: Maybe<ContentfulEntry>;
};

export enum ContentfulEntryFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalContentFilePath = 'children___children___internal___contentFilePath',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalContentFilePath = 'children___internal___contentFilePath',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalContentFilePath = 'children___parent___internal___contentFilePath',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  ContentfulId = 'contentful_id',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalContentFilePath = 'internal___contentFilePath',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  NodeLocale = 'node_locale',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalContentFilePath = 'parent___children___internal___contentFilePath',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalContentFilePath = 'parent___internal___contentFilePath',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalContentFilePath = 'parent___parent___internal___contentFilePath',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id'
}

export type ContentfulEntryFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type ContentfulEntryGroupConnection = {
  __typename?: 'ContentfulEntryGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<ContentfulEntryEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<ContentfulEntryGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<ContentfulEntry>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type ContentfulEntryGroupConnectionDistinctArgs = {
  field: ContentfulEntryFieldsEnum;
};


export type ContentfulEntryGroupConnectionGroupArgs = {
  field: ContentfulEntryFieldsEnum;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulEntryGroupConnectionMaxArgs = {
  field: ContentfulEntryFieldsEnum;
};


export type ContentfulEntryGroupConnectionMinArgs = {
  field: ContentfulEntryFieldsEnum;
};


export type ContentfulEntryGroupConnectionSumArgs = {
  field: ContentfulEntryFieldsEnum;
};

export type ContentfulEntrySortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulEntryFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulFaq = ContentfulEntry & ContentfulReference & Node & {
  __typename?: 'ContentfulFaq';
  children: Array<Node>;
  contentful_id: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['Date']['output']>;
  faqText?: Maybe<ContentfulFaqFaqText>;
  id: Scalars['ID']['output'];
  internal: Internal;
  node_locale: Scalars['String']['output'];
  parent?: Maybe<Node>;
  spaceId?: Maybe<Scalars['String']['output']>;
  sys?: Maybe<ContentfulFaqSys>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};


export type ContentfulFaqCreatedAtArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type ContentfulFaqUpdatedAtArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ContentfulFaqConnection = {
  __typename?: 'ContentfulFaqConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<ContentfulFaqEdge>;
  group: Array<ContentfulFaqGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<ContentfulFaq>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type ContentfulFaqConnectionDistinctArgs = {
  field: ContentfulFaqFieldsEnum;
};


export type ContentfulFaqConnectionGroupArgs = {
  field: ContentfulFaqFieldsEnum;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulFaqConnectionMaxArgs = {
  field: ContentfulFaqFieldsEnum;
};


export type ContentfulFaqConnectionMinArgs = {
  field: ContentfulFaqFieldsEnum;
};


export type ContentfulFaqConnectionSumArgs = {
  field: ContentfulFaqFieldsEnum;
};

export type ContentfulFaqEdge = {
  __typename?: 'ContentfulFaqEdge';
  next?: Maybe<ContentfulFaq>;
  node: ContentfulFaq;
  previous?: Maybe<ContentfulFaq>;
};

export type ContentfulFaqFaqText = {
  __typename?: 'ContentfulFaqFaqText';
  raw?: Maybe<Scalars['String']['output']>;
};

export type ContentfulFaqFaqTextFilterInput = {
  raw?: InputMaybe<StringQueryOperatorInput>;
};

export enum ContentfulFaqFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalContentFilePath = 'children___children___internal___contentFilePath',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalContentFilePath = 'children___internal___contentFilePath',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalContentFilePath = 'children___parent___internal___contentFilePath',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  FaqTextRaw = 'faqText___raw',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalContentFilePath = 'internal___contentFilePath',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  NodeLocale = 'node_locale',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalContentFilePath = 'parent___children___internal___contentFilePath',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalContentFilePath = 'parent___internal___contentFilePath',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalContentFilePath = 'parent___parent___internal___contentFilePath',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  SpaceId = 'spaceId',
  SysContentTypeSysId = 'sys___contentType___sys___id',
  SysContentTypeSysLinkType = 'sys___contentType___sys___linkType',
  SysContentTypeSysType = 'sys___contentType___sys___type',
  SysRevision = 'sys___revision',
  SysType = 'sys___type',
  Title = 'title',
  UpdatedAt = 'updatedAt'
}

export type ContentfulFaqFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  faqText?: InputMaybe<ContentfulFaqFaqTextFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulFaqSysFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
};

export type ContentfulFaqGroupConnection = {
  __typename?: 'ContentfulFaqGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<ContentfulFaqEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<ContentfulFaqGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<ContentfulFaq>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type ContentfulFaqGroupConnectionDistinctArgs = {
  field: ContentfulFaqFieldsEnum;
};


export type ContentfulFaqGroupConnectionGroupArgs = {
  field: ContentfulFaqFieldsEnum;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulFaqGroupConnectionMaxArgs = {
  field: ContentfulFaqFieldsEnum;
};


export type ContentfulFaqGroupConnectionMinArgs = {
  field: ContentfulFaqFieldsEnum;
};


export type ContentfulFaqGroupConnectionSumArgs = {
  field: ContentfulFaqFieldsEnum;
};

export type ContentfulFaqSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulFaqFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulFaqSys = {
  __typename?: 'ContentfulFaqSys';
  contentType?: Maybe<ContentfulFaqSysContentType>;
  revision?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ContentfulFaqSysContentType = {
  __typename?: 'ContentfulFaqSysContentType';
  sys?: Maybe<ContentfulFaqSysContentTypeSys>;
};

export type ContentfulFaqSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulFaqSysContentTypeSysFilterInput>;
};

export type ContentfulFaqSysContentTypeSys = {
  __typename?: 'ContentfulFaqSysContentTypeSys';
  id?: Maybe<Scalars['String']['output']>;
  linkType?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ContentfulFaqSysContentTypeSysFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulFaqSysFilterInput = {
  contentType?: InputMaybe<ContentfulFaqSysContentTypeFilterInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulFrontPageIntroductionSection = ContentfulEntry & ContentfulReference & Node & {
  __typename?: 'ContentfulFrontPageIntroductionSection';
  children: Array<Node>;
  contentful_id: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  images?: Maybe<Array<Maybe<ContentfulAsset>>>;
  internal: Internal;
  node_locale: Scalars['String']['output'];
  parent?: Maybe<Node>;
  spaceId?: Maybe<Scalars['String']['output']>;
  sys?: Maybe<ContentfulFrontPageIntroductionSectionSys>;
  text?: Maybe<ContentfulFrontPageIntroductionSectionText>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};


export type ContentfulFrontPageIntroductionSectionCreatedAtArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type ContentfulFrontPageIntroductionSectionUpdatedAtArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ContentfulFrontPageIntroductionSectionConnection = {
  __typename?: 'ContentfulFrontPageIntroductionSectionConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<ContentfulFrontPageIntroductionSectionEdge>;
  group: Array<ContentfulFrontPageIntroductionSectionGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<ContentfulFrontPageIntroductionSection>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type ContentfulFrontPageIntroductionSectionConnectionDistinctArgs = {
  field: ContentfulFrontPageIntroductionSectionFieldsEnum;
};


export type ContentfulFrontPageIntroductionSectionConnectionGroupArgs = {
  field: ContentfulFrontPageIntroductionSectionFieldsEnum;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulFrontPageIntroductionSectionConnectionMaxArgs = {
  field: ContentfulFrontPageIntroductionSectionFieldsEnum;
};


export type ContentfulFrontPageIntroductionSectionConnectionMinArgs = {
  field: ContentfulFrontPageIntroductionSectionFieldsEnum;
};


export type ContentfulFrontPageIntroductionSectionConnectionSumArgs = {
  field: ContentfulFrontPageIntroductionSectionFieldsEnum;
};

export type ContentfulFrontPageIntroductionSectionEdge = {
  __typename?: 'ContentfulFrontPageIntroductionSectionEdge';
  next?: Maybe<ContentfulFrontPageIntroductionSection>;
  node: ContentfulFrontPageIntroductionSection;
  previous?: Maybe<ContentfulFrontPageIntroductionSection>;
};

export enum ContentfulFrontPageIntroductionSectionFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalContentFilePath = 'children___children___internal___contentFilePath',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalContentFilePath = 'children___internal___contentFilePath',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalContentFilePath = 'children___parent___internal___contentFilePath',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  Id = 'id',
  Images = 'images',
  ImagesChildren = 'images___children',
  ImagesChildrenChildren = 'images___children___children',
  ImagesChildrenChildrenChildren = 'images___children___children___children',
  ImagesChildrenChildrenId = 'images___children___children___id',
  ImagesChildrenId = 'images___children___id',
  ImagesChildrenInternalContent = 'images___children___internal___content',
  ImagesChildrenInternalContentDigest = 'images___children___internal___contentDigest',
  ImagesChildrenInternalContentFilePath = 'images___children___internal___contentFilePath',
  ImagesChildrenInternalDescription = 'images___children___internal___description',
  ImagesChildrenInternalFieldOwners = 'images___children___internal___fieldOwners',
  ImagesChildrenInternalIgnoreType = 'images___children___internal___ignoreType',
  ImagesChildrenInternalMediaType = 'images___children___internal___mediaType',
  ImagesChildrenInternalOwner = 'images___children___internal___owner',
  ImagesChildrenInternalType = 'images___children___internal___type',
  ImagesChildrenParentChildren = 'images___children___parent___children',
  ImagesChildrenParentId = 'images___children___parent___id',
  ImagesContentfulId = 'images___contentful_id',
  ImagesCreatedAt = 'images___createdAt',
  ImagesDescription = 'images___description',
  ImagesFileContentType = 'images___file___contentType',
  ImagesFileDetailsSize = 'images___file___details___size',
  ImagesFileFileName = 'images___file___fileName',
  ImagesFileUrl = 'images___file___url',
  ImagesFilename = 'images___filename',
  ImagesFilesize = 'images___filesize',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ImagesGatsbyImage = 'images___gatsbyImage',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ImagesGatsbyImageData = 'images___gatsbyImageData',
  ImagesHeight = 'images___height',
  ImagesId = 'images___id',
  ImagesInternalContent = 'images___internal___content',
  ImagesInternalContentDigest = 'images___internal___contentDigest',
  ImagesInternalContentFilePath = 'images___internal___contentFilePath',
  ImagesInternalDescription = 'images___internal___description',
  ImagesInternalFieldOwners = 'images___internal___fieldOwners',
  ImagesInternalIgnoreType = 'images___internal___ignoreType',
  ImagesInternalMediaType = 'images___internal___mediaType',
  ImagesInternalOwner = 'images___internal___owner',
  ImagesInternalType = 'images___internal___type',
  ImagesMimeType = 'images___mimeType',
  ImagesNodeLocale = 'images___node_locale',
  ImagesParentChildren = 'images___parent___children',
  ImagesParentChildrenChildren = 'images___parent___children___children',
  ImagesParentChildrenId = 'images___parent___children___id',
  ImagesParentId = 'images___parent___id',
  ImagesParentInternalContent = 'images___parent___internal___content',
  ImagesParentInternalContentDigest = 'images___parent___internal___contentDigest',
  ImagesParentInternalContentFilePath = 'images___parent___internal___contentFilePath',
  ImagesParentInternalDescription = 'images___parent___internal___description',
  ImagesParentInternalFieldOwners = 'images___parent___internal___fieldOwners',
  ImagesParentInternalIgnoreType = 'images___parent___internal___ignoreType',
  ImagesParentInternalMediaType = 'images___parent___internal___mediaType',
  ImagesParentInternalOwner = 'images___parent___internal___owner',
  ImagesParentInternalType = 'images___parent___internal___type',
  ImagesParentParentChildren = 'images___parent___parent___children',
  ImagesParentParentId = 'images___parent___parent___id',
  ImagesPlaceholderUrl = 'images___placeholderUrl',
  ImagesPublicUrl = 'images___publicUrl',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ImagesResizeHeight = 'images___resize___height',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ImagesResizeSrc = 'images___resize___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ImagesResizeWidth = 'images___resize___width',
  ImagesSize = 'images___size',
  ImagesSpaceId = 'images___spaceId',
  ImagesSysRevision = 'images___sys___revision',
  ImagesSysType = 'images___sys___type',
  ImagesTitle = 'images___title',
  ImagesUpdatedAt = 'images___updatedAt',
  ImagesUrl = 'images___url',
  ImagesWidth = 'images___width',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalContentFilePath = 'internal___contentFilePath',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  NodeLocale = 'node_locale',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalContentFilePath = 'parent___children___internal___contentFilePath',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalContentFilePath = 'parent___internal___contentFilePath',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalContentFilePath = 'parent___parent___internal___contentFilePath',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  SpaceId = 'spaceId',
  SysContentTypeSysId = 'sys___contentType___sys___id',
  SysContentTypeSysLinkType = 'sys___contentType___sys___linkType',
  SysContentTypeSysType = 'sys___contentType___sys___type',
  SysRevision = 'sys___revision',
  SysType = 'sys___type',
  TextRaw = 'text___raw',
  Title = 'title',
  UpdatedAt = 'updatedAt'
}

export type ContentfulFrontPageIntroductionSectionFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  images?: InputMaybe<ContentfulAssetFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulFrontPageIntroductionSectionSysFilterInput>;
  text?: InputMaybe<ContentfulFrontPageIntroductionSectionTextFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
};

export type ContentfulFrontPageIntroductionSectionGroupConnection = {
  __typename?: 'ContentfulFrontPageIntroductionSectionGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<ContentfulFrontPageIntroductionSectionEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<ContentfulFrontPageIntroductionSectionGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<ContentfulFrontPageIntroductionSection>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type ContentfulFrontPageIntroductionSectionGroupConnectionDistinctArgs = {
  field: ContentfulFrontPageIntroductionSectionFieldsEnum;
};


export type ContentfulFrontPageIntroductionSectionGroupConnectionGroupArgs = {
  field: ContentfulFrontPageIntroductionSectionFieldsEnum;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulFrontPageIntroductionSectionGroupConnectionMaxArgs = {
  field: ContentfulFrontPageIntroductionSectionFieldsEnum;
};


export type ContentfulFrontPageIntroductionSectionGroupConnectionMinArgs = {
  field: ContentfulFrontPageIntroductionSectionFieldsEnum;
};


export type ContentfulFrontPageIntroductionSectionGroupConnectionSumArgs = {
  field: ContentfulFrontPageIntroductionSectionFieldsEnum;
};

export type ContentfulFrontPageIntroductionSectionSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulFrontPageIntroductionSectionFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulFrontPageIntroductionSectionSys = {
  __typename?: 'ContentfulFrontPageIntroductionSectionSys';
  contentType?: Maybe<ContentfulFrontPageIntroductionSectionSysContentType>;
  revision?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ContentfulFrontPageIntroductionSectionSysContentType = {
  __typename?: 'ContentfulFrontPageIntroductionSectionSysContentType';
  sys?: Maybe<ContentfulFrontPageIntroductionSectionSysContentTypeSys>;
};

export type ContentfulFrontPageIntroductionSectionSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulFrontPageIntroductionSectionSysContentTypeSysFilterInput>;
};

export type ContentfulFrontPageIntroductionSectionSysContentTypeSys = {
  __typename?: 'ContentfulFrontPageIntroductionSectionSysContentTypeSys';
  id?: Maybe<Scalars['String']['output']>;
  linkType?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ContentfulFrontPageIntroductionSectionSysContentTypeSysFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulFrontPageIntroductionSectionSysFilterInput = {
  contentType?: InputMaybe<ContentfulFrontPageIntroductionSectionSysContentTypeFilterInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulFrontPageIntroductionSectionText = {
  __typename?: 'ContentfulFrontPageIntroductionSectionText';
  raw?: Maybe<Scalars['String']['output']>;
};

export type ContentfulFrontPageIntroductionSectionTextFilterInput = {
  raw?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulFrontPageSectionDate = ContentfulEntry & ContentfulReference & Node & {
  __typename?: 'ContentfulFrontPageSectionDate';
  backgroundImage?: Maybe<ContentfulAsset>;
  children: Array<Node>;
  contentful_id: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['Date']['output']>;
  endDate?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  internal: Internal;
  name?: Maybe<Scalars['String']['output']>;
  node_locale: Scalars['String']['output'];
  parent?: Maybe<Node>;
  spaceId?: Maybe<Scalars['String']['output']>;
  startDate?: Maybe<Scalars['Date']['output']>;
  sys?: Maybe<ContentfulFrontPageSectionDateSys>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};


export type ContentfulFrontPageSectionDateCreatedAtArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type ContentfulFrontPageSectionDateEndDateArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type ContentfulFrontPageSectionDateStartDateArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type ContentfulFrontPageSectionDateUpdatedAtArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ContentfulFrontPageSectionDateConnection = {
  __typename?: 'ContentfulFrontPageSectionDateConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<ContentfulFrontPageSectionDateEdge>;
  group: Array<ContentfulFrontPageSectionDateGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<ContentfulFrontPageSectionDate>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type ContentfulFrontPageSectionDateConnectionDistinctArgs = {
  field: ContentfulFrontPageSectionDateFieldsEnum;
};


export type ContentfulFrontPageSectionDateConnectionGroupArgs = {
  field: ContentfulFrontPageSectionDateFieldsEnum;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulFrontPageSectionDateConnectionMaxArgs = {
  field: ContentfulFrontPageSectionDateFieldsEnum;
};


export type ContentfulFrontPageSectionDateConnectionMinArgs = {
  field: ContentfulFrontPageSectionDateFieldsEnum;
};


export type ContentfulFrontPageSectionDateConnectionSumArgs = {
  field: ContentfulFrontPageSectionDateFieldsEnum;
};

export type ContentfulFrontPageSectionDateEdge = {
  __typename?: 'ContentfulFrontPageSectionDateEdge';
  next?: Maybe<ContentfulFrontPageSectionDate>;
  node: ContentfulFrontPageSectionDate;
  previous?: Maybe<ContentfulFrontPageSectionDate>;
};

export enum ContentfulFrontPageSectionDateFieldsEnum {
  BackgroundImageChildren = 'backgroundImage___children',
  BackgroundImageChildrenChildren = 'backgroundImage___children___children',
  BackgroundImageChildrenChildrenChildren = 'backgroundImage___children___children___children',
  BackgroundImageChildrenChildrenId = 'backgroundImage___children___children___id',
  BackgroundImageChildrenId = 'backgroundImage___children___id',
  BackgroundImageChildrenInternalContent = 'backgroundImage___children___internal___content',
  BackgroundImageChildrenInternalContentDigest = 'backgroundImage___children___internal___contentDigest',
  BackgroundImageChildrenInternalContentFilePath = 'backgroundImage___children___internal___contentFilePath',
  BackgroundImageChildrenInternalDescription = 'backgroundImage___children___internal___description',
  BackgroundImageChildrenInternalFieldOwners = 'backgroundImage___children___internal___fieldOwners',
  BackgroundImageChildrenInternalIgnoreType = 'backgroundImage___children___internal___ignoreType',
  BackgroundImageChildrenInternalMediaType = 'backgroundImage___children___internal___mediaType',
  BackgroundImageChildrenInternalOwner = 'backgroundImage___children___internal___owner',
  BackgroundImageChildrenInternalType = 'backgroundImage___children___internal___type',
  BackgroundImageChildrenParentChildren = 'backgroundImage___children___parent___children',
  BackgroundImageChildrenParentId = 'backgroundImage___children___parent___id',
  BackgroundImageContentfulId = 'backgroundImage___contentful_id',
  BackgroundImageCreatedAt = 'backgroundImage___createdAt',
  BackgroundImageDescription = 'backgroundImage___description',
  BackgroundImageFileContentType = 'backgroundImage___file___contentType',
  BackgroundImageFileDetailsSize = 'backgroundImage___file___details___size',
  BackgroundImageFileFileName = 'backgroundImage___file___fileName',
  BackgroundImageFileUrl = 'backgroundImage___file___url',
  BackgroundImageFilename = 'backgroundImage___filename',
  BackgroundImageFilesize = 'backgroundImage___filesize',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BackgroundImageGatsbyImage = 'backgroundImage___gatsbyImage',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BackgroundImageGatsbyImageData = 'backgroundImage___gatsbyImageData',
  BackgroundImageHeight = 'backgroundImage___height',
  BackgroundImageId = 'backgroundImage___id',
  BackgroundImageInternalContent = 'backgroundImage___internal___content',
  BackgroundImageInternalContentDigest = 'backgroundImage___internal___contentDigest',
  BackgroundImageInternalContentFilePath = 'backgroundImage___internal___contentFilePath',
  BackgroundImageInternalDescription = 'backgroundImage___internal___description',
  BackgroundImageInternalFieldOwners = 'backgroundImage___internal___fieldOwners',
  BackgroundImageInternalIgnoreType = 'backgroundImage___internal___ignoreType',
  BackgroundImageInternalMediaType = 'backgroundImage___internal___mediaType',
  BackgroundImageInternalOwner = 'backgroundImage___internal___owner',
  BackgroundImageInternalType = 'backgroundImage___internal___type',
  BackgroundImageMimeType = 'backgroundImage___mimeType',
  BackgroundImageNodeLocale = 'backgroundImage___node_locale',
  BackgroundImageParentChildren = 'backgroundImage___parent___children',
  BackgroundImageParentChildrenChildren = 'backgroundImage___parent___children___children',
  BackgroundImageParentChildrenId = 'backgroundImage___parent___children___id',
  BackgroundImageParentId = 'backgroundImage___parent___id',
  BackgroundImageParentInternalContent = 'backgroundImage___parent___internal___content',
  BackgroundImageParentInternalContentDigest = 'backgroundImage___parent___internal___contentDigest',
  BackgroundImageParentInternalContentFilePath = 'backgroundImage___parent___internal___contentFilePath',
  BackgroundImageParentInternalDescription = 'backgroundImage___parent___internal___description',
  BackgroundImageParentInternalFieldOwners = 'backgroundImage___parent___internal___fieldOwners',
  BackgroundImageParentInternalIgnoreType = 'backgroundImage___parent___internal___ignoreType',
  BackgroundImageParentInternalMediaType = 'backgroundImage___parent___internal___mediaType',
  BackgroundImageParentInternalOwner = 'backgroundImage___parent___internal___owner',
  BackgroundImageParentInternalType = 'backgroundImage___parent___internal___type',
  BackgroundImageParentParentChildren = 'backgroundImage___parent___parent___children',
  BackgroundImageParentParentId = 'backgroundImage___parent___parent___id',
  BackgroundImagePlaceholderUrl = 'backgroundImage___placeholderUrl',
  BackgroundImagePublicUrl = 'backgroundImage___publicUrl',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BackgroundImageResizeHeight = 'backgroundImage___resize___height',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BackgroundImageResizeSrc = 'backgroundImage___resize___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BackgroundImageResizeWidth = 'backgroundImage___resize___width',
  BackgroundImageSize = 'backgroundImage___size',
  BackgroundImageSpaceId = 'backgroundImage___spaceId',
  BackgroundImageSysRevision = 'backgroundImage___sys___revision',
  BackgroundImageSysType = 'backgroundImage___sys___type',
  BackgroundImageTitle = 'backgroundImage___title',
  BackgroundImageUpdatedAt = 'backgroundImage___updatedAt',
  BackgroundImageUrl = 'backgroundImage___url',
  BackgroundImageWidth = 'backgroundImage___width',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalContentFilePath = 'children___children___internal___contentFilePath',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalContentFilePath = 'children___internal___contentFilePath',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalContentFilePath = 'children___parent___internal___contentFilePath',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  EndDate = 'endDate',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalContentFilePath = 'internal___contentFilePath',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Name = 'name',
  NodeLocale = 'node_locale',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalContentFilePath = 'parent___children___internal___contentFilePath',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalContentFilePath = 'parent___internal___contentFilePath',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalContentFilePath = 'parent___parent___internal___contentFilePath',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  SpaceId = 'spaceId',
  StartDate = 'startDate',
  SysContentTypeSysId = 'sys___contentType___sys___id',
  SysContentTypeSysLinkType = 'sys___contentType___sys___linkType',
  SysContentTypeSysType = 'sys___contentType___sys___type',
  SysRevision = 'sys___revision',
  SysType = 'sys___type',
  UpdatedAt = 'updatedAt'
}

export type ContentfulFrontPageSectionDateFilterInput = {
  backgroundImage?: InputMaybe<ContentfulAssetFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  endDate?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  startDate?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulFrontPageSectionDateSysFilterInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
};

export type ContentfulFrontPageSectionDateGroupConnection = {
  __typename?: 'ContentfulFrontPageSectionDateGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<ContentfulFrontPageSectionDateEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<ContentfulFrontPageSectionDateGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<ContentfulFrontPageSectionDate>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type ContentfulFrontPageSectionDateGroupConnectionDistinctArgs = {
  field: ContentfulFrontPageSectionDateFieldsEnum;
};


export type ContentfulFrontPageSectionDateGroupConnectionGroupArgs = {
  field: ContentfulFrontPageSectionDateFieldsEnum;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulFrontPageSectionDateGroupConnectionMaxArgs = {
  field: ContentfulFrontPageSectionDateFieldsEnum;
};


export type ContentfulFrontPageSectionDateGroupConnectionMinArgs = {
  field: ContentfulFrontPageSectionDateFieldsEnum;
};


export type ContentfulFrontPageSectionDateGroupConnectionSumArgs = {
  field: ContentfulFrontPageSectionDateFieldsEnum;
};

export type ContentfulFrontPageSectionDateSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulFrontPageSectionDateFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulFrontPageSectionDateSys = {
  __typename?: 'ContentfulFrontPageSectionDateSys';
  contentType?: Maybe<ContentfulFrontPageSectionDateSysContentType>;
  revision?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ContentfulFrontPageSectionDateSysContentType = {
  __typename?: 'ContentfulFrontPageSectionDateSysContentType';
  sys?: Maybe<ContentfulFrontPageSectionDateSysContentTypeSys>;
};

export type ContentfulFrontPageSectionDateSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulFrontPageSectionDateSysContentTypeSysFilterInput>;
};

export type ContentfulFrontPageSectionDateSysContentTypeSys = {
  __typename?: 'ContentfulFrontPageSectionDateSysContentTypeSys';
  id?: Maybe<Scalars['String']['output']>;
  linkType?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ContentfulFrontPageSectionDateSysContentTypeSysFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulFrontPageSectionDateSysFilterInput = {
  contentType?: InputMaybe<ContentfulFrontPageSectionDateSysContentTypeFilterInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulGallery = ContentfulEntry & ContentfulReference & Node & {
  __typename?: 'ContentfulGallery';
  banner?: Maybe<ContentfulAsset>;
  bannerMobile?: Maybe<ContentfulAsset>;
  children: Array<Node>;
  contentful_id: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['Date']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  eventDate?: Maybe<Scalars['Date']['output']>;
  eventDateEnd?: Maybe<Scalars['Date']['output']>;
  facebookAlbumId?: Maybe<Scalars['String']['output']>;
  gatsbyPath?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  internal: Internal;
  lineup?: Maybe<ContentfulLineup>;
  node_locale: Scalars['String']['output'];
  parent?: Maybe<Node>;
  spaceId?: Maybe<Scalars['String']['output']>;
  sys?: Maybe<ContentfulGallerySys>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};


export type ContentfulGalleryCreatedAtArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type ContentfulGalleryEventDateArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type ContentfulGalleryEventDateEndArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type ContentfulGalleryGatsbyPathArgs = {
  filePath?: InputMaybe<Scalars['String']['input']>;
};


export type ContentfulGalleryUpdatedAtArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ContentfulGalleryConnection = {
  __typename?: 'ContentfulGalleryConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<ContentfulGalleryEdge>;
  group: Array<ContentfulGalleryGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<ContentfulGallery>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type ContentfulGalleryConnectionDistinctArgs = {
  field: ContentfulGalleryFieldsEnum;
};


export type ContentfulGalleryConnectionGroupArgs = {
  field: ContentfulGalleryFieldsEnum;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulGalleryConnectionMaxArgs = {
  field: ContentfulGalleryFieldsEnum;
};


export type ContentfulGalleryConnectionMinArgs = {
  field: ContentfulGalleryFieldsEnum;
};


export type ContentfulGalleryConnectionSumArgs = {
  field: ContentfulGalleryFieldsEnum;
};

export type ContentfulGalleryEdge = {
  __typename?: 'ContentfulGalleryEdge';
  next?: Maybe<ContentfulGallery>;
  node: ContentfulGallery;
  previous?: Maybe<ContentfulGallery>;
};

export enum ContentfulGalleryFieldsEnum {
  BannerMobileChildren = 'bannerMobile___children',
  BannerMobileChildrenChildren = 'bannerMobile___children___children',
  BannerMobileChildrenChildrenChildren = 'bannerMobile___children___children___children',
  BannerMobileChildrenChildrenId = 'bannerMobile___children___children___id',
  BannerMobileChildrenId = 'bannerMobile___children___id',
  BannerMobileChildrenInternalContent = 'bannerMobile___children___internal___content',
  BannerMobileChildrenInternalContentDigest = 'bannerMobile___children___internal___contentDigest',
  BannerMobileChildrenInternalContentFilePath = 'bannerMobile___children___internal___contentFilePath',
  BannerMobileChildrenInternalDescription = 'bannerMobile___children___internal___description',
  BannerMobileChildrenInternalFieldOwners = 'bannerMobile___children___internal___fieldOwners',
  BannerMobileChildrenInternalIgnoreType = 'bannerMobile___children___internal___ignoreType',
  BannerMobileChildrenInternalMediaType = 'bannerMobile___children___internal___mediaType',
  BannerMobileChildrenInternalOwner = 'bannerMobile___children___internal___owner',
  BannerMobileChildrenInternalType = 'bannerMobile___children___internal___type',
  BannerMobileChildrenParentChildren = 'bannerMobile___children___parent___children',
  BannerMobileChildrenParentId = 'bannerMobile___children___parent___id',
  BannerMobileContentfulId = 'bannerMobile___contentful_id',
  BannerMobileCreatedAt = 'bannerMobile___createdAt',
  BannerMobileDescription = 'bannerMobile___description',
  BannerMobileFileContentType = 'bannerMobile___file___contentType',
  BannerMobileFileDetailsSize = 'bannerMobile___file___details___size',
  BannerMobileFileFileName = 'bannerMobile___file___fileName',
  BannerMobileFileUrl = 'bannerMobile___file___url',
  BannerMobileFilename = 'bannerMobile___filename',
  BannerMobileFilesize = 'bannerMobile___filesize',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BannerMobileGatsbyImage = 'bannerMobile___gatsbyImage',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BannerMobileGatsbyImageData = 'bannerMobile___gatsbyImageData',
  BannerMobileHeight = 'bannerMobile___height',
  BannerMobileId = 'bannerMobile___id',
  BannerMobileInternalContent = 'bannerMobile___internal___content',
  BannerMobileInternalContentDigest = 'bannerMobile___internal___contentDigest',
  BannerMobileInternalContentFilePath = 'bannerMobile___internal___contentFilePath',
  BannerMobileInternalDescription = 'bannerMobile___internal___description',
  BannerMobileInternalFieldOwners = 'bannerMobile___internal___fieldOwners',
  BannerMobileInternalIgnoreType = 'bannerMobile___internal___ignoreType',
  BannerMobileInternalMediaType = 'bannerMobile___internal___mediaType',
  BannerMobileInternalOwner = 'bannerMobile___internal___owner',
  BannerMobileInternalType = 'bannerMobile___internal___type',
  BannerMobileMimeType = 'bannerMobile___mimeType',
  BannerMobileNodeLocale = 'bannerMobile___node_locale',
  BannerMobileParentChildren = 'bannerMobile___parent___children',
  BannerMobileParentChildrenChildren = 'bannerMobile___parent___children___children',
  BannerMobileParentChildrenId = 'bannerMobile___parent___children___id',
  BannerMobileParentId = 'bannerMobile___parent___id',
  BannerMobileParentInternalContent = 'bannerMobile___parent___internal___content',
  BannerMobileParentInternalContentDigest = 'bannerMobile___parent___internal___contentDigest',
  BannerMobileParentInternalContentFilePath = 'bannerMobile___parent___internal___contentFilePath',
  BannerMobileParentInternalDescription = 'bannerMobile___parent___internal___description',
  BannerMobileParentInternalFieldOwners = 'bannerMobile___parent___internal___fieldOwners',
  BannerMobileParentInternalIgnoreType = 'bannerMobile___parent___internal___ignoreType',
  BannerMobileParentInternalMediaType = 'bannerMobile___parent___internal___mediaType',
  BannerMobileParentInternalOwner = 'bannerMobile___parent___internal___owner',
  BannerMobileParentInternalType = 'bannerMobile___parent___internal___type',
  BannerMobileParentParentChildren = 'bannerMobile___parent___parent___children',
  BannerMobileParentParentId = 'bannerMobile___parent___parent___id',
  BannerMobilePlaceholderUrl = 'bannerMobile___placeholderUrl',
  BannerMobilePublicUrl = 'bannerMobile___publicUrl',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BannerMobileResizeHeight = 'bannerMobile___resize___height',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BannerMobileResizeSrc = 'bannerMobile___resize___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BannerMobileResizeWidth = 'bannerMobile___resize___width',
  BannerMobileSize = 'bannerMobile___size',
  BannerMobileSpaceId = 'bannerMobile___spaceId',
  BannerMobileSysRevision = 'bannerMobile___sys___revision',
  BannerMobileSysType = 'bannerMobile___sys___type',
  BannerMobileTitle = 'bannerMobile___title',
  BannerMobileUpdatedAt = 'bannerMobile___updatedAt',
  BannerMobileUrl = 'bannerMobile___url',
  BannerMobileWidth = 'bannerMobile___width',
  BannerChildren = 'banner___children',
  BannerChildrenChildren = 'banner___children___children',
  BannerChildrenChildrenChildren = 'banner___children___children___children',
  BannerChildrenChildrenId = 'banner___children___children___id',
  BannerChildrenId = 'banner___children___id',
  BannerChildrenInternalContent = 'banner___children___internal___content',
  BannerChildrenInternalContentDigest = 'banner___children___internal___contentDigest',
  BannerChildrenInternalContentFilePath = 'banner___children___internal___contentFilePath',
  BannerChildrenInternalDescription = 'banner___children___internal___description',
  BannerChildrenInternalFieldOwners = 'banner___children___internal___fieldOwners',
  BannerChildrenInternalIgnoreType = 'banner___children___internal___ignoreType',
  BannerChildrenInternalMediaType = 'banner___children___internal___mediaType',
  BannerChildrenInternalOwner = 'banner___children___internal___owner',
  BannerChildrenInternalType = 'banner___children___internal___type',
  BannerChildrenParentChildren = 'banner___children___parent___children',
  BannerChildrenParentId = 'banner___children___parent___id',
  BannerContentfulId = 'banner___contentful_id',
  BannerCreatedAt = 'banner___createdAt',
  BannerDescription = 'banner___description',
  BannerFileContentType = 'banner___file___contentType',
  BannerFileDetailsSize = 'banner___file___details___size',
  BannerFileFileName = 'banner___file___fileName',
  BannerFileUrl = 'banner___file___url',
  BannerFilename = 'banner___filename',
  BannerFilesize = 'banner___filesize',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BannerGatsbyImage = 'banner___gatsbyImage',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BannerGatsbyImageData = 'banner___gatsbyImageData',
  BannerHeight = 'banner___height',
  BannerId = 'banner___id',
  BannerInternalContent = 'banner___internal___content',
  BannerInternalContentDigest = 'banner___internal___contentDigest',
  BannerInternalContentFilePath = 'banner___internal___contentFilePath',
  BannerInternalDescription = 'banner___internal___description',
  BannerInternalFieldOwners = 'banner___internal___fieldOwners',
  BannerInternalIgnoreType = 'banner___internal___ignoreType',
  BannerInternalMediaType = 'banner___internal___mediaType',
  BannerInternalOwner = 'banner___internal___owner',
  BannerInternalType = 'banner___internal___type',
  BannerMimeType = 'banner___mimeType',
  BannerNodeLocale = 'banner___node_locale',
  BannerParentChildren = 'banner___parent___children',
  BannerParentChildrenChildren = 'banner___parent___children___children',
  BannerParentChildrenId = 'banner___parent___children___id',
  BannerParentId = 'banner___parent___id',
  BannerParentInternalContent = 'banner___parent___internal___content',
  BannerParentInternalContentDigest = 'banner___parent___internal___contentDigest',
  BannerParentInternalContentFilePath = 'banner___parent___internal___contentFilePath',
  BannerParentInternalDescription = 'banner___parent___internal___description',
  BannerParentInternalFieldOwners = 'banner___parent___internal___fieldOwners',
  BannerParentInternalIgnoreType = 'banner___parent___internal___ignoreType',
  BannerParentInternalMediaType = 'banner___parent___internal___mediaType',
  BannerParentInternalOwner = 'banner___parent___internal___owner',
  BannerParentInternalType = 'banner___parent___internal___type',
  BannerParentParentChildren = 'banner___parent___parent___children',
  BannerParentParentId = 'banner___parent___parent___id',
  BannerPlaceholderUrl = 'banner___placeholderUrl',
  BannerPublicUrl = 'banner___publicUrl',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BannerResizeHeight = 'banner___resize___height',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BannerResizeSrc = 'banner___resize___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BannerResizeWidth = 'banner___resize___width',
  BannerSize = 'banner___size',
  BannerSpaceId = 'banner___spaceId',
  BannerSysRevision = 'banner___sys___revision',
  BannerSysType = 'banner___sys___type',
  BannerTitle = 'banner___title',
  BannerUpdatedAt = 'banner___updatedAt',
  BannerUrl = 'banner___url',
  BannerWidth = 'banner___width',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalContentFilePath = 'children___children___internal___contentFilePath',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalContentFilePath = 'children___internal___contentFilePath',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalContentFilePath = 'children___parent___internal___contentFilePath',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  Description = 'description',
  EventDate = 'eventDate',
  EventDateEnd = 'eventDateEnd',
  FacebookAlbumId = 'facebookAlbumId',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  GatsbyPath = 'gatsbyPath',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalContentFilePath = 'internal___contentFilePath',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  LineupArtists = 'lineup___artists',
  LineupArtistsChildren = 'lineup___artists___children',
  LineupArtistsChildrenChildren = 'lineup___artists___children___children',
  LineupArtistsChildrenId = 'lineup___artists___children___id',
  LineupArtistsContentfulId = 'lineup___artists___contentful_id',
  LineupArtistsCountryOfOrigin = 'lineup___artists___countryOfOrigin',
  LineupArtistsCreatedAt = 'lineup___artists___createdAt',
  LineupArtistsId = 'lineup___artists___id',
  LineupArtistsInternalContent = 'lineup___artists___internal___content',
  LineupArtistsInternalContentDigest = 'lineup___artists___internal___contentDigest',
  LineupArtistsInternalContentFilePath = 'lineup___artists___internal___contentFilePath',
  LineupArtistsInternalDescription = 'lineup___artists___internal___description',
  LineupArtistsInternalFieldOwners = 'lineup___artists___internal___fieldOwners',
  LineupArtistsInternalIgnoreType = 'lineup___artists___internal___ignoreType',
  LineupArtistsInternalMediaType = 'lineup___artists___internal___mediaType',
  LineupArtistsInternalOwner = 'lineup___artists___internal___owner',
  LineupArtistsInternalType = 'lineup___artists___internal___type',
  LineupArtistsLineup = 'lineup___artists___lineup',
  LineupArtistsLineupArtists = 'lineup___artists___lineup___artists',
  LineupArtistsLineupChildren = 'lineup___artists___lineup___children',
  LineupArtistsLineupContentfulId = 'lineup___artists___lineup___contentful_id',
  LineupArtistsLineupCreatedAt = 'lineup___artists___lineup___createdAt',
  LineupArtistsLineupId = 'lineup___artists___lineup___id',
  LineupArtistsLineupName = 'lineup___artists___lineup___name',
  LineupArtistsLineupNodeLocale = 'lineup___artists___lineup___node_locale',
  LineupArtistsLineupSpaceId = 'lineup___artists___lineup___spaceId',
  LineupArtistsLineupUpdatedAt = 'lineup___artists___lineup___updatedAt',
  LineupArtistsLineupUrl = 'lineup___artists___lineup___url',
  LineupArtistsName = 'lineup___artists___name',
  LineupArtistsNodeLocale = 'lineup___artists___node_locale',
  LineupArtistsParentChildren = 'lineup___artists___parent___children',
  LineupArtistsParentId = 'lineup___artists___parent___id',
  LineupArtistsPhotoChildren = 'lineup___artists___photo___children',
  LineupArtistsPhotoContentfulId = 'lineup___artists___photo___contentful_id',
  LineupArtistsPhotoCreatedAt = 'lineup___artists___photo___createdAt',
  LineupArtistsPhotoDescription = 'lineup___artists___photo___description',
  LineupArtistsPhotoFilename = 'lineup___artists___photo___filename',
  LineupArtistsPhotoFilesize = 'lineup___artists___photo___filesize',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LineupArtistsPhotoGatsbyImage = 'lineup___artists___photo___gatsbyImage',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  LineupArtistsPhotoGatsbyImageData = 'lineup___artists___photo___gatsbyImageData',
  LineupArtistsPhotoHeight = 'lineup___artists___photo___height',
  LineupArtistsPhotoId = 'lineup___artists___photo___id',
  LineupArtistsPhotoMimeType = 'lineup___artists___photo___mimeType',
  LineupArtistsPhotoNodeLocale = 'lineup___artists___photo___node_locale',
  LineupArtistsPhotoPlaceholderUrl = 'lineup___artists___photo___placeholderUrl',
  LineupArtistsPhotoPublicUrl = 'lineup___artists___photo___publicUrl',
  LineupArtistsPhotoSize = 'lineup___artists___photo___size',
  LineupArtistsPhotoSpaceId = 'lineup___artists___photo___spaceId',
  LineupArtistsPhotoTitle = 'lineup___artists___photo___title',
  LineupArtistsPhotoUpdatedAt = 'lineup___artists___photo___updatedAt',
  LineupArtistsPhotoUrl = 'lineup___artists___photo___url',
  LineupArtistsPhotoWidth = 'lineup___artists___photo___width',
  LineupArtistsSocialMediaLink = 'lineup___artists___socialMediaLink',
  LineupArtistsSpaceId = 'lineup___artists___spaceId',
  LineupArtistsStageArtist = 'lineup___artists___stage___artist',
  LineupArtistsStageChildren = 'lineup___artists___stage___children',
  LineupArtistsStageContentfulId = 'lineup___artists___stage___contentful_id',
  LineupArtistsStageCreatedAt = 'lineup___artists___stage___createdAt',
  LineupArtistsStageId = 'lineup___artists___stage___id',
  LineupArtistsStageNodeLocale = 'lineup___artists___stage___node_locale',
  LineupArtistsStageOrder = 'lineup___artists___stage___order',
  LineupArtistsStageSpaceId = 'lineup___artists___stage___spaceId',
  LineupArtistsStageTitle = 'lineup___artists___stage___title',
  LineupArtistsStageUpdatedAt = 'lineup___artists___stage___updatedAt',
  LineupArtistsSysRevision = 'lineup___artists___sys___revision',
  LineupArtistsSysType = 'lineup___artists___sys___type',
  LineupArtistsUpdatedAt = 'lineup___artists___updatedAt',
  LineupChildren = 'lineup___children',
  LineupChildrenChildren = 'lineup___children___children',
  LineupChildrenChildrenChildren = 'lineup___children___children___children',
  LineupChildrenChildrenId = 'lineup___children___children___id',
  LineupChildrenId = 'lineup___children___id',
  LineupChildrenInternalContent = 'lineup___children___internal___content',
  LineupChildrenInternalContentDigest = 'lineup___children___internal___contentDigest',
  LineupChildrenInternalContentFilePath = 'lineup___children___internal___contentFilePath',
  LineupChildrenInternalDescription = 'lineup___children___internal___description',
  LineupChildrenInternalFieldOwners = 'lineup___children___internal___fieldOwners',
  LineupChildrenInternalIgnoreType = 'lineup___children___internal___ignoreType',
  LineupChildrenInternalMediaType = 'lineup___children___internal___mediaType',
  LineupChildrenInternalOwner = 'lineup___children___internal___owner',
  LineupChildrenInternalType = 'lineup___children___internal___type',
  LineupChildrenParentChildren = 'lineup___children___parent___children',
  LineupChildrenParentId = 'lineup___children___parent___id',
  LineupContentfulId = 'lineup___contentful_id',
  LineupCreatedAt = 'lineup___createdAt',
  LineupId = 'lineup___id',
  LineupInternalContent = 'lineup___internal___content',
  LineupInternalContentDigest = 'lineup___internal___contentDigest',
  LineupInternalContentFilePath = 'lineup___internal___contentFilePath',
  LineupInternalDescription = 'lineup___internal___description',
  LineupInternalFieldOwners = 'lineup___internal___fieldOwners',
  LineupInternalIgnoreType = 'lineup___internal___ignoreType',
  LineupInternalMediaType = 'lineup___internal___mediaType',
  LineupInternalOwner = 'lineup___internal___owner',
  LineupInternalType = 'lineup___internal___type',
  LineupName = 'lineup___name',
  LineupNodeLocale = 'lineup___node_locale',
  LineupParentChildren = 'lineup___parent___children',
  LineupParentChildrenChildren = 'lineup___parent___children___children',
  LineupParentChildrenId = 'lineup___parent___children___id',
  LineupParentId = 'lineup___parent___id',
  LineupParentInternalContent = 'lineup___parent___internal___content',
  LineupParentInternalContentDigest = 'lineup___parent___internal___contentDigest',
  LineupParentInternalContentFilePath = 'lineup___parent___internal___contentFilePath',
  LineupParentInternalDescription = 'lineup___parent___internal___description',
  LineupParentInternalFieldOwners = 'lineup___parent___internal___fieldOwners',
  LineupParentInternalIgnoreType = 'lineup___parent___internal___ignoreType',
  LineupParentInternalMediaType = 'lineup___parent___internal___mediaType',
  LineupParentInternalOwner = 'lineup___parent___internal___owner',
  LineupParentInternalType = 'lineup___parent___internal___type',
  LineupParentParentChildren = 'lineup___parent___parent___children',
  LineupParentParentId = 'lineup___parent___parent___id',
  LineupSpaceId = 'lineup___spaceId',
  LineupSysRevision = 'lineup___sys___revision',
  LineupSysType = 'lineup___sys___type',
  LineupUpdatedAt = 'lineup___updatedAt',
  LineupUrl = 'lineup___url',
  NodeLocale = 'node_locale',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalContentFilePath = 'parent___children___internal___contentFilePath',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalContentFilePath = 'parent___internal___contentFilePath',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalContentFilePath = 'parent___parent___internal___contentFilePath',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  SpaceId = 'spaceId',
  SysContentTypeSysId = 'sys___contentType___sys___id',
  SysContentTypeSysLinkType = 'sys___contentType___sys___linkType',
  SysContentTypeSysType = 'sys___contentType___sys___type',
  SysRevision = 'sys___revision',
  SysType = 'sys___type',
  Title = 'title',
  UpdatedAt = 'updatedAt'
}

export type ContentfulGalleryFilterInput = {
  banner?: InputMaybe<ContentfulAssetFilterInput>;
  bannerMobile?: InputMaybe<ContentfulAssetFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  eventDate?: InputMaybe<DateQueryOperatorInput>;
  eventDateEnd?: InputMaybe<DateQueryOperatorInput>;
  facebookAlbumId?: InputMaybe<StringQueryOperatorInput>;
  gatsbyPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  lineup?: InputMaybe<ContentfulLineupFilterInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulGallerySysFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
};

export type ContentfulGalleryGroupConnection = {
  __typename?: 'ContentfulGalleryGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<ContentfulGalleryEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<ContentfulGalleryGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<ContentfulGallery>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type ContentfulGalleryGroupConnectionDistinctArgs = {
  field: ContentfulGalleryFieldsEnum;
};


export type ContentfulGalleryGroupConnectionGroupArgs = {
  field: ContentfulGalleryFieldsEnum;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulGalleryGroupConnectionMaxArgs = {
  field: ContentfulGalleryFieldsEnum;
};


export type ContentfulGalleryGroupConnectionMinArgs = {
  field: ContentfulGalleryFieldsEnum;
};


export type ContentfulGalleryGroupConnectionSumArgs = {
  field: ContentfulGalleryFieldsEnum;
};

export type ContentfulGallerySortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulGalleryFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulGallerySys = {
  __typename?: 'ContentfulGallerySys';
  contentType?: Maybe<ContentfulGallerySysContentType>;
  revision?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ContentfulGallerySysContentType = {
  __typename?: 'ContentfulGallerySysContentType';
  sys?: Maybe<ContentfulGallerySysContentTypeSys>;
};

export type ContentfulGallerySysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulGallerySysContentTypeSysFilterInput>;
};

export type ContentfulGallerySysContentTypeSys = {
  __typename?: 'ContentfulGallerySysContentTypeSys';
  id?: Maybe<Scalars['String']['output']>;
  linkType?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ContentfulGallerySysContentTypeSysFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulGallerySysFilterInput = {
  contentType?: InputMaybe<ContentfulGallerySysContentTypeFilterInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export enum ContentfulImageCropFocus {
  Bottom = 'BOTTOM',
  BottomLeft = 'BOTTOM_LEFT',
  BottomRight = 'BOTTOM_RIGHT',
  Center = 'CENTER',
  Face = 'FACE',
  Faces = 'FACES',
  Left = 'LEFT',
  Right = 'RIGHT',
  Top = 'TOP',
  TopLeft = 'TOP_LEFT',
  TopRight = 'TOP_RIGHT'
}

export type ContentfulLineup = ContentfulEntry & ContentfulReference & Node & {
  __typename?: 'ContentfulLineup';
  artists?: Maybe<Array<Maybe<ContentfulArtist>>>;
  children: Array<Node>;
  contentful_id: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  internal: Internal;
  name?: Maybe<Scalars['String']['output']>;
  node_locale: Scalars['String']['output'];
  parent?: Maybe<Node>;
  spaceId?: Maybe<Scalars['String']['output']>;
  sys?: Maybe<ContentfulLineupSys>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  url?: Maybe<Scalars['Date']['output']>;
};


export type ContentfulLineupCreatedAtArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type ContentfulLineupUpdatedAtArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type ContentfulLineupUrlArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ContentfulLineupConnection = {
  __typename?: 'ContentfulLineupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<ContentfulLineupEdge>;
  group: Array<ContentfulLineupGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<ContentfulLineup>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type ContentfulLineupConnectionDistinctArgs = {
  field: ContentfulLineupFieldsEnum;
};


export type ContentfulLineupConnectionGroupArgs = {
  field: ContentfulLineupFieldsEnum;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulLineupConnectionMaxArgs = {
  field: ContentfulLineupFieldsEnum;
};


export type ContentfulLineupConnectionMinArgs = {
  field: ContentfulLineupFieldsEnum;
};


export type ContentfulLineupConnectionSumArgs = {
  field: ContentfulLineupFieldsEnum;
};

export type ContentfulLineupEdge = {
  __typename?: 'ContentfulLineupEdge';
  next?: Maybe<ContentfulLineup>;
  node: ContentfulLineup;
  previous?: Maybe<ContentfulLineup>;
};

export enum ContentfulLineupFieldsEnum {
  Artists = 'artists',
  ArtistsChildren = 'artists___children',
  ArtistsChildrenChildren = 'artists___children___children',
  ArtistsChildrenChildrenChildren = 'artists___children___children___children',
  ArtistsChildrenChildrenId = 'artists___children___children___id',
  ArtistsChildrenId = 'artists___children___id',
  ArtistsChildrenInternalContent = 'artists___children___internal___content',
  ArtistsChildrenInternalContentDigest = 'artists___children___internal___contentDigest',
  ArtistsChildrenInternalContentFilePath = 'artists___children___internal___contentFilePath',
  ArtistsChildrenInternalDescription = 'artists___children___internal___description',
  ArtistsChildrenInternalFieldOwners = 'artists___children___internal___fieldOwners',
  ArtistsChildrenInternalIgnoreType = 'artists___children___internal___ignoreType',
  ArtistsChildrenInternalMediaType = 'artists___children___internal___mediaType',
  ArtistsChildrenInternalOwner = 'artists___children___internal___owner',
  ArtistsChildrenInternalType = 'artists___children___internal___type',
  ArtistsChildrenParentChildren = 'artists___children___parent___children',
  ArtistsChildrenParentId = 'artists___children___parent___id',
  ArtistsContentfulId = 'artists___contentful_id',
  ArtistsCountryOfOrigin = 'artists___countryOfOrigin',
  ArtistsCreatedAt = 'artists___createdAt',
  ArtistsId = 'artists___id',
  ArtistsInternalContent = 'artists___internal___content',
  ArtistsInternalContentDigest = 'artists___internal___contentDigest',
  ArtistsInternalContentFilePath = 'artists___internal___contentFilePath',
  ArtistsInternalDescription = 'artists___internal___description',
  ArtistsInternalFieldOwners = 'artists___internal___fieldOwners',
  ArtistsInternalIgnoreType = 'artists___internal___ignoreType',
  ArtistsInternalMediaType = 'artists___internal___mediaType',
  ArtistsInternalOwner = 'artists___internal___owner',
  ArtistsInternalType = 'artists___internal___type',
  ArtistsLineup = 'artists___lineup',
  ArtistsLineupArtists = 'artists___lineup___artists',
  ArtistsLineupArtistsChildren = 'artists___lineup___artists___children',
  ArtistsLineupArtistsContentfulId = 'artists___lineup___artists___contentful_id',
  ArtistsLineupArtistsCountryOfOrigin = 'artists___lineup___artists___countryOfOrigin',
  ArtistsLineupArtistsCreatedAt = 'artists___lineup___artists___createdAt',
  ArtistsLineupArtistsId = 'artists___lineup___artists___id',
  ArtistsLineupArtistsLineup = 'artists___lineup___artists___lineup',
  ArtistsLineupArtistsName = 'artists___lineup___artists___name',
  ArtistsLineupArtistsNodeLocale = 'artists___lineup___artists___node_locale',
  ArtistsLineupArtistsSocialMediaLink = 'artists___lineup___artists___socialMediaLink',
  ArtistsLineupArtistsSpaceId = 'artists___lineup___artists___spaceId',
  ArtistsLineupArtistsUpdatedAt = 'artists___lineup___artists___updatedAt',
  ArtistsLineupChildren = 'artists___lineup___children',
  ArtistsLineupChildrenChildren = 'artists___lineup___children___children',
  ArtistsLineupChildrenId = 'artists___lineup___children___id',
  ArtistsLineupContentfulId = 'artists___lineup___contentful_id',
  ArtistsLineupCreatedAt = 'artists___lineup___createdAt',
  ArtistsLineupId = 'artists___lineup___id',
  ArtistsLineupInternalContent = 'artists___lineup___internal___content',
  ArtistsLineupInternalContentDigest = 'artists___lineup___internal___contentDigest',
  ArtistsLineupInternalContentFilePath = 'artists___lineup___internal___contentFilePath',
  ArtistsLineupInternalDescription = 'artists___lineup___internal___description',
  ArtistsLineupInternalFieldOwners = 'artists___lineup___internal___fieldOwners',
  ArtistsLineupInternalIgnoreType = 'artists___lineup___internal___ignoreType',
  ArtistsLineupInternalMediaType = 'artists___lineup___internal___mediaType',
  ArtistsLineupInternalOwner = 'artists___lineup___internal___owner',
  ArtistsLineupInternalType = 'artists___lineup___internal___type',
  ArtistsLineupName = 'artists___lineup___name',
  ArtistsLineupNodeLocale = 'artists___lineup___node_locale',
  ArtistsLineupParentChildren = 'artists___lineup___parent___children',
  ArtistsLineupParentId = 'artists___lineup___parent___id',
  ArtistsLineupSpaceId = 'artists___lineup___spaceId',
  ArtistsLineupSysRevision = 'artists___lineup___sys___revision',
  ArtistsLineupSysType = 'artists___lineup___sys___type',
  ArtistsLineupUpdatedAt = 'artists___lineup___updatedAt',
  ArtistsLineupUrl = 'artists___lineup___url',
  ArtistsName = 'artists___name',
  ArtistsNodeLocale = 'artists___node_locale',
  ArtistsParentChildren = 'artists___parent___children',
  ArtistsParentChildrenChildren = 'artists___parent___children___children',
  ArtistsParentChildrenId = 'artists___parent___children___id',
  ArtistsParentId = 'artists___parent___id',
  ArtistsParentInternalContent = 'artists___parent___internal___content',
  ArtistsParentInternalContentDigest = 'artists___parent___internal___contentDigest',
  ArtistsParentInternalContentFilePath = 'artists___parent___internal___contentFilePath',
  ArtistsParentInternalDescription = 'artists___parent___internal___description',
  ArtistsParentInternalFieldOwners = 'artists___parent___internal___fieldOwners',
  ArtistsParentInternalIgnoreType = 'artists___parent___internal___ignoreType',
  ArtistsParentInternalMediaType = 'artists___parent___internal___mediaType',
  ArtistsParentInternalOwner = 'artists___parent___internal___owner',
  ArtistsParentInternalType = 'artists___parent___internal___type',
  ArtistsParentParentChildren = 'artists___parent___parent___children',
  ArtistsParentParentId = 'artists___parent___parent___id',
  ArtistsPhotoChildren = 'artists___photo___children',
  ArtistsPhotoChildrenChildren = 'artists___photo___children___children',
  ArtistsPhotoChildrenId = 'artists___photo___children___id',
  ArtistsPhotoContentfulId = 'artists___photo___contentful_id',
  ArtistsPhotoCreatedAt = 'artists___photo___createdAt',
  ArtistsPhotoDescription = 'artists___photo___description',
  ArtistsPhotoFileContentType = 'artists___photo___file___contentType',
  ArtistsPhotoFileFileName = 'artists___photo___file___fileName',
  ArtistsPhotoFileUrl = 'artists___photo___file___url',
  ArtistsPhotoFilename = 'artists___photo___filename',
  ArtistsPhotoFilesize = 'artists___photo___filesize',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ArtistsPhotoGatsbyImage = 'artists___photo___gatsbyImage',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ArtistsPhotoGatsbyImageData = 'artists___photo___gatsbyImageData',
  ArtistsPhotoHeight = 'artists___photo___height',
  ArtistsPhotoId = 'artists___photo___id',
  ArtistsPhotoInternalContent = 'artists___photo___internal___content',
  ArtistsPhotoInternalContentDigest = 'artists___photo___internal___contentDigest',
  ArtistsPhotoInternalContentFilePath = 'artists___photo___internal___contentFilePath',
  ArtistsPhotoInternalDescription = 'artists___photo___internal___description',
  ArtistsPhotoInternalFieldOwners = 'artists___photo___internal___fieldOwners',
  ArtistsPhotoInternalIgnoreType = 'artists___photo___internal___ignoreType',
  ArtistsPhotoInternalMediaType = 'artists___photo___internal___mediaType',
  ArtistsPhotoInternalOwner = 'artists___photo___internal___owner',
  ArtistsPhotoInternalType = 'artists___photo___internal___type',
  ArtistsPhotoMimeType = 'artists___photo___mimeType',
  ArtistsPhotoNodeLocale = 'artists___photo___node_locale',
  ArtistsPhotoParentChildren = 'artists___photo___parent___children',
  ArtistsPhotoParentId = 'artists___photo___parent___id',
  ArtistsPhotoPlaceholderUrl = 'artists___photo___placeholderUrl',
  ArtistsPhotoPublicUrl = 'artists___photo___publicUrl',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ArtistsPhotoResizeHeight = 'artists___photo___resize___height',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ArtistsPhotoResizeSrc = 'artists___photo___resize___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ArtistsPhotoResizeWidth = 'artists___photo___resize___width',
  ArtistsPhotoSize = 'artists___photo___size',
  ArtistsPhotoSpaceId = 'artists___photo___spaceId',
  ArtistsPhotoSysRevision = 'artists___photo___sys___revision',
  ArtistsPhotoSysType = 'artists___photo___sys___type',
  ArtistsPhotoTitle = 'artists___photo___title',
  ArtistsPhotoUpdatedAt = 'artists___photo___updatedAt',
  ArtistsPhotoUrl = 'artists___photo___url',
  ArtistsPhotoWidth = 'artists___photo___width',
  ArtistsSocialMediaLink = 'artists___socialMediaLink',
  ArtistsSpaceId = 'artists___spaceId',
  ArtistsStageArtist = 'artists___stage___artist',
  ArtistsStageArtistChildren = 'artists___stage___artist___children',
  ArtistsStageArtistContentfulId = 'artists___stage___artist___contentful_id',
  ArtistsStageArtistCountryOfOrigin = 'artists___stage___artist___countryOfOrigin',
  ArtistsStageArtistCreatedAt = 'artists___stage___artist___createdAt',
  ArtistsStageArtistId = 'artists___stage___artist___id',
  ArtistsStageArtistLineup = 'artists___stage___artist___lineup',
  ArtistsStageArtistName = 'artists___stage___artist___name',
  ArtistsStageArtistNodeLocale = 'artists___stage___artist___node_locale',
  ArtistsStageArtistSocialMediaLink = 'artists___stage___artist___socialMediaLink',
  ArtistsStageArtistSpaceId = 'artists___stage___artist___spaceId',
  ArtistsStageArtistUpdatedAt = 'artists___stage___artist___updatedAt',
  ArtistsStageChildren = 'artists___stage___children',
  ArtistsStageChildrenChildren = 'artists___stage___children___children',
  ArtistsStageChildrenId = 'artists___stage___children___id',
  ArtistsStageContentfulId = 'artists___stage___contentful_id',
  ArtistsStageCreatedAt = 'artists___stage___createdAt',
  ArtistsStageId = 'artists___stage___id',
  ArtistsStageInternalContent = 'artists___stage___internal___content',
  ArtistsStageInternalContentDigest = 'artists___stage___internal___contentDigest',
  ArtistsStageInternalContentFilePath = 'artists___stage___internal___contentFilePath',
  ArtistsStageInternalDescription = 'artists___stage___internal___description',
  ArtistsStageInternalFieldOwners = 'artists___stage___internal___fieldOwners',
  ArtistsStageInternalIgnoreType = 'artists___stage___internal___ignoreType',
  ArtistsStageInternalMediaType = 'artists___stage___internal___mediaType',
  ArtistsStageInternalOwner = 'artists___stage___internal___owner',
  ArtistsStageInternalType = 'artists___stage___internal___type',
  ArtistsStageNodeLocale = 'artists___stage___node_locale',
  ArtistsStageOrder = 'artists___stage___order',
  ArtistsStageParentChildren = 'artists___stage___parent___children',
  ArtistsStageParentId = 'artists___stage___parent___id',
  ArtistsStageSpaceId = 'artists___stage___spaceId',
  ArtistsStageSysRevision = 'artists___stage___sys___revision',
  ArtistsStageSysType = 'artists___stage___sys___type',
  ArtistsStageTitle = 'artists___stage___title',
  ArtistsStageUpdatedAt = 'artists___stage___updatedAt',
  ArtistsSysRevision = 'artists___sys___revision',
  ArtistsSysType = 'artists___sys___type',
  ArtistsUpdatedAt = 'artists___updatedAt',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalContentFilePath = 'children___children___internal___contentFilePath',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalContentFilePath = 'children___internal___contentFilePath',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalContentFilePath = 'children___parent___internal___contentFilePath',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalContentFilePath = 'internal___contentFilePath',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Name = 'name',
  NodeLocale = 'node_locale',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalContentFilePath = 'parent___children___internal___contentFilePath',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalContentFilePath = 'parent___internal___contentFilePath',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalContentFilePath = 'parent___parent___internal___contentFilePath',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  SpaceId = 'spaceId',
  SysContentTypeSysId = 'sys___contentType___sys___id',
  SysContentTypeSysLinkType = 'sys___contentType___sys___linkType',
  SysContentTypeSysType = 'sys___contentType___sys___type',
  SysRevision = 'sys___revision',
  SysType = 'sys___type',
  UpdatedAt = 'updatedAt',
  Url = 'url'
}

export type ContentfulLineupFilterInput = {
  artists?: InputMaybe<ContentfulArtistFilterListInput>;
  children?: InputMaybe<NodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulLineupSysFilterInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  url?: InputMaybe<DateQueryOperatorInput>;
};

export type ContentfulLineupFilterListInput = {
  elemMatch?: InputMaybe<ContentfulLineupFilterInput>;
};

export type ContentfulLineupGroupConnection = {
  __typename?: 'ContentfulLineupGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<ContentfulLineupEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<ContentfulLineupGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<ContentfulLineup>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type ContentfulLineupGroupConnectionDistinctArgs = {
  field: ContentfulLineupFieldsEnum;
};


export type ContentfulLineupGroupConnectionGroupArgs = {
  field: ContentfulLineupFieldsEnum;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulLineupGroupConnectionMaxArgs = {
  field: ContentfulLineupFieldsEnum;
};


export type ContentfulLineupGroupConnectionMinArgs = {
  field: ContentfulLineupFieldsEnum;
};


export type ContentfulLineupGroupConnectionSumArgs = {
  field: ContentfulLineupFieldsEnum;
};

export type ContentfulLineupSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulLineupFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulLineupSys = {
  __typename?: 'ContentfulLineupSys';
  contentType?: Maybe<ContentfulLineupSysContentType>;
  revision?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ContentfulLineupSysContentType = {
  __typename?: 'ContentfulLineupSysContentType';
  sys?: Maybe<ContentfulLineupSysContentTypeSys>;
};

export type ContentfulLineupSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulLineupSysContentTypeSysFilterInput>;
};

export type ContentfulLineupSysContentTypeSys = {
  __typename?: 'ContentfulLineupSysContentTypeSys';
  id?: Maybe<Scalars['String']['output']>;
  linkType?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ContentfulLineupSysContentTypeSysFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulLineupSysFilterInput = {
  contentType?: InputMaybe<ContentfulLineupSysContentTypeFilterInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulMap = ContentfulEntry & ContentfulReference & Node & {
  __typename?: 'ContentfulMap';
  children: Array<Node>;
  contentful_id: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  internal: Internal;
  mapImage?: Maybe<ContentfulAsset>;
  node_locale: Scalars['String']['output'];
  parent?: Maybe<Node>;
  spaceId?: Maybe<Scalars['String']['output']>;
  sys?: Maybe<ContentfulMapSys>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};


export type ContentfulMapCreatedAtArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type ContentfulMapUpdatedAtArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ContentfulMapConnection = {
  __typename?: 'ContentfulMapConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<ContentfulMapEdge>;
  group: Array<ContentfulMapGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<ContentfulMap>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type ContentfulMapConnectionDistinctArgs = {
  field: ContentfulMapFieldsEnum;
};


export type ContentfulMapConnectionGroupArgs = {
  field: ContentfulMapFieldsEnum;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulMapConnectionMaxArgs = {
  field: ContentfulMapFieldsEnum;
};


export type ContentfulMapConnectionMinArgs = {
  field: ContentfulMapFieldsEnum;
};


export type ContentfulMapConnectionSumArgs = {
  field: ContentfulMapFieldsEnum;
};

export type ContentfulMapEdge = {
  __typename?: 'ContentfulMapEdge';
  next?: Maybe<ContentfulMap>;
  node: ContentfulMap;
  previous?: Maybe<ContentfulMap>;
};

export enum ContentfulMapFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalContentFilePath = 'children___children___internal___contentFilePath',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalContentFilePath = 'children___internal___contentFilePath',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalContentFilePath = 'children___parent___internal___contentFilePath',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalContentFilePath = 'internal___contentFilePath',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  MapImageChildren = 'mapImage___children',
  MapImageChildrenChildren = 'mapImage___children___children',
  MapImageChildrenChildrenChildren = 'mapImage___children___children___children',
  MapImageChildrenChildrenId = 'mapImage___children___children___id',
  MapImageChildrenId = 'mapImage___children___id',
  MapImageChildrenInternalContent = 'mapImage___children___internal___content',
  MapImageChildrenInternalContentDigest = 'mapImage___children___internal___contentDigest',
  MapImageChildrenInternalContentFilePath = 'mapImage___children___internal___contentFilePath',
  MapImageChildrenInternalDescription = 'mapImage___children___internal___description',
  MapImageChildrenInternalFieldOwners = 'mapImage___children___internal___fieldOwners',
  MapImageChildrenInternalIgnoreType = 'mapImage___children___internal___ignoreType',
  MapImageChildrenInternalMediaType = 'mapImage___children___internal___mediaType',
  MapImageChildrenInternalOwner = 'mapImage___children___internal___owner',
  MapImageChildrenInternalType = 'mapImage___children___internal___type',
  MapImageChildrenParentChildren = 'mapImage___children___parent___children',
  MapImageChildrenParentId = 'mapImage___children___parent___id',
  MapImageContentfulId = 'mapImage___contentful_id',
  MapImageCreatedAt = 'mapImage___createdAt',
  MapImageDescription = 'mapImage___description',
  MapImageFileContentType = 'mapImage___file___contentType',
  MapImageFileDetailsSize = 'mapImage___file___details___size',
  MapImageFileFileName = 'mapImage___file___fileName',
  MapImageFileUrl = 'mapImage___file___url',
  MapImageFilename = 'mapImage___filename',
  MapImageFilesize = 'mapImage___filesize',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  MapImageGatsbyImage = 'mapImage___gatsbyImage',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  MapImageGatsbyImageData = 'mapImage___gatsbyImageData',
  MapImageHeight = 'mapImage___height',
  MapImageId = 'mapImage___id',
  MapImageInternalContent = 'mapImage___internal___content',
  MapImageInternalContentDigest = 'mapImage___internal___contentDigest',
  MapImageInternalContentFilePath = 'mapImage___internal___contentFilePath',
  MapImageInternalDescription = 'mapImage___internal___description',
  MapImageInternalFieldOwners = 'mapImage___internal___fieldOwners',
  MapImageInternalIgnoreType = 'mapImage___internal___ignoreType',
  MapImageInternalMediaType = 'mapImage___internal___mediaType',
  MapImageInternalOwner = 'mapImage___internal___owner',
  MapImageInternalType = 'mapImage___internal___type',
  MapImageMimeType = 'mapImage___mimeType',
  MapImageNodeLocale = 'mapImage___node_locale',
  MapImageParentChildren = 'mapImage___parent___children',
  MapImageParentChildrenChildren = 'mapImage___parent___children___children',
  MapImageParentChildrenId = 'mapImage___parent___children___id',
  MapImageParentId = 'mapImage___parent___id',
  MapImageParentInternalContent = 'mapImage___parent___internal___content',
  MapImageParentInternalContentDigest = 'mapImage___parent___internal___contentDigest',
  MapImageParentInternalContentFilePath = 'mapImage___parent___internal___contentFilePath',
  MapImageParentInternalDescription = 'mapImage___parent___internal___description',
  MapImageParentInternalFieldOwners = 'mapImage___parent___internal___fieldOwners',
  MapImageParentInternalIgnoreType = 'mapImage___parent___internal___ignoreType',
  MapImageParentInternalMediaType = 'mapImage___parent___internal___mediaType',
  MapImageParentInternalOwner = 'mapImage___parent___internal___owner',
  MapImageParentInternalType = 'mapImage___parent___internal___type',
  MapImageParentParentChildren = 'mapImage___parent___parent___children',
  MapImageParentParentId = 'mapImage___parent___parent___id',
  MapImagePlaceholderUrl = 'mapImage___placeholderUrl',
  MapImagePublicUrl = 'mapImage___publicUrl',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  MapImageResizeHeight = 'mapImage___resize___height',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  MapImageResizeSrc = 'mapImage___resize___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  MapImageResizeWidth = 'mapImage___resize___width',
  MapImageSize = 'mapImage___size',
  MapImageSpaceId = 'mapImage___spaceId',
  MapImageSysRevision = 'mapImage___sys___revision',
  MapImageSysType = 'mapImage___sys___type',
  MapImageTitle = 'mapImage___title',
  MapImageUpdatedAt = 'mapImage___updatedAt',
  MapImageUrl = 'mapImage___url',
  MapImageWidth = 'mapImage___width',
  NodeLocale = 'node_locale',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalContentFilePath = 'parent___children___internal___contentFilePath',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalContentFilePath = 'parent___internal___contentFilePath',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalContentFilePath = 'parent___parent___internal___contentFilePath',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  SpaceId = 'spaceId',
  SysContentTypeSysId = 'sys___contentType___sys___id',
  SysContentTypeSysLinkType = 'sys___contentType___sys___linkType',
  SysContentTypeSysType = 'sys___contentType___sys___type',
  SysRevision = 'sys___revision',
  SysType = 'sys___type',
  Title = 'title',
  UpdatedAt = 'updatedAt'
}

export type ContentfulMapFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mapImage?: InputMaybe<ContentfulAssetFilterInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulMapSysFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
};

export type ContentfulMapGroupConnection = {
  __typename?: 'ContentfulMapGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<ContentfulMapEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<ContentfulMapGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<ContentfulMap>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type ContentfulMapGroupConnectionDistinctArgs = {
  field: ContentfulMapFieldsEnum;
};


export type ContentfulMapGroupConnectionGroupArgs = {
  field: ContentfulMapFieldsEnum;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulMapGroupConnectionMaxArgs = {
  field: ContentfulMapFieldsEnum;
};


export type ContentfulMapGroupConnectionMinArgs = {
  field: ContentfulMapFieldsEnum;
};


export type ContentfulMapGroupConnectionSumArgs = {
  field: ContentfulMapFieldsEnum;
};

export type ContentfulMapSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulMapFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulMapSys = {
  __typename?: 'ContentfulMapSys';
  contentType?: Maybe<ContentfulMapSysContentType>;
  revision?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ContentfulMapSysContentType = {
  __typename?: 'ContentfulMapSysContentType';
  sys?: Maybe<ContentfulMapSysContentTypeSys>;
};

export type ContentfulMapSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulMapSysContentTypeSysFilterInput>;
};

export type ContentfulMapSysContentTypeSys = {
  __typename?: 'ContentfulMapSysContentTypeSys';
  id?: Maybe<Scalars['String']['output']>;
  linkType?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ContentfulMapSysContentTypeSysFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulMapSysFilterInput = {
  contentType?: InputMaybe<ContentfulMapSysContentTypeFilterInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulMerch = ContentfulEntry & ContentfulReference & Node & {
  __typename?: 'ContentfulMerch';
  /** Returns the first child node of type contentfulMerchDescriptionTextNode or null if there are no children of given type on this node */
  childContentfulMerchDescriptionTextNode?: Maybe<ContentfulMerchDescriptionTextNode>;
  children: Array<Node>;
  /** Returns all children nodes filtered by type contentfulMerchDescriptionTextNode */
  childrenContentfulMerchDescriptionTextNode?: Maybe<Array<Maybe<ContentfulMerchDescriptionTextNode>>>;
  contentful_id: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['Date']['output']>;
  description?: Maybe<ContentfulMerchDescriptionTextNode>;
  gatsbyPath?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<ContentfulAsset>;
  internal: Internal;
  node_locale: Scalars['String']['output'];
  parent?: Maybe<Node>;
  price?: Maybe<Scalars['Float']['output']>;
  spaceId?: Maybe<Scalars['String']['output']>;
  sys?: Maybe<ContentfulMerchSys>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};


export type ContentfulMerchCreatedAtArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type ContentfulMerchGatsbyPathArgs = {
  filePath?: InputMaybe<Scalars['String']['input']>;
};


export type ContentfulMerchUpdatedAtArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ContentfulMerchConnection = {
  __typename?: 'ContentfulMerchConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<ContentfulMerchEdge>;
  group: Array<ContentfulMerchGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<ContentfulMerch>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type ContentfulMerchConnectionDistinctArgs = {
  field: ContentfulMerchFieldsEnum;
};


export type ContentfulMerchConnectionGroupArgs = {
  field: ContentfulMerchFieldsEnum;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulMerchConnectionMaxArgs = {
  field: ContentfulMerchFieldsEnum;
};


export type ContentfulMerchConnectionMinArgs = {
  field: ContentfulMerchFieldsEnum;
};


export type ContentfulMerchConnectionSumArgs = {
  field: ContentfulMerchFieldsEnum;
};

export type ContentfulMerchEdge = {
  __typename?: 'ContentfulMerchEdge';
  next?: Maybe<ContentfulMerch>;
  node: ContentfulMerch;
  previous?: Maybe<ContentfulMerch>;
};

export enum ContentfulMerchFieldsEnum {
  ChildContentfulMerchDescriptionTextNodeChildren = 'childContentfulMerchDescriptionTextNode___children',
  ChildContentfulMerchDescriptionTextNodeChildrenChildren = 'childContentfulMerchDescriptionTextNode___children___children',
  ChildContentfulMerchDescriptionTextNodeChildrenChildrenChildren = 'childContentfulMerchDescriptionTextNode___children___children___children',
  ChildContentfulMerchDescriptionTextNodeChildrenChildrenId = 'childContentfulMerchDescriptionTextNode___children___children___id',
  ChildContentfulMerchDescriptionTextNodeChildrenId = 'childContentfulMerchDescriptionTextNode___children___id',
  ChildContentfulMerchDescriptionTextNodeChildrenInternalContent = 'childContentfulMerchDescriptionTextNode___children___internal___content',
  ChildContentfulMerchDescriptionTextNodeChildrenInternalContentDigest = 'childContentfulMerchDescriptionTextNode___children___internal___contentDigest',
  ChildContentfulMerchDescriptionTextNodeChildrenInternalContentFilePath = 'childContentfulMerchDescriptionTextNode___children___internal___contentFilePath',
  ChildContentfulMerchDescriptionTextNodeChildrenInternalDescription = 'childContentfulMerchDescriptionTextNode___children___internal___description',
  ChildContentfulMerchDescriptionTextNodeChildrenInternalFieldOwners = 'childContentfulMerchDescriptionTextNode___children___internal___fieldOwners',
  ChildContentfulMerchDescriptionTextNodeChildrenInternalIgnoreType = 'childContentfulMerchDescriptionTextNode___children___internal___ignoreType',
  ChildContentfulMerchDescriptionTextNodeChildrenInternalMediaType = 'childContentfulMerchDescriptionTextNode___children___internal___mediaType',
  ChildContentfulMerchDescriptionTextNodeChildrenInternalOwner = 'childContentfulMerchDescriptionTextNode___children___internal___owner',
  ChildContentfulMerchDescriptionTextNodeChildrenInternalType = 'childContentfulMerchDescriptionTextNode___children___internal___type',
  ChildContentfulMerchDescriptionTextNodeChildrenParentChildren = 'childContentfulMerchDescriptionTextNode___children___parent___children',
  ChildContentfulMerchDescriptionTextNodeChildrenParentId = 'childContentfulMerchDescriptionTextNode___children___parent___id',
  ChildContentfulMerchDescriptionTextNodeDescription = 'childContentfulMerchDescriptionTextNode___description',
  ChildContentfulMerchDescriptionTextNodeId = 'childContentfulMerchDescriptionTextNode___id',
  ChildContentfulMerchDescriptionTextNodeInternalContent = 'childContentfulMerchDescriptionTextNode___internal___content',
  ChildContentfulMerchDescriptionTextNodeInternalContentDigest = 'childContentfulMerchDescriptionTextNode___internal___contentDigest',
  ChildContentfulMerchDescriptionTextNodeInternalContentFilePath = 'childContentfulMerchDescriptionTextNode___internal___contentFilePath',
  ChildContentfulMerchDescriptionTextNodeInternalDescription = 'childContentfulMerchDescriptionTextNode___internal___description',
  ChildContentfulMerchDescriptionTextNodeInternalFieldOwners = 'childContentfulMerchDescriptionTextNode___internal___fieldOwners',
  ChildContentfulMerchDescriptionTextNodeInternalIgnoreType = 'childContentfulMerchDescriptionTextNode___internal___ignoreType',
  ChildContentfulMerchDescriptionTextNodeInternalMediaType = 'childContentfulMerchDescriptionTextNode___internal___mediaType',
  ChildContentfulMerchDescriptionTextNodeInternalOwner = 'childContentfulMerchDescriptionTextNode___internal___owner',
  ChildContentfulMerchDescriptionTextNodeInternalType = 'childContentfulMerchDescriptionTextNode___internal___type',
  ChildContentfulMerchDescriptionTextNodeParentChildren = 'childContentfulMerchDescriptionTextNode___parent___children',
  ChildContentfulMerchDescriptionTextNodeParentChildrenChildren = 'childContentfulMerchDescriptionTextNode___parent___children___children',
  ChildContentfulMerchDescriptionTextNodeParentChildrenId = 'childContentfulMerchDescriptionTextNode___parent___children___id',
  ChildContentfulMerchDescriptionTextNodeParentId = 'childContentfulMerchDescriptionTextNode___parent___id',
  ChildContentfulMerchDescriptionTextNodeParentInternalContent = 'childContentfulMerchDescriptionTextNode___parent___internal___content',
  ChildContentfulMerchDescriptionTextNodeParentInternalContentDigest = 'childContentfulMerchDescriptionTextNode___parent___internal___contentDigest',
  ChildContentfulMerchDescriptionTextNodeParentInternalContentFilePath = 'childContentfulMerchDescriptionTextNode___parent___internal___contentFilePath',
  ChildContentfulMerchDescriptionTextNodeParentInternalDescription = 'childContentfulMerchDescriptionTextNode___parent___internal___description',
  ChildContentfulMerchDescriptionTextNodeParentInternalFieldOwners = 'childContentfulMerchDescriptionTextNode___parent___internal___fieldOwners',
  ChildContentfulMerchDescriptionTextNodeParentInternalIgnoreType = 'childContentfulMerchDescriptionTextNode___parent___internal___ignoreType',
  ChildContentfulMerchDescriptionTextNodeParentInternalMediaType = 'childContentfulMerchDescriptionTextNode___parent___internal___mediaType',
  ChildContentfulMerchDescriptionTextNodeParentInternalOwner = 'childContentfulMerchDescriptionTextNode___parent___internal___owner',
  ChildContentfulMerchDescriptionTextNodeParentInternalType = 'childContentfulMerchDescriptionTextNode___parent___internal___type',
  ChildContentfulMerchDescriptionTextNodeParentParentChildren = 'childContentfulMerchDescriptionTextNode___parent___parent___children',
  ChildContentfulMerchDescriptionTextNodeParentParentId = 'childContentfulMerchDescriptionTextNode___parent___parent___id',
  ChildContentfulMerchDescriptionTextNodeSysType = 'childContentfulMerchDescriptionTextNode___sys___type',
  Children = 'children',
  ChildrenContentfulMerchDescriptionTextNode = 'childrenContentfulMerchDescriptionTextNode',
  ChildrenContentfulMerchDescriptionTextNodeChildren = 'childrenContentfulMerchDescriptionTextNode___children',
  ChildrenContentfulMerchDescriptionTextNodeChildrenChildren = 'childrenContentfulMerchDescriptionTextNode___children___children',
  ChildrenContentfulMerchDescriptionTextNodeChildrenChildrenChildren = 'childrenContentfulMerchDescriptionTextNode___children___children___children',
  ChildrenContentfulMerchDescriptionTextNodeChildrenChildrenId = 'childrenContentfulMerchDescriptionTextNode___children___children___id',
  ChildrenContentfulMerchDescriptionTextNodeChildrenId = 'childrenContentfulMerchDescriptionTextNode___children___id',
  ChildrenContentfulMerchDescriptionTextNodeChildrenInternalContent = 'childrenContentfulMerchDescriptionTextNode___children___internal___content',
  ChildrenContentfulMerchDescriptionTextNodeChildrenInternalContentDigest = 'childrenContentfulMerchDescriptionTextNode___children___internal___contentDigest',
  ChildrenContentfulMerchDescriptionTextNodeChildrenInternalContentFilePath = 'childrenContentfulMerchDescriptionTextNode___children___internal___contentFilePath',
  ChildrenContentfulMerchDescriptionTextNodeChildrenInternalDescription = 'childrenContentfulMerchDescriptionTextNode___children___internal___description',
  ChildrenContentfulMerchDescriptionTextNodeChildrenInternalFieldOwners = 'childrenContentfulMerchDescriptionTextNode___children___internal___fieldOwners',
  ChildrenContentfulMerchDescriptionTextNodeChildrenInternalIgnoreType = 'childrenContentfulMerchDescriptionTextNode___children___internal___ignoreType',
  ChildrenContentfulMerchDescriptionTextNodeChildrenInternalMediaType = 'childrenContentfulMerchDescriptionTextNode___children___internal___mediaType',
  ChildrenContentfulMerchDescriptionTextNodeChildrenInternalOwner = 'childrenContentfulMerchDescriptionTextNode___children___internal___owner',
  ChildrenContentfulMerchDescriptionTextNodeChildrenInternalType = 'childrenContentfulMerchDescriptionTextNode___children___internal___type',
  ChildrenContentfulMerchDescriptionTextNodeChildrenParentChildren = 'childrenContentfulMerchDescriptionTextNode___children___parent___children',
  ChildrenContentfulMerchDescriptionTextNodeChildrenParentId = 'childrenContentfulMerchDescriptionTextNode___children___parent___id',
  ChildrenContentfulMerchDescriptionTextNodeDescription = 'childrenContentfulMerchDescriptionTextNode___description',
  ChildrenContentfulMerchDescriptionTextNodeId = 'childrenContentfulMerchDescriptionTextNode___id',
  ChildrenContentfulMerchDescriptionTextNodeInternalContent = 'childrenContentfulMerchDescriptionTextNode___internal___content',
  ChildrenContentfulMerchDescriptionTextNodeInternalContentDigest = 'childrenContentfulMerchDescriptionTextNode___internal___contentDigest',
  ChildrenContentfulMerchDescriptionTextNodeInternalContentFilePath = 'childrenContentfulMerchDescriptionTextNode___internal___contentFilePath',
  ChildrenContentfulMerchDescriptionTextNodeInternalDescription = 'childrenContentfulMerchDescriptionTextNode___internal___description',
  ChildrenContentfulMerchDescriptionTextNodeInternalFieldOwners = 'childrenContentfulMerchDescriptionTextNode___internal___fieldOwners',
  ChildrenContentfulMerchDescriptionTextNodeInternalIgnoreType = 'childrenContentfulMerchDescriptionTextNode___internal___ignoreType',
  ChildrenContentfulMerchDescriptionTextNodeInternalMediaType = 'childrenContentfulMerchDescriptionTextNode___internal___mediaType',
  ChildrenContentfulMerchDescriptionTextNodeInternalOwner = 'childrenContentfulMerchDescriptionTextNode___internal___owner',
  ChildrenContentfulMerchDescriptionTextNodeInternalType = 'childrenContentfulMerchDescriptionTextNode___internal___type',
  ChildrenContentfulMerchDescriptionTextNodeParentChildren = 'childrenContentfulMerchDescriptionTextNode___parent___children',
  ChildrenContentfulMerchDescriptionTextNodeParentChildrenChildren = 'childrenContentfulMerchDescriptionTextNode___parent___children___children',
  ChildrenContentfulMerchDescriptionTextNodeParentChildrenId = 'childrenContentfulMerchDescriptionTextNode___parent___children___id',
  ChildrenContentfulMerchDescriptionTextNodeParentId = 'childrenContentfulMerchDescriptionTextNode___parent___id',
  ChildrenContentfulMerchDescriptionTextNodeParentInternalContent = 'childrenContentfulMerchDescriptionTextNode___parent___internal___content',
  ChildrenContentfulMerchDescriptionTextNodeParentInternalContentDigest = 'childrenContentfulMerchDescriptionTextNode___parent___internal___contentDigest',
  ChildrenContentfulMerchDescriptionTextNodeParentInternalContentFilePath = 'childrenContentfulMerchDescriptionTextNode___parent___internal___contentFilePath',
  ChildrenContentfulMerchDescriptionTextNodeParentInternalDescription = 'childrenContentfulMerchDescriptionTextNode___parent___internal___description',
  ChildrenContentfulMerchDescriptionTextNodeParentInternalFieldOwners = 'childrenContentfulMerchDescriptionTextNode___parent___internal___fieldOwners',
  ChildrenContentfulMerchDescriptionTextNodeParentInternalIgnoreType = 'childrenContentfulMerchDescriptionTextNode___parent___internal___ignoreType',
  ChildrenContentfulMerchDescriptionTextNodeParentInternalMediaType = 'childrenContentfulMerchDescriptionTextNode___parent___internal___mediaType',
  ChildrenContentfulMerchDescriptionTextNodeParentInternalOwner = 'childrenContentfulMerchDescriptionTextNode___parent___internal___owner',
  ChildrenContentfulMerchDescriptionTextNodeParentInternalType = 'childrenContentfulMerchDescriptionTextNode___parent___internal___type',
  ChildrenContentfulMerchDescriptionTextNodeParentParentChildren = 'childrenContentfulMerchDescriptionTextNode___parent___parent___children',
  ChildrenContentfulMerchDescriptionTextNodeParentParentId = 'childrenContentfulMerchDescriptionTextNode___parent___parent___id',
  ChildrenContentfulMerchDescriptionTextNodeSysType = 'childrenContentfulMerchDescriptionTextNode___sys___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalContentFilePath = 'children___children___internal___contentFilePath',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalContentFilePath = 'children___internal___contentFilePath',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalContentFilePath = 'children___parent___internal___contentFilePath',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  DescriptionChildren = 'description___children',
  DescriptionChildrenChildren = 'description___children___children',
  DescriptionChildrenChildrenChildren = 'description___children___children___children',
  DescriptionChildrenChildrenId = 'description___children___children___id',
  DescriptionChildrenId = 'description___children___id',
  DescriptionChildrenInternalContent = 'description___children___internal___content',
  DescriptionChildrenInternalContentDigest = 'description___children___internal___contentDigest',
  DescriptionChildrenInternalContentFilePath = 'description___children___internal___contentFilePath',
  DescriptionChildrenInternalDescription = 'description___children___internal___description',
  DescriptionChildrenInternalFieldOwners = 'description___children___internal___fieldOwners',
  DescriptionChildrenInternalIgnoreType = 'description___children___internal___ignoreType',
  DescriptionChildrenInternalMediaType = 'description___children___internal___mediaType',
  DescriptionChildrenInternalOwner = 'description___children___internal___owner',
  DescriptionChildrenInternalType = 'description___children___internal___type',
  DescriptionChildrenParentChildren = 'description___children___parent___children',
  DescriptionChildrenParentId = 'description___children___parent___id',
  DescriptionDescription = 'description___description',
  DescriptionId = 'description___id',
  DescriptionInternalContent = 'description___internal___content',
  DescriptionInternalContentDigest = 'description___internal___contentDigest',
  DescriptionInternalContentFilePath = 'description___internal___contentFilePath',
  DescriptionInternalDescription = 'description___internal___description',
  DescriptionInternalFieldOwners = 'description___internal___fieldOwners',
  DescriptionInternalIgnoreType = 'description___internal___ignoreType',
  DescriptionInternalMediaType = 'description___internal___mediaType',
  DescriptionInternalOwner = 'description___internal___owner',
  DescriptionInternalType = 'description___internal___type',
  DescriptionParentChildren = 'description___parent___children',
  DescriptionParentChildrenChildren = 'description___parent___children___children',
  DescriptionParentChildrenId = 'description___parent___children___id',
  DescriptionParentId = 'description___parent___id',
  DescriptionParentInternalContent = 'description___parent___internal___content',
  DescriptionParentInternalContentDigest = 'description___parent___internal___contentDigest',
  DescriptionParentInternalContentFilePath = 'description___parent___internal___contentFilePath',
  DescriptionParentInternalDescription = 'description___parent___internal___description',
  DescriptionParentInternalFieldOwners = 'description___parent___internal___fieldOwners',
  DescriptionParentInternalIgnoreType = 'description___parent___internal___ignoreType',
  DescriptionParentInternalMediaType = 'description___parent___internal___mediaType',
  DescriptionParentInternalOwner = 'description___parent___internal___owner',
  DescriptionParentInternalType = 'description___parent___internal___type',
  DescriptionParentParentChildren = 'description___parent___parent___children',
  DescriptionParentParentId = 'description___parent___parent___id',
  DescriptionSysType = 'description___sys___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  GatsbyPath = 'gatsbyPath',
  Id = 'id',
  ImageChildren = 'image___children',
  ImageChildrenChildren = 'image___children___children',
  ImageChildrenChildrenChildren = 'image___children___children___children',
  ImageChildrenChildrenId = 'image___children___children___id',
  ImageChildrenId = 'image___children___id',
  ImageChildrenInternalContent = 'image___children___internal___content',
  ImageChildrenInternalContentDigest = 'image___children___internal___contentDigest',
  ImageChildrenInternalContentFilePath = 'image___children___internal___contentFilePath',
  ImageChildrenInternalDescription = 'image___children___internal___description',
  ImageChildrenInternalFieldOwners = 'image___children___internal___fieldOwners',
  ImageChildrenInternalIgnoreType = 'image___children___internal___ignoreType',
  ImageChildrenInternalMediaType = 'image___children___internal___mediaType',
  ImageChildrenInternalOwner = 'image___children___internal___owner',
  ImageChildrenInternalType = 'image___children___internal___type',
  ImageChildrenParentChildren = 'image___children___parent___children',
  ImageChildrenParentId = 'image___children___parent___id',
  ImageContentfulId = 'image___contentful_id',
  ImageCreatedAt = 'image___createdAt',
  ImageDescription = 'image___description',
  ImageFileContentType = 'image___file___contentType',
  ImageFileDetailsSize = 'image___file___details___size',
  ImageFileFileName = 'image___file___fileName',
  ImageFileUrl = 'image___file___url',
  ImageFilename = 'image___filename',
  ImageFilesize = 'image___filesize',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ImageGatsbyImage = 'image___gatsbyImage',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ImageGatsbyImageData = 'image___gatsbyImageData',
  ImageHeight = 'image___height',
  ImageId = 'image___id',
  ImageInternalContent = 'image___internal___content',
  ImageInternalContentDigest = 'image___internal___contentDigest',
  ImageInternalContentFilePath = 'image___internal___contentFilePath',
  ImageInternalDescription = 'image___internal___description',
  ImageInternalFieldOwners = 'image___internal___fieldOwners',
  ImageInternalIgnoreType = 'image___internal___ignoreType',
  ImageInternalMediaType = 'image___internal___mediaType',
  ImageInternalOwner = 'image___internal___owner',
  ImageInternalType = 'image___internal___type',
  ImageMimeType = 'image___mimeType',
  ImageNodeLocale = 'image___node_locale',
  ImageParentChildren = 'image___parent___children',
  ImageParentChildrenChildren = 'image___parent___children___children',
  ImageParentChildrenId = 'image___parent___children___id',
  ImageParentId = 'image___parent___id',
  ImageParentInternalContent = 'image___parent___internal___content',
  ImageParentInternalContentDigest = 'image___parent___internal___contentDigest',
  ImageParentInternalContentFilePath = 'image___parent___internal___contentFilePath',
  ImageParentInternalDescription = 'image___parent___internal___description',
  ImageParentInternalFieldOwners = 'image___parent___internal___fieldOwners',
  ImageParentInternalIgnoreType = 'image___parent___internal___ignoreType',
  ImageParentInternalMediaType = 'image___parent___internal___mediaType',
  ImageParentInternalOwner = 'image___parent___internal___owner',
  ImageParentInternalType = 'image___parent___internal___type',
  ImageParentParentChildren = 'image___parent___parent___children',
  ImageParentParentId = 'image___parent___parent___id',
  ImagePlaceholderUrl = 'image___placeholderUrl',
  ImagePublicUrl = 'image___publicUrl',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ImageResizeHeight = 'image___resize___height',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ImageResizeSrc = 'image___resize___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ImageResizeWidth = 'image___resize___width',
  ImageSize = 'image___size',
  ImageSpaceId = 'image___spaceId',
  ImageSysRevision = 'image___sys___revision',
  ImageSysType = 'image___sys___type',
  ImageTitle = 'image___title',
  ImageUpdatedAt = 'image___updatedAt',
  ImageUrl = 'image___url',
  ImageWidth = 'image___width',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalContentFilePath = 'internal___contentFilePath',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  NodeLocale = 'node_locale',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalContentFilePath = 'parent___children___internal___contentFilePath',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalContentFilePath = 'parent___internal___contentFilePath',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalContentFilePath = 'parent___parent___internal___contentFilePath',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  Price = 'price',
  SpaceId = 'spaceId',
  SysContentTypeSysId = 'sys___contentType___sys___id',
  SysContentTypeSysLinkType = 'sys___contentType___sys___linkType',
  SysContentTypeSysType = 'sys___contentType___sys___type',
  SysRevision = 'sys___revision',
  SysType = 'sys___type',
  Title = 'title',
  UpdatedAt = 'updatedAt'
}

export type ContentfulMerchFilterInput = {
  childContentfulMerchDescriptionTextNode?: InputMaybe<ContentfulMerchDescriptionTextNodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  childrenContentfulMerchDescriptionTextNode?: InputMaybe<ContentfulMerchDescriptionTextNodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  description?: InputMaybe<ContentfulMerchDescriptionTextNodeFilterInput>;
  gatsbyPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  image?: InputMaybe<ContentfulAssetFilterInput>;
  internal?: InputMaybe<InternalFilterInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  price?: InputMaybe<FloatQueryOperatorInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulMerchSysFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
};

export type ContentfulMerchGroupConnection = {
  __typename?: 'ContentfulMerchGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<ContentfulMerchEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<ContentfulMerchGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<ContentfulMerch>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type ContentfulMerchGroupConnectionDistinctArgs = {
  field: ContentfulMerchFieldsEnum;
};


export type ContentfulMerchGroupConnectionGroupArgs = {
  field: ContentfulMerchFieldsEnum;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulMerchGroupConnectionMaxArgs = {
  field: ContentfulMerchFieldsEnum;
};


export type ContentfulMerchGroupConnectionMinArgs = {
  field: ContentfulMerchFieldsEnum;
};


export type ContentfulMerchGroupConnectionSumArgs = {
  field: ContentfulMerchFieldsEnum;
};

export type ContentfulMerchSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulMerchFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulMerchSys = {
  __typename?: 'ContentfulMerchSys';
  contentType?: Maybe<ContentfulMerchSysContentType>;
  revision?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ContentfulMerchSysContentType = {
  __typename?: 'ContentfulMerchSysContentType';
  sys?: Maybe<ContentfulMerchSysContentTypeSys>;
};

export type ContentfulMerchSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulMerchSysContentTypeSysFilterInput>;
};

export type ContentfulMerchSysContentTypeSys = {
  __typename?: 'ContentfulMerchSysContentTypeSys';
  id?: Maybe<Scalars['String']['output']>;
  linkType?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ContentfulMerchSysContentTypeSysFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulMerchSysFilterInput = {
  contentType?: InputMaybe<ContentfulMerchSysContentTypeFilterInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulNavigation = ContentfulEntry & ContentfulReference & Node & {
  __typename?: 'ContentfulNavigation';
  children: Array<Node>;
  contentful_id: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  internal: Internal;
  items?: Maybe<Array<Maybe<ContentfulNavigationItem>>>;
  node_locale: Scalars['String']['output'];
  parent?: Maybe<Node>;
  spaceId?: Maybe<Scalars['String']['output']>;
  sys?: Maybe<ContentfulNavigationSys>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};


export type ContentfulNavigationCreatedAtArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type ContentfulNavigationUpdatedAtArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ContentfulNavigationConnection = {
  __typename?: 'ContentfulNavigationConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<ContentfulNavigationEdge>;
  group: Array<ContentfulNavigationGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<ContentfulNavigation>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type ContentfulNavigationConnectionDistinctArgs = {
  field: ContentfulNavigationFieldsEnum;
};


export type ContentfulNavigationConnectionGroupArgs = {
  field: ContentfulNavigationFieldsEnum;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulNavigationConnectionMaxArgs = {
  field: ContentfulNavigationFieldsEnum;
};


export type ContentfulNavigationConnectionMinArgs = {
  field: ContentfulNavigationFieldsEnum;
};


export type ContentfulNavigationConnectionSumArgs = {
  field: ContentfulNavigationFieldsEnum;
};

export type ContentfulNavigationEdge = {
  __typename?: 'ContentfulNavigationEdge';
  next?: Maybe<ContentfulNavigation>;
  node: ContentfulNavigation;
  previous?: Maybe<ContentfulNavigation>;
};

export enum ContentfulNavigationFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalContentFilePath = 'children___children___internal___contentFilePath',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalContentFilePath = 'children___internal___contentFilePath',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalContentFilePath = 'children___parent___internal___contentFilePath',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalContentFilePath = 'internal___contentFilePath',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Items = 'items',
  ItemsChildren = 'items___children',
  ItemsChildrenChildren = 'items___children___children',
  ItemsChildrenChildrenChildren = 'items___children___children___children',
  ItemsChildrenChildrenId = 'items___children___children___id',
  ItemsChildrenId = 'items___children___id',
  ItemsChildrenInternalContent = 'items___children___internal___content',
  ItemsChildrenInternalContentDigest = 'items___children___internal___contentDigest',
  ItemsChildrenInternalContentFilePath = 'items___children___internal___contentFilePath',
  ItemsChildrenInternalDescription = 'items___children___internal___description',
  ItemsChildrenInternalFieldOwners = 'items___children___internal___fieldOwners',
  ItemsChildrenInternalIgnoreType = 'items___children___internal___ignoreType',
  ItemsChildrenInternalMediaType = 'items___children___internal___mediaType',
  ItemsChildrenInternalOwner = 'items___children___internal___owner',
  ItemsChildrenInternalType = 'items___children___internal___type',
  ItemsChildrenParentChildren = 'items___children___parent___children',
  ItemsChildrenParentId = 'items___children___parent___id',
  ItemsContentfulId = 'items___contentful_id',
  ItemsCreatedAt = 'items___createdAt',
  ItemsId = 'items___id',
  ItemsInternalContent = 'items___internal___content',
  ItemsInternalContentDigest = 'items___internal___contentDigest',
  ItemsInternalContentFilePath = 'items___internal___contentFilePath',
  ItemsInternalDescription = 'items___internal___description',
  ItemsInternalFieldOwners = 'items___internal___fieldOwners',
  ItemsInternalIgnoreType = 'items___internal___ignoreType',
  ItemsInternalMediaType = 'items___internal___mediaType',
  ItemsInternalOwner = 'items___internal___owner',
  ItemsInternalType = 'items___internal___type',
  ItemsNavigation = 'items___navigation',
  ItemsNavigationItems = 'items___navigationItems',
  ItemsNavigationItemsChildren = 'items___navigationItems___children',
  ItemsNavigationItemsChildrenChildren = 'items___navigationItems___children___children',
  ItemsNavigationItemsChildrenId = 'items___navigationItems___children___id',
  ItemsNavigationItemsContentfulId = 'items___navigationItems___contentful_id',
  ItemsNavigationItemsCreatedAt = 'items___navigationItems___createdAt',
  ItemsNavigationItemsId = 'items___navigationItems___id',
  ItemsNavigationItemsInternalContent = 'items___navigationItems___internal___content',
  ItemsNavigationItemsInternalContentDigest = 'items___navigationItems___internal___contentDigest',
  ItemsNavigationItemsInternalContentFilePath = 'items___navigationItems___internal___contentFilePath',
  ItemsNavigationItemsInternalDescription = 'items___navigationItems___internal___description',
  ItemsNavigationItemsInternalFieldOwners = 'items___navigationItems___internal___fieldOwners',
  ItemsNavigationItemsInternalIgnoreType = 'items___navigationItems___internal___ignoreType',
  ItemsNavigationItemsInternalMediaType = 'items___navigationItems___internal___mediaType',
  ItemsNavigationItemsInternalOwner = 'items___navigationItems___internal___owner',
  ItemsNavigationItemsInternalType = 'items___navigationItems___internal___type',
  ItemsNavigationItemsNavigation = 'items___navigationItems___navigation',
  ItemsNavigationItemsNavigationItems = 'items___navigationItems___navigationItems',
  ItemsNavigationItemsNavigationItemsChildren = 'items___navigationItems___navigationItems___children',
  ItemsNavigationItemsNavigationItemsContentfulId = 'items___navigationItems___navigationItems___contentful_id',
  ItemsNavigationItemsNavigationItemsCreatedAt = 'items___navigationItems___navigationItems___createdAt',
  ItemsNavigationItemsNavigationItemsId = 'items___navigationItems___navigationItems___id',
  ItemsNavigationItemsNavigationItemsNavigation = 'items___navigationItems___navigationItems___navigation',
  ItemsNavigationItemsNavigationItemsNavigationItems = 'items___navigationItems___navigationItems___navigationItems',
  ItemsNavigationItemsNavigationItemsNavigationitem = 'items___navigationItems___navigationItems___navigationitem',
  ItemsNavigationItemsNavigationItemsNodeLocale = 'items___navigationItems___navigationItems___node_locale',
  ItemsNavigationItemsNavigationItemsSpaceId = 'items___navigationItems___navigationItems___spaceId',
  ItemsNavigationItemsNavigationItemsTitle = 'items___navigationItems___navigationItems___title',
  ItemsNavigationItemsNavigationItemsUpdatedAt = 'items___navigationItems___navigationItems___updatedAt',
  ItemsNavigationItemsNavigationItemsUrl = 'items___navigationItems___navigationItems___url',
  ItemsNavigationItemsNavigationChildren = 'items___navigationItems___navigation___children',
  ItemsNavigationItemsNavigationContentfulId = 'items___navigationItems___navigation___contentful_id',
  ItemsNavigationItemsNavigationCreatedAt = 'items___navigationItems___navigation___createdAt',
  ItemsNavigationItemsNavigationId = 'items___navigationItems___navigation___id',
  ItemsNavigationItemsNavigationItems = 'items___navigationItems___navigation___items',
  ItemsNavigationItemsNavigationNodeLocale = 'items___navigationItems___navigation___node_locale',
  ItemsNavigationItemsNavigationSpaceId = 'items___navigationItems___navigation___spaceId',
  ItemsNavigationItemsNavigationTitle = 'items___navigationItems___navigation___title',
  ItemsNavigationItemsNavigationUpdatedAt = 'items___navigationItems___navigation___updatedAt',
  ItemsNavigationItemsNavigationitem = 'items___navigationItems___navigationitem',
  ItemsNavigationItemsNavigationitemChildren = 'items___navigationItems___navigationitem___children',
  ItemsNavigationItemsNavigationitemContentfulId = 'items___navigationItems___navigationitem___contentful_id',
  ItemsNavigationItemsNavigationitemCreatedAt = 'items___navigationItems___navigationitem___createdAt',
  ItemsNavigationItemsNavigationitemId = 'items___navigationItems___navigationitem___id',
  ItemsNavigationItemsNavigationitemNavigation = 'items___navigationItems___navigationitem___navigation',
  ItemsNavigationItemsNavigationitemNavigationItems = 'items___navigationItems___navigationitem___navigationItems',
  ItemsNavigationItemsNavigationitemNavigationitem = 'items___navigationItems___navigationitem___navigationitem',
  ItemsNavigationItemsNavigationitemNodeLocale = 'items___navigationItems___navigationitem___node_locale',
  ItemsNavigationItemsNavigationitemSpaceId = 'items___navigationItems___navigationitem___spaceId',
  ItemsNavigationItemsNavigationitemTitle = 'items___navigationItems___navigationitem___title',
  ItemsNavigationItemsNavigationitemUpdatedAt = 'items___navigationItems___navigationitem___updatedAt',
  ItemsNavigationItemsNavigationitemUrl = 'items___navigationItems___navigationitem___url',
  ItemsNavigationItemsNodeLocale = 'items___navigationItems___node_locale',
  ItemsNavigationItemsParentChildren = 'items___navigationItems___parent___children',
  ItemsNavigationItemsParentId = 'items___navigationItems___parent___id',
  ItemsNavigationItemsSpaceId = 'items___navigationItems___spaceId',
  ItemsNavigationItemsSysRevision = 'items___navigationItems___sys___revision',
  ItemsNavigationItemsSysType = 'items___navigationItems___sys___type',
  ItemsNavigationItemsTitle = 'items___navigationItems___title',
  ItemsNavigationItemsUpdatedAt = 'items___navigationItems___updatedAt',
  ItemsNavigationItemsUrl = 'items___navigationItems___url',
  ItemsNavigationChildren = 'items___navigation___children',
  ItemsNavigationChildrenChildren = 'items___navigation___children___children',
  ItemsNavigationChildrenId = 'items___navigation___children___id',
  ItemsNavigationContentfulId = 'items___navigation___contentful_id',
  ItemsNavigationCreatedAt = 'items___navigation___createdAt',
  ItemsNavigationId = 'items___navigation___id',
  ItemsNavigationInternalContent = 'items___navigation___internal___content',
  ItemsNavigationInternalContentDigest = 'items___navigation___internal___contentDigest',
  ItemsNavigationInternalContentFilePath = 'items___navigation___internal___contentFilePath',
  ItemsNavigationInternalDescription = 'items___navigation___internal___description',
  ItemsNavigationInternalFieldOwners = 'items___navigation___internal___fieldOwners',
  ItemsNavigationInternalIgnoreType = 'items___navigation___internal___ignoreType',
  ItemsNavigationInternalMediaType = 'items___navigation___internal___mediaType',
  ItemsNavigationInternalOwner = 'items___navigation___internal___owner',
  ItemsNavigationInternalType = 'items___navigation___internal___type',
  ItemsNavigationItems = 'items___navigation___items',
  ItemsNavigationItemsChildren = 'items___navigation___items___children',
  ItemsNavigationItemsContentfulId = 'items___navigation___items___contentful_id',
  ItemsNavigationItemsCreatedAt = 'items___navigation___items___createdAt',
  ItemsNavigationItemsId = 'items___navigation___items___id',
  ItemsNavigationItemsNavigation = 'items___navigation___items___navigation',
  ItemsNavigationItemsNavigationItems = 'items___navigation___items___navigationItems',
  ItemsNavigationItemsNavigationitem = 'items___navigation___items___navigationitem',
  ItemsNavigationItemsNodeLocale = 'items___navigation___items___node_locale',
  ItemsNavigationItemsSpaceId = 'items___navigation___items___spaceId',
  ItemsNavigationItemsTitle = 'items___navigation___items___title',
  ItemsNavigationItemsUpdatedAt = 'items___navigation___items___updatedAt',
  ItemsNavigationItemsUrl = 'items___navigation___items___url',
  ItemsNavigationNodeLocale = 'items___navigation___node_locale',
  ItemsNavigationParentChildren = 'items___navigation___parent___children',
  ItemsNavigationParentId = 'items___navigation___parent___id',
  ItemsNavigationSpaceId = 'items___navigation___spaceId',
  ItemsNavigationSysRevision = 'items___navigation___sys___revision',
  ItemsNavigationSysType = 'items___navigation___sys___type',
  ItemsNavigationTitle = 'items___navigation___title',
  ItemsNavigationUpdatedAt = 'items___navigation___updatedAt',
  ItemsNavigationitem = 'items___navigationitem',
  ItemsNavigationitemChildren = 'items___navigationitem___children',
  ItemsNavigationitemChildrenChildren = 'items___navigationitem___children___children',
  ItemsNavigationitemChildrenId = 'items___navigationitem___children___id',
  ItemsNavigationitemContentfulId = 'items___navigationitem___contentful_id',
  ItemsNavigationitemCreatedAt = 'items___navigationitem___createdAt',
  ItemsNavigationitemId = 'items___navigationitem___id',
  ItemsNavigationitemInternalContent = 'items___navigationitem___internal___content',
  ItemsNavigationitemInternalContentDigest = 'items___navigationitem___internal___contentDigest',
  ItemsNavigationitemInternalContentFilePath = 'items___navigationitem___internal___contentFilePath',
  ItemsNavigationitemInternalDescription = 'items___navigationitem___internal___description',
  ItemsNavigationitemInternalFieldOwners = 'items___navigationitem___internal___fieldOwners',
  ItemsNavigationitemInternalIgnoreType = 'items___navigationitem___internal___ignoreType',
  ItemsNavigationitemInternalMediaType = 'items___navigationitem___internal___mediaType',
  ItemsNavigationitemInternalOwner = 'items___navigationitem___internal___owner',
  ItemsNavigationitemInternalType = 'items___navigationitem___internal___type',
  ItemsNavigationitemNavigation = 'items___navigationitem___navigation',
  ItemsNavigationitemNavigationItems = 'items___navigationitem___navigationItems',
  ItemsNavigationitemNavigationItemsChildren = 'items___navigationitem___navigationItems___children',
  ItemsNavigationitemNavigationItemsContentfulId = 'items___navigationitem___navigationItems___contentful_id',
  ItemsNavigationitemNavigationItemsCreatedAt = 'items___navigationitem___navigationItems___createdAt',
  ItemsNavigationitemNavigationItemsId = 'items___navigationitem___navigationItems___id',
  ItemsNavigationitemNavigationItemsNavigation = 'items___navigationitem___navigationItems___navigation',
  ItemsNavigationitemNavigationItemsNavigationItems = 'items___navigationitem___navigationItems___navigationItems',
  ItemsNavigationitemNavigationItemsNavigationitem = 'items___navigationitem___navigationItems___navigationitem',
  ItemsNavigationitemNavigationItemsNodeLocale = 'items___navigationitem___navigationItems___node_locale',
  ItemsNavigationitemNavigationItemsSpaceId = 'items___navigationitem___navigationItems___spaceId',
  ItemsNavigationitemNavigationItemsTitle = 'items___navigationitem___navigationItems___title',
  ItemsNavigationitemNavigationItemsUpdatedAt = 'items___navigationitem___navigationItems___updatedAt',
  ItemsNavigationitemNavigationItemsUrl = 'items___navigationitem___navigationItems___url',
  ItemsNavigationitemNavigationChildren = 'items___navigationitem___navigation___children',
  ItemsNavigationitemNavigationContentfulId = 'items___navigationitem___navigation___contentful_id',
  ItemsNavigationitemNavigationCreatedAt = 'items___navigationitem___navigation___createdAt',
  ItemsNavigationitemNavigationId = 'items___navigationitem___navigation___id',
  ItemsNavigationitemNavigationItems = 'items___navigationitem___navigation___items',
  ItemsNavigationitemNavigationNodeLocale = 'items___navigationitem___navigation___node_locale',
  ItemsNavigationitemNavigationSpaceId = 'items___navigationitem___navigation___spaceId',
  ItemsNavigationitemNavigationTitle = 'items___navigationitem___navigation___title',
  ItemsNavigationitemNavigationUpdatedAt = 'items___navigationitem___navigation___updatedAt',
  ItemsNavigationitemNavigationitem = 'items___navigationitem___navigationitem',
  ItemsNavigationitemNavigationitemChildren = 'items___navigationitem___navigationitem___children',
  ItemsNavigationitemNavigationitemContentfulId = 'items___navigationitem___navigationitem___contentful_id',
  ItemsNavigationitemNavigationitemCreatedAt = 'items___navigationitem___navigationitem___createdAt',
  ItemsNavigationitemNavigationitemId = 'items___navigationitem___navigationitem___id',
  ItemsNavigationitemNavigationitemNavigation = 'items___navigationitem___navigationitem___navigation',
  ItemsNavigationitemNavigationitemNavigationItems = 'items___navigationitem___navigationitem___navigationItems',
  ItemsNavigationitemNavigationitemNavigationitem = 'items___navigationitem___navigationitem___navigationitem',
  ItemsNavigationitemNavigationitemNodeLocale = 'items___navigationitem___navigationitem___node_locale',
  ItemsNavigationitemNavigationitemSpaceId = 'items___navigationitem___navigationitem___spaceId',
  ItemsNavigationitemNavigationitemTitle = 'items___navigationitem___navigationitem___title',
  ItemsNavigationitemNavigationitemUpdatedAt = 'items___navigationitem___navigationitem___updatedAt',
  ItemsNavigationitemNavigationitemUrl = 'items___navigationitem___navigationitem___url',
  ItemsNavigationitemNodeLocale = 'items___navigationitem___node_locale',
  ItemsNavigationitemParentChildren = 'items___navigationitem___parent___children',
  ItemsNavigationitemParentId = 'items___navigationitem___parent___id',
  ItemsNavigationitemSpaceId = 'items___navigationitem___spaceId',
  ItemsNavigationitemSysRevision = 'items___navigationitem___sys___revision',
  ItemsNavigationitemSysType = 'items___navigationitem___sys___type',
  ItemsNavigationitemTitle = 'items___navigationitem___title',
  ItemsNavigationitemUpdatedAt = 'items___navigationitem___updatedAt',
  ItemsNavigationitemUrl = 'items___navigationitem___url',
  ItemsNodeLocale = 'items___node_locale',
  ItemsParentChildren = 'items___parent___children',
  ItemsParentChildrenChildren = 'items___parent___children___children',
  ItemsParentChildrenId = 'items___parent___children___id',
  ItemsParentId = 'items___parent___id',
  ItemsParentInternalContent = 'items___parent___internal___content',
  ItemsParentInternalContentDigest = 'items___parent___internal___contentDigest',
  ItemsParentInternalContentFilePath = 'items___parent___internal___contentFilePath',
  ItemsParentInternalDescription = 'items___parent___internal___description',
  ItemsParentInternalFieldOwners = 'items___parent___internal___fieldOwners',
  ItemsParentInternalIgnoreType = 'items___parent___internal___ignoreType',
  ItemsParentInternalMediaType = 'items___parent___internal___mediaType',
  ItemsParentInternalOwner = 'items___parent___internal___owner',
  ItemsParentInternalType = 'items___parent___internal___type',
  ItemsParentParentChildren = 'items___parent___parent___children',
  ItemsParentParentId = 'items___parent___parent___id',
  ItemsSpaceId = 'items___spaceId',
  ItemsSysRevision = 'items___sys___revision',
  ItemsSysType = 'items___sys___type',
  ItemsTitle = 'items___title',
  ItemsUpdatedAt = 'items___updatedAt',
  ItemsUrl = 'items___url',
  NodeLocale = 'node_locale',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalContentFilePath = 'parent___children___internal___contentFilePath',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalContentFilePath = 'parent___internal___contentFilePath',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalContentFilePath = 'parent___parent___internal___contentFilePath',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  SpaceId = 'spaceId',
  SysContentTypeSysId = 'sys___contentType___sys___id',
  SysContentTypeSysLinkType = 'sys___contentType___sys___linkType',
  SysContentTypeSysType = 'sys___contentType___sys___type',
  SysRevision = 'sys___revision',
  SysType = 'sys___type',
  Title = 'title',
  UpdatedAt = 'updatedAt'
}

export type ContentfulNavigationFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  items?: InputMaybe<ContentfulNavigationItemFilterListInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulNavigationSysFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
};

export type ContentfulNavigationFilterListInput = {
  elemMatch?: InputMaybe<ContentfulNavigationFilterInput>;
};

export type ContentfulNavigationGroupConnection = {
  __typename?: 'ContentfulNavigationGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<ContentfulNavigationEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<ContentfulNavigationGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<ContentfulNavigation>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type ContentfulNavigationGroupConnectionDistinctArgs = {
  field: ContentfulNavigationFieldsEnum;
};


export type ContentfulNavigationGroupConnectionGroupArgs = {
  field: ContentfulNavigationFieldsEnum;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulNavigationGroupConnectionMaxArgs = {
  field: ContentfulNavigationFieldsEnum;
};


export type ContentfulNavigationGroupConnectionMinArgs = {
  field: ContentfulNavigationFieldsEnum;
};


export type ContentfulNavigationGroupConnectionSumArgs = {
  field: ContentfulNavigationFieldsEnum;
};

export type ContentfulNavigationItem = ContentfulEntry & ContentfulReference & Node & {
  __typename?: 'ContentfulNavigationItem';
  children: Array<Node>;
  contentful_id: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  internal: Internal;
  navigation?: Maybe<Array<Maybe<ContentfulNavigation>>>;
  navigationItems?: Maybe<Array<Maybe<ContentfulNavigationItem>>>;
  navigationitem?: Maybe<Array<Maybe<ContentfulNavigationItem>>>;
  node_locale: Scalars['String']['output'];
  parent?: Maybe<Node>;
  spaceId?: Maybe<Scalars['String']['output']>;
  sys?: Maybe<ContentfulNavigationItemSys>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};


export type ContentfulNavigationItemCreatedAtArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type ContentfulNavigationItemUpdatedAtArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ContentfulNavigationItemConnection = {
  __typename?: 'ContentfulNavigationItemConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<ContentfulNavigationItemEdge>;
  group: Array<ContentfulNavigationItemGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<ContentfulNavigationItem>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type ContentfulNavigationItemConnectionDistinctArgs = {
  field: ContentfulNavigationItemFieldsEnum;
};


export type ContentfulNavigationItemConnectionGroupArgs = {
  field: ContentfulNavigationItemFieldsEnum;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulNavigationItemConnectionMaxArgs = {
  field: ContentfulNavigationItemFieldsEnum;
};


export type ContentfulNavigationItemConnectionMinArgs = {
  field: ContentfulNavigationItemFieldsEnum;
};


export type ContentfulNavigationItemConnectionSumArgs = {
  field: ContentfulNavigationItemFieldsEnum;
};

export type ContentfulNavigationItemEdge = {
  __typename?: 'ContentfulNavigationItemEdge';
  next?: Maybe<ContentfulNavigationItem>;
  node: ContentfulNavigationItem;
  previous?: Maybe<ContentfulNavigationItem>;
};

export enum ContentfulNavigationItemFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalContentFilePath = 'children___children___internal___contentFilePath',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalContentFilePath = 'children___internal___contentFilePath',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalContentFilePath = 'children___parent___internal___contentFilePath',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalContentFilePath = 'internal___contentFilePath',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Navigation = 'navigation',
  NavigationItems = 'navigationItems',
  NavigationItemsChildren = 'navigationItems___children',
  NavigationItemsChildrenChildren = 'navigationItems___children___children',
  NavigationItemsChildrenChildrenChildren = 'navigationItems___children___children___children',
  NavigationItemsChildrenChildrenId = 'navigationItems___children___children___id',
  NavigationItemsChildrenId = 'navigationItems___children___id',
  NavigationItemsChildrenInternalContent = 'navigationItems___children___internal___content',
  NavigationItemsChildrenInternalContentDigest = 'navigationItems___children___internal___contentDigest',
  NavigationItemsChildrenInternalContentFilePath = 'navigationItems___children___internal___contentFilePath',
  NavigationItemsChildrenInternalDescription = 'navigationItems___children___internal___description',
  NavigationItemsChildrenInternalFieldOwners = 'navigationItems___children___internal___fieldOwners',
  NavigationItemsChildrenInternalIgnoreType = 'navigationItems___children___internal___ignoreType',
  NavigationItemsChildrenInternalMediaType = 'navigationItems___children___internal___mediaType',
  NavigationItemsChildrenInternalOwner = 'navigationItems___children___internal___owner',
  NavigationItemsChildrenInternalType = 'navigationItems___children___internal___type',
  NavigationItemsChildrenParentChildren = 'navigationItems___children___parent___children',
  NavigationItemsChildrenParentId = 'navigationItems___children___parent___id',
  NavigationItemsContentfulId = 'navigationItems___contentful_id',
  NavigationItemsCreatedAt = 'navigationItems___createdAt',
  NavigationItemsId = 'navigationItems___id',
  NavigationItemsInternalContent = 'navigationItems___internal___content',
  NavigationItemsInternalContentDigest = 'navigationItems___internal___contentDigest',
  NavigationItemsInternalContentFilePath = 'navigationItems___internal___contentFilePath',
  NavigationItemsInternalDescription = 'navigationItems___internal___description',
  NavigationItemsInternalFieldOwners = 'navigationItems___internal___fieldOwners',
  NavigationItemsInternalIgnoreType = 'navigationItems___internal___ignoreType',
  NavigationItemsInternalMediaType = 'navigationItems___internal___mediaType',
  NavigationItemsInternalOwner = 'navigationItems___internal___owner',
  NavigationItemsInternalType = 'navigationItems___internal___type',
  NavigationItemsNavigation = 'navigationItems___navigation',
  NavigationItemsNavigationItems = 'navigationItems___navigationItems',
  NavigationItemsNavigationItemsChildren = 'navigationItems___navigationItems___children',
  NavigationItemsNavigationItemsChildrenChildren = 'navigationItems___navigationItems___children___children',
  NavigationItemsNavigationItemsChildrenId = 'navigationItems___navigationItems___children___id',
  NavigationItemsNavigationItemsContentfulId = 'navigationItems___navigationItems___contentful_id',
  NavigationItemsNavigationItemsCreatedAt = 'navigationItems___navigationItems___createdAt',
  NavigationItemsNavigationItemsId = 'navigationItems___navigationItems___id',
  NavigationItemsNavigationItemsInternalContent = 'navigationItems___navigationItems___internal___content',
  NavigationItemsNavigationItemsInternalContentDigest = 'navigationItems___navigationItems___internal___contentDigest',
  NavigationItemsNavigationItemsInternalContentFilePath = 'navigationItems___navigationItems___internal___contentFilePath',
  NavigationItemsNavigationItemsInternalDescription = 'navigationItems___navigationItems___internal___description',
  NavigationItemsNavigationItemsInternalFieldOwners = 'navigationItems___navigationItems___internal___fieldOwners',
  NavigationItemsNavigationItemsInternalIgnoreType = 'navigationItems___navigationItems___internal___ignoreType',
  NavigationItemsNavigationItemsInternalMediaType = 'navigationItems___navigationItems___internal___mediaType',
  NavigationItemsNavigationItemsInternalOwner = 'navigationItems___navigationItems___internal___owner',
  NavigationItemsNavigationItemsInternalType = 'navigationItems___navigationItems___internal___type',
  NavigationItemsNavigationItemsNavigation = 'navigationItems___navigationItems___navigation',
  NavigationItemsNavigationItemsNavigationItems = 'navigationItems___navigationItems___navigationItems',
  NavigationItemsNavigationItemsNavigationItemsChildren = 'navigationItems___navigationItems___navigationItems___children',
  NavigationItemsNavigationItemsNavigationItemsContentfulId = 'navigationItems___navigationItems___navigationItems___contentful_id',
  NavigationItemsNavigationItemsNavigationItemsCreatedAt = 'navigationItems___navigationItems___navigationItems___createdAt',
  NavigationItemsNavigationItemsNavigationItemsId = 'navigationItems___navigationItems___navigationItems___id',
  NavigationItemsNavigationItemsNavigationItemsNavigation = 'navigationItems___navigationItems___navigationItems___navigation',
  NavigationItemsNavigationItemsNavigationItemsNavigationItems = 'navigationItems___navigationItems___navigationItems___navigationItems',
  NavigationItemsNavigationItemsNavigationItemsNavigationitem = 'navigationItems___navigationItems___navigationItems___navigationitem',
  NavigationItemsNavigationItemsNavigationItemsNodeLocale = 'navigationItems___navigationItems___navigationItems___node_locale',
  NavigationItemsNavigationItemsNavigationItemsSpaceId = 'navigationItems___navigationItems___navigationItems___spaceId',
  NavigationItemsNavigationItemsNavigationItemsTitle = 'navigationItems___navigationItems___navigationItems___title',
  NavigationItemsNavigationItemsNavigationItemsUpdatedAt = 'navigationItems___navigationItems___navigationItems___updatedAt',
  NavigationItemsNavigationItemsNavigationItemsUrl = 'navigationItems___navigationItems___navigationItems___url',
  NavigationItemsNavigationItemsNavigationChildren = 'navigationItems___navigationItems___navigation___children',
  NavigationItemsNavigationItemsNavigationContentfulId = 'navigationItems___navigationItems___navigation___contentful_id',
  NavigationItemsNavigationItemsNavigationCreatedAt = 'navigationItems___navigationItems___navigation___createdAt',
  NavigationItemsNavigationItemsNavigationId = 'navigationItems___navigationItems___navigation___id',
  NavigationItemsNavigationItemsNavigationItems = 'navigationItems___navigationItems___navigation___items',
  NavigationItemsNavigationItemsNavigationNodeLocale = 'navigationItems___navigationItems___navigation___node_locale',
  NavigationItemsNavigationItemsNavigationSpaceId = 'navigationItems___navigationItems___navigation___spaceId',
  NavigationItemsNavigationItemsNavigationTitle = 'navigationItems___navigationItems___navigation___title',
  NavigationItemsNavigationItemsNavigationUpdatedAt = 'navigationItems___navigationItems___navigation___updatedAt',
  NavigationItemsNavigationItemsNavigationitem = 'navigationItems___navigationItems___navigationitem',
  NavigationItemsNavigationItemsNavigationitemChildren = 'navigationItems___navigationItems___navigationitem___children',
  NavigationItemsNavigationItemsNavigationitemContentfulId = 'navigationItems___navigationItems___navigationitem___contentful_id',
  NavigationItemsNavigationItemsNavigationitemCreatedAt = 'navigationItems___navigationItems___navigationitem___createdAt',
  NavigationItemsNavigationItemsNavigationitemId = 'navigationItems___navigationItems___navigationitem___id',
  NavigationItemsNavigationItemsNavigationitemNavigation = 'navigationItems___navigationItems___navigationitem___navigation',
  NavigationItemsNavigationItemsNavigationitemNavigationItems = 'navigationItems___navigationItems___navigationitem___navigationItems',
  NavigationItemsNavigationItemsNavigationitemNavigationitem = 'navigationItems___navigationItems___navigationitem___navigationitem',
  NavigationItemsNavigationItemsNavigationitemNodeLocale = 'navigationItems___navigationItems___navigationitem___node_locale',
  NavigationItemsNavigationItemsNavigationitemSpaceId = 'navigationItems___navigationItems___navigationitem___spaceId',
  NavigationItemsNavigationItemsNavigationitemTitle = 'navigationItems___navigationItems___navigationitem___title',
  NavigationItemsNavigationItemsNavigationitemUpdatedAt = 'navigationItems___navigationItems___navigationitem___updatedAt',
  NavigationItemsNavigationItemsNavigationitemUrl = 'navigationItems___navigationItems___navigationitem___url',
  NavigationItemsNavigationItemsNodeLocale = 'navigationItems___navigationItems___node_locale',
  NavigationItemsNavigationItemsParentChildren = 'navigationItems___navigationItems___parent___children',
  NavigationItemsNavigationItemsParentId = 'navigationItems___navigationItems___parent___id',
  NavigationItemsNavigationItemsSpaceId = 'navigationItems___navigationItems___spaceId',
  NavigationItemsNavigationItemsSysRevision = 'navigationItems___navigationItems___sys___revision',
  NavigationItemsNavigationItemsSysType = 'navigationItems___navigationItems___sys___type',
  NavigationItemsNavigationItemsTitle = 'navigationItems___navigationItems___title',
  NavigationItemsNavigationItemsUpdatedAt = 'navigationItems___navigationItems___updatedAt',
  NavigationItemsNavigationItemsUrl = 'navigationItems___navigationItems___url',
  NavigationItemsNavigationChildren = 'navigationItems___navigation___children',
  NavigationItemsNavigationChildrenChildren = 'navigationItems___navigation___children___children',
  NavigationItemsNavigationChildrenId = 'navigationItems___navigation___children___id',
  NavigationItemsNavigationContentfulId = 'navigationItems___navigation___contentful_id',
  NavigationItemsNavigationCreatedAt = 'navigationItems___navigation___createdAt',
  NavigationItemsNavigationId = 'navigationItems___navigation___id',
  NavigationItemsNavigationInternalContent = 'navigationItems___navigation___internal___content',
  NavigationItemsNavigationInternalContentDigest = 'navigationItems___navigation___internal___contentDigest',
  NavigationItemsNavigationInternalContentFilePath = 'navigationItems___navigation___internal___contentFilePath',
  NavigationItemsNavigationInternalDescription = 'navigationItems___navigation___internal___description',
  NavigationItemsNavigationInternalFieldOwners = 'navigationItems___navigation___internal___fieldOwners',
  NavigationItemsNavigationInternalIgnoreType = 'navigationItems___navigation___internal___ignoreType',
  NavigationItemsNavigationInternalMediaType = 'navigationItems___navigation___internal___mediaType',
  NavigationItemsNavigationInternalOwner = 'navigationItems___navigation___internal___owner',
  NavigationItemsNavigationInternalType = 'navigationItems___navigation___internal___type',
  NavigationItemsNavigationItems = 'navigationItems___navigation___items',
  NavigationItemsNavigationItemsChildren = 'navigationItems___navigation___items___children',
  NavigationItemsNavigationItemsContentfulId = 'navigationItems___navigation___items___contentful_id',
  NavigationItemsNavigationItemsCreatedAt = 'navigationItems___navigation___items___createdAt',
  NavigationItemsNavigationItemsId = 'navigationItems___navigation___items___id',
  NavigationItemsNavigationItemsNavigation = 'navigationItems___navigation___items___navigation',
  NavigationItemsNavigationItemsNavigationItems = 'navigationItems___navigation___items___navigationItems',
  NavigationItemsNavigationItemsNavigationitem = 'navigationItems___navigation___items___navigationitem',
  NavigationItemsNavigationItemsNodeLocale = 'navigationItems___navigation___items___node_locale',
  NavigationItemsNavigationItemsSpaceId = 'navigationItems___navigation___items___spaceId',
  NavigationItemsNavigationItemsTitle = 'navigationItems___navigation___items___title',
  NavigationItemsNavigationItemsUpdatedAt = 'navigationItems___navigation___items___updatedAt',
  NavigationItemsNavigationItemsUrl = 'navigationItems___navigation___items___url',
  NavigationItemsNavigationNodeLocale = 'navigationItems___navigation___node_locale',
  NavigationItemsNavigationParentChildren = 'navigationItems___navigation___parent___children',
  NavigationItemsNavigationParentId = 'navigationItems___navigation___parent___id',
  NavigationItemsNavigationSpaceId = 'navigationItems___navigation___spaceId',
  NavigationItemsNavigationSysRevision = 'navigationItems___navigation___sys___revision',
  NavigationItemsNavigationSysType = 'navigationItems___navigation___sys___type',
  NavigationItemsNavigationTitle = 'navigationItems___navigation___title',
  NavigationItemsNavigationUpdatedAt = 'navigationItems___navigation___updatedAt',
  NavigationItemsNavigationitem = 'navigationItems___navigationitem',
  NavigationItemsNavigationitemChildren = 'navigationItems___navigationitem___children',
  NavigationItemsNavigationitemChildrenChildren = 'navigationItems___navigationitem___children___children',
  NavigationItemsNavigationitemChildrenId = 'navigationItems___navigationitem___children___id',
  NavigationItemsNavigationitemContentfulId = 'navigationItems___navigationitem___contentful_id',
  NavigationItemsNavigationitemCreatedAt = 'navigationItems___navigationitem___createdAt',
  NavigationItemsNavigationitemId = 'navigationItems___navigationitem___id',
  NavigationItemsNavigationitemInternalContent = 'navigationItems___navigationitem___internal___content',
  NavigationItemsNavigationitemInternalContentDigest = 'navigationItems___navigationitem___internal___contentDigest',
  NavigationItemsNavigationitemInternalContentFilePath = 'navigationItems___navigationitem___internal___contentFilePath',
  NavigationItemsNavigationitemInternalDescription = 'navigationItems___navigationitem___internal___description',
  NavigationItemsNavigationitemInternalFieldOwners = 'navigationItems___navigationitem___internal___fieldOwners',
  NavigationItemsNavigationitemInternalIgnoreType = 'navigationItems___navigationitem___internal___ignoreType',
  NavigationItemsNavigationitemInternalMediaType = 'navigationItems___navigationitem___internal___mediaType',
  NavigationItemsNavigationitemInternalOwner = 'navigationItems___navigationitem___internal___owner',
  NavigationItemsNavigationitemInternalType = 'navigationItems___navigationitem___internal___type',
  NavigationItemsNavigationitemNavigation = 'navigationItems___navigationitem___navigation',
  NavigationItemsNavigationitemNavigationItems = 'navigationItems___navigationitem___navigationItems',
  NavigationItemsNavigationitemNavigationItemsChildren = 'navigationItems___navigationitem___navigationItems___children',
  NavigationItemsNavigationitemNavigationItemsContentfulId = 'navigationItems___navigationitem___navigationItems___contentful_id',
  NavigationItemsNavigationitemNavigationItemsCreatedAt = 'navigationItems___navigationitem___navigationItems___createdAt',
  NavigationItemsNavigationitemNavigationItemsId = 'navigationItems___navigationitem___navigationItems___id',
  NavigationItemsNavigationitemNavigationItemsNavigation = 'navigationItems___navigationitem___navigationItems___navigation',
  NavigationItemsNavigationitemNavigationItemsNavigationItems = 'navigationItems___navigationitem___navigationItems___navigationItems',
  NavigationItemsNavigationitemNavigationItemsNavigationitem = 'navigationItems___navigationitem___navigationItems___navigationitem',
  NavigationItemsNavigationitemNavigationItemsNodeLocale = 'navigationItems___navigationitem___navigationItems___node_locale',
  NavigationItemsNavigationitemNavigationItemsSpaceId = 'navigationItems___navigationitem___navigationItems___spaceId',
  NavigationItemsNavigationitemNavigationItemsTitle = 'navigationItems___navigationitem___navigationItems___title',
  NavigationItemsNavigationitemNavigationItemsUpdatedAt = 'navigationItems___navigationitem___navigationItems___updatedAt',
  NavigationItemsNavigationitemNavigationItemsUrl = 'navigationItems___navigationitem___navigationItems___url',
  NavigationItemsNavigationitemNavigationChildren = 'navigationItems___navigationitem___navigation___children',
  NavigationItemsNavigationitemNavigationContentfulId = 'navigationItems___navigationitem___navigation___contentful_id',
  NavigationItemsNavigationitemNavigationCreatedAt = 'navigationItems___navigationitem___navigation___createdAt',
  NavigationItemsNavigationitemNavigationId = 'navigationItems___navigationitem___navigation___id',
  NavigationItemsNavigationitemNavigationItems = 'navigationItems___navigationitem___navigation___items',
  NavigationItemsNavigationitemNavigationNodeLocale = 'navigationItems___navigationitem___navigation___node_locale',
  NavigationItemsNavigationitemNavigationSpaceId = 'navigationItems___navigationitem___navigation___spaceId',
  NavigationItemsNavigationitemNavigationTitle = 'navigationItems___navigationitem___navigation___title',
  NavigationItemsNavigationitemNavigationUpdatedAt = 'navigationItems___navigationitem___navigation___updatedAt',
  NavigationItemsNavigationitemNavigationitem = 'navigationItems___navigationitem___navigationitem',
  NavigationItemsNavigationitemNavigationitemChildren = 'navigationItems___navigationitem___navigationitem___children',
  NavigationItemsNavigationitemNavigationitemContentfulId = 'navigationItems___navigationitem___navigationitem___contentful_id',
  NavigationItemsNavigationitemNavigationitemCreatedAt = 'navigationItems___navigationitem___navigationitem___createdAt',
  NavigationItemsNavigationitemNavigationitemId = 'navigationItems___navigationitem___navigationitem___id',
  NavigationItemsNavigationitemNavigationitemNavigation = 'navigationItems___navigationitem___navigationitem___navigation',
  NavigationItemsNavigationitemNavigationitemNavigationItems = 'navigationItems___navigationitem___navigationitem___navigationItems',
  NavigationItemsNavigationitemNavigationitemNavigationitem = 'navigationItems___navigationitem___navigationitem___navigationitem',
  NavigationItemsNavigationitemNavigationitemNodeLocale = 'navigationItems___navigationitem___navigationitem___node_locale',
  NavigationItemsNavigationitemNavigationitemSpaceId = 'navigationItems___navigationitem___navigationitem___spaceId',
  NavigationItemsNavigationitemNavigationitemTitle = 'navigationItems___navigationitem___navigationitem___title',
  NavigationItemsNavigationitemNavigationitemUpdatedAt = 'navigationItems___navigationitem___navigationitem___updatedAt',
  NavigationItemsNavigationitemNavigationitemUrl = 'navigationItems___navigationitem___navigationitem___url',
  NavigationItemsNavigationitemNodeLocale = 'navigationItems___navigationitem___node_locale',
  NavigationItemsNavigationitemParentChildren = 'navigationItems___navigationitem___parent___children',
  NavigationItemsNavigationitemParentId = 'navigationItems___navigationitem___parent___id',
  NavigationItemsNavigationitemSpaceId = 'navigationItems___navigationitem___spaceId',
  NavigationItemsNavigationitemSysRevision = 'navigationItems___navigationitem___sys___revision',
  NavigationItemsNavigationitemSysType = 'navigationItems___navigationitem___sys___type',
  NavigationItemsNavigationitemTitle = 'navigationItems___navigationitem___title',
  NavigationItemsNavigationitemUpdatedAt = 'navigationItems___navigationitem___updatedAt',
  NavigationItemsNavigationitemUrl = 'navigationItems___navigationitem___url',
  NavigationItemsNodeLocale = 'navigationItems___node_locale',
  NavigationItemsParentChildren = 'navigationItems___parent___children',
  NavigationItemsParentChildrenChildren = 'navigationItems___parent___children___children',
  NavigationItemsParentChildrenId = 'navigationItems___parent___children___id',
  NavigationItemsParentId = 'navigationItems___parent___id',
  NavigationItemsParentInternalContent = 'navigationItems___parent___internal___content',
  NavigationItemsParentInternalContentDigest = 'navigationItems___parent___internal___contentDigest',
  NavigationItemsParentInternalContentFilePath = 'navigationItems___parent___internal___contentFilePath',
  NavigationItemsParentInternalDescription = 'navigationItems___parent___internal___description',
  NavigationItemsParentInternalFieldOwners = 'navigationItems___parent___internal___fieldOwners',
  NavigationItemsParentInternalIgnoreType = 'navigationItems___parent___internal___ignoreType',
  NavigationItemsParentInternalMediaType = 'navigationItems___parent___internal___mediaType',
  NavigationItemsParentInternalOwner = 'navigationItems___parent___internal___owner',
  NavigationItemsParentInternalType = 'navigationItems___parent___internal___type',
  NavigationItemsParentParentChildren = 'navigationItems___parent___parent___children',
  NavigationItemsParentParentId = 'navigationItems___parent___parent___id',
  NavigationItemsSpaceId = 'navigationItems___spaceId',
  NavigationItemsSysRevision = 'navigationItems___sys___revision',
  NavigationItemsSysType = 'navigationItems___sys___type',
  NavigationItemsTitle = 'navigationItems___title',
  NavigationItemsUpdatedAt = 'navigationItems___updatedAt',
  NavigationItemsUrl = 'navigationItems___url',
  NavigationChildren = 'navigation___children',
  NavigationChildrenChildren = 'navigation___children___children',
  NavigationChildrenChildrenChildren = 'navigation___children___children___children',
  NavigationChildrenChildrenId = 'navigation___children___children___id',
  NavigationChildrenId = 'navigation___children___id',
  NavigationChildrenInternalContent = 'navigation___children___internal___content',
  NavigationChildrenInternalContentDigest = 'navigation___children___internal___contentDigest',
  NavigationChildrenInternalContentFilePath = 'navigation___children___internal___contentFilePath',
  NavigationChildrenInternalDescription = 'navigation___children___internal___description',
  NavigationChildrenInternalFieldOwners = 'navigation___children___internal___fieldOwners',
  NavigationChildrenInternalIgnoreType = 'navigation___children___internal___ignoreType',
  NavigationChildrenInternalMediaType = 'navigation___children___internal___mediaType',
  NavigationChildrenInternalOwner = 'navigation___children___internal___owner',
  NavigationChildrenInternalType = 'navigation___children___internal___type',
  NavigationChildrenParentChildren = 'navigation___children___parent___children',
  NavigationChildrenParentId = 'navigation___children___parent___id',
  NavigationContentfulId = 'navigation___contentful_id',
  NavigationCreatedAt = 'navigation___createdAt',
  NavigationId = 'navigation___id',
  NavigationInternalContent = 'navigation___internal___content',
  NavigationInternalContentDigest = 'navigation___internal___contentDigest',
  NavigationInternalContentFilePath = 'navigation___internal___contentFilePath',
  NavigationInternalDescription = 'navigation___internal___description',
  NavigationInternalFieldOwners = 'navigation___internal___fieldOwners',
  NavigationInternalIgnoreType = 'navigation___internal___ignoreType',
  NavigationInternalMediaType = 'navigation___internal___mediaType',
  NavigationInternalOwner = 'navigation___internal___owner',
  NavigationInternalType = 'navigation___internal___type',
  NavigationItems = 'navigation___items',
  NavigationItemsChildren = 'navigation___items___children',
  NavigationItemsChildrenChildren = 'navigation___items___children___children',
  NavigationItemsChildrenId = 'navigation___items___children___id',
  NavigationItemsContentfulId = 'navigation___items___contentful_id',
  NavigationItemsCreatedAt = 'navigation___items___createdAt',
  NavigationItemsId = 'navigation___items___id',
  NavigationItemsInternalContent = 'navigation___items___internal___content',
  NavigationItemsInternalContentDigest = 'navigation___items___internal___contentDigest',
  NavigationItemsInternalContentFilePath = 'navigation___items___internal___contentFilePath',
  NavigationItemsInternalDescription = 'navigation___items___internal___description',
  NavigationItemsInternalFieldOwners = 'navigation___items___internal___fieldOwners',
  NavigationItemsInternalIgnoreType = 'navigation___items___internal___ignoreType',
  NavigationItemsInternalMediaType = 'navigation___items___internal___mediaType',
  NavigationItemsInternalOwner = 'navigation___items___internal___owner',
  NavigationItemsInternalType = 'navigation___items___internal___type',
  NavigationItemsNavigation = 'navigation___items___navigation',
  NavigationItemsNavigationItems = 'navigation___items___navigationItems',
  NavigationItemsNavigationItemsChildren = 'navigation___items___navigationItems___children',
  NavigationItemsNavigationItemsContentfulId = 'navigation___items___navigationItems___contentful_id',
  NavigationItemsNavigationItemsCreatedAt = 'navigation___items___navigationItems___createdAt',
  NavigationItemsNavigationItemsId = 'navigation___items___navigationItems___id',
  NavigationItemsNavigationItemsNavigation = 'navigation___items___navigationItems___navigation',
  NavigationItemsNavigationItemsNavigationItems = 'navigation___items___navigationItems___navigationItems',
  NavigationItemsNavigationItemsNavigationitem = 'navigation___items___navigationItems___navigationitem',
  NavigationItemsNavigationItemsNodeLocale = 'navigation___items___navigationItems___node_locale',
  NavigationItemsNavigationItemsSpaceId = 'navigation___items___navigationItems___spaceId',
  NavigationItemsNavigationItemsTitle = 'navigation___items___navigationItems___title',
  NavigationItemsNavigationItemsUpdatedAt = 'navigation___items___navigationItems___updatedAt',
  NavigationItemsNavigationItemsUrl = 'navigation___items___navigationItems___url',
  NavigationItemsNavigationChildren = 'navigation___items___navigation___children',
  NavigationItemsNavigationContentfulId = 'navigation___items___navigation___contentful_id',
  NavigationItemsNavigationCreatedAt = 'navigation___items___navigation___createdAt',
  NavigationItemsNavigationId = 'navigation___items___navigation___id',
  NavigationItemsNavigationItems = 'navigation___items___navigation___items',
  NavigationItemsNavigationNodeLocale = 'navigation___items___navigation___node_locale',
  NavigationItemsNavigationSpaceId = 'navigation___items___navigation___spaceId',
  NavigationItemsNavigationTitle = 'navigation___items___navigation___title',
  NavigationItemsNavigationUpdatedAt = 'navigation___items___navigation___updatedAt',
  NavigationItemsNavigationitem = 'navigation___items___navigationitem',
  NavigationItemsNavigationitemChildren = 'navigation___items___navigationitem___children',
  NavigationItemsNavigationitemContentfulId = 'navigation___items___navigationitem___contentful_id',
  NavigationItemsNavigationitemCreatedAt = 'navigation___items___navigationitem___createdAt',
  NavigationItemsNavigationitemId = 'navigation___items___navigationitem___id',
  NavigationItemsNavigationitemNavigation = 'navigation___items___navigationitem___navigation',
  NavigationItemsNavigationitemNavigationItems = 'navigation___items___navigationitem___navigationItems',
  NavigationItemsNavigationitemNavigationitem = 'navigation___items___navigationitem___navigationitem',
  NavigationItemsNavigationitemNodeLocale = 'navigation___items___navigationitem___node_locale',
  NavigationItemsNavigationitemSpaceId = 'navigation___items___navigationitem___spaceId',
  NavigationItemsNavigationitemTitle = 'navigation___items___navigationitem___title',
  NavigationItemsNavigationitemUpdatedAt = 'navigation___items___navigationitem___updatedAt',
  NavigationItemsNavigationitemUrl = 'navigation___items___navigationitem___url',
  NavigationItemsNodeLocale = 'navigation___items___node_locale',
  NavigationItemsParentChildren = 'navigation___items___parent___children',
  NavigationItemsParentId = 'navigation___items___parent___id',
  NavigationItemsSpaceId = 'navigation___items___spaceId',
  NavigationItemsSysRevision = 'navigation___items___sys___revision',
  NavigationItemsSysType = 'navigation___items___sys___type',
  NavigationItemsTitle = 'navigation___items___title',
  NavigationItemsUpdatedAt = 'navigation___items___updatedAt',
  NavigationItemsUrl = 'navigation___items___url',
  NavigationNodeLocale = 'navigation___node_locale',
  NavigationParentChildren = 'navigation___parent___children',
  NavigationParentChildrenChildren = 'navigation___parent___children___children',
  NavigationParentChildrenId = 'navigation___parent___children___id',
  NavigationParentId = 'navigation___parent___id',
  NavigationParentInternalContent = 'navigation___parent___internal___content',
  NavigationParentInternalContentDigest = 'navigation___parent___internal___contentDigest',
  NavigationParentInternalContentFilePath = 'navigation___parent___internal___contentFilePath',
  NavigationParentInternalDescription = 'navigation___parent___internal___description',
  NavigationParentInternalFieldOwners = 'navigation___parent___internal___fieldOwners',
  NavigationParentInternalIgnoreType = 'navigation___parent___internal___ignoreType',
  NavigationParentInternalMediaType = 'navigation___parent___internal___mediaType',
  NavigationParentInternalOwner = 'navigation___parent___internal___owner',
  NavigationParentInternalType = 'navigation___parent___internal___type',
  NavigationParentParentChildren = 'navigation___parent___parent___children',
  NavigationParentParentId = 'navigation___parent___parent___id',
  NavigationSpaceId = 'navigation___spaceId',
  NavigationSysRevision = 'navigation___sys___revision',
  NavigationSysType = 'navigation___sys___type',
  NavigationTitle = 'navigation___title',
  NavigationUpdatedAt = 'navigation___updatedAt',
  Navigationitem = 'navigationitem',
  NavigationitemChildren = 'navigationitem___children',
  NavigationitemChildrenChildren = 'navigationitem___children___children',
  NavigationitemChildrenChildrenChildren = 'navigationitem___children___children___children',
  NavigationitemChildrenChildrenId = 'navigationitem___children___children___id',
  NavigationitemChildrenId = 'navigationitem___children___id',
  NavigationitemChildrenInternalContent = 'navigationitem___children___internal___content',
  NavigationitemChildrenInternalContentDigest = 'navigationitem___children___internal___contentDigest',
  NavigationitemChildrenInternalContentFilePath = 'navigationitem___children___internal___contentFilePath',
  NavigationitemChildrenInternalDescription = 'navigationitem___children___internal___description',
  NavigationitemChildrenInternalFieldOwners = 'navigationitem___children___internal___fieldOwners',
  NavigationitemChildrenInternalIgnoreType = 'navigationitem___children___internal___ignoreType',
  NavigationitemChildrenInternalMediaType = 'navigationitem___children___internal___mediaType',
  NavigationitemChildrenInternalOwner = 'navigationitem___children___internal___owner',
  NavigationitemChildrenInternalType = 'navigationitem___children___internal___type',
  NavigationitemChildrenParentChildren = 'navigationitem___children___parent___children',
  NavigationitemChildrenParentId = 'navigationitem___children___parent___id',
  NavigationitemContentfulId = 'navigationitem___contentful_id',
  NavigationitemCreatedAt = 'navigationitem___createdAt',
  NavigationitemId = 'navigationitem___id',
  NavigationitemInternalContent = 'navigationitem___internal___content',
  NavigationitemInternalContentDigest = 'navigationitem___internal___contentDigest',
  NavigationitemInternalContentFilePath = 'navigationitem___internal___contentFilePath',
  NavigationitemInternalDescription = 'navigationitem___internal___description',
  NavigationitemInternalFieldOwners = 'navigationitem___internal___fieldOwners',
  NavigationitemInternalIgnoreType = 'navigationitem___internal___ignoreType',
  NavigationitemInternalMediaType = 'navigationitem___internal___mediaType',
  NavigationitemInternalOwner = 'navigationitem___internal___owner',
  NavigationitemInternalType = 'navigationitem___internal___type',
  NavigationitemNavigation = 'navigationitem___navigation',
  NavigationitemNavigationItems = 'navigationitem___navigationItems',
  NavigationitemNavigationItemsChildren = 'navigationitem___navigationItems___children',
  NavigationitemNavigationItemsChildrenChildren = 'navigationitem___navigationItems___children___children',
  NavigationitemNavigationItemsChildrenId = 'navigationitem___navigationItems___children___id',
  NavigationitemNavigationItemsContentfulId = 'navigationitem___navigationItems___contentful_id',
  NavigationitemNavigationItemsCreatedAt = 'navigationitem___navigationItems___createdAt',
  NavigationitemNavigationItemsId = 'navigationitem___navigationItems___id',
  NavigationitemNavigationItemsInternalContent = 'navigationitem___navigationItems___internal___content',
  NavigationitemNavigationItemsInternalContentDigest = 'navigationitem___navigationItems___internal___contentDigest',
  NavigationitemNavigationItemsInternalContentFilePath = 'navigationitem___navigationItems___internal___contentFilePath',
  NavigationitemNavigationItemsInternalDescription = 'navigationitem___navigationItems___internal___description',
  NavigationitemNavigationItemsInternalFieldOwners = 'navigationitem___navigationItems___internal___fieldOwners',
  NavigationitemNavigationItemsInternalIgnoreType = 'navigationitem___navigationItems___internal___ignoreType',
  NavigationitemNavigationItemsInternalMediaType = 'navigationitem___navigationItems___internal___mediaType',
  NavigationitemNavigationItemsInternalOwner = 'navigationitem___navigationItems___internal___owner',
  NavigationitemNavigationItemsInternalType = 'navigationitem___navigationItems___internal___type',
  NavigationitemNavigationItemsNavigation = 'navigationitem___navigationItems___navigation',
  NavigationitemNavigationItemsNavigationItems = 'navigationitem___navigationItems___navigationItems',
  NavigationitemNavigationItemsNavigationItemsChildren = 'navigationitem___navigationItems___navigationItems___children',
  NavigationitemNavigationItemsNavigationItemsContentfulId = 'navigationitem___navigationItems___navigationItems___contentful_id',
  NavigationitemNavigationItemsNavigationItemsCreatedAt = 'navigationitem___navigationItems___navigationItems___createdAt',
  NavigationitemNavigationItemsNavigationItemsId = 'navigationitem___navigationItems___navigationItems___id',
  NavigationitemNavigationItemsNavigationItemsNavigation = 'navigationitem___navigationItems___navigationItems___navigation',
  NavigationitemNavigationItemsNavigationItemsNavigationItems = 'navigationitem___navigationItems___navigationItems___navigationItems',
  NavigationitemNavigationItemsNavigationItemsNavigationitem = 'navigationitem___navigationItems___navigationItems___navigationitem',
  NavigationitemNavigationItemsNavigationItemsNodeLocale = 'navigationitem___navigationItems___navigationItems___node_locale',
  NavigationitemNavigationItemsNavigationItemsSpaceId = 'navigationitem___navigationItems___navigationItems___spaceId',
  NavigationitemNavigationItemsNavigationItemsTitle = 'navigationitem___navigationItems___navigationItems___title',
  NavigationitemNavigationItemsNavigationItemsUpdatedAt = 'navigationitem___navigationItems___navigationItems___updatedAt',
  NavigationitemNavigationItemsNavigationItemsUrl = 'navigationitem___navigationItems___navigationItems___url',
  NavigationitemNavigationItemsNavigationChildren = 'navigationitem___navigationItems___navigation___children',
  NavigationitemNavigationItemsNavigationContentfulId = 'navigationitem___navigationItems___navigation___contentful_id',
  NavigationitemNavigationItemsNavigationCreatedAt = 'navigationitem___navigationItems___navigation___createdAt',
  NavigationitemNavigationItemsNavigationId = 'navigationitem___navigationItems___navigation___id',
  NavigationitemNavigationItemsNavigationItems = 'navigationitem___navigationItems___navigation___items',
  NavigationitemNavigationItemsNavigationNodeLocale = 'navigationitem___navigationItems___navigation___node_locale',
  NavigationitemNavigationItemsNavigationSpaceId = 'navigationitem___navigationItems___navigation___spaceId',
  NavigationitemNavigationItemsNavigationTitle = 'navigationitem___navigationItems___navigation___title',
  NavigationitemNavigationItemsNavigationUpdatedAt = 'navigationitem___navigationItems___navigation___updatedAt',
  NavigationitemNavigationItemsNavigationitem = 'navigationitem___navigationItems___navigationitem',
  NavigationitemNavigationItemsNavigationitemChildren = 'navigationitem___navigationItems___navigationitem___children',
  NavigationitemNavigationItemsNavigationitemContentfulId = 'navigationitem___navigationItems___navigationitem___contentful_id',
  NavigationitemNavigationItemsNavigationitemCreatedAt = 'navigationitem___navigationItems___navigationitem___createdAt',
  NavigationitemNavigationItemsNavigationitemId = 'navigationitem___navigationItems___navigationitem___id',
  NavigationitemNavigationItemsNavigationitemNavigation = 'navigationitem___navigationItems___navigationitem___navigation',
  NavigationitemNavigationItemsNavigationitemNavigationItems = 'navigationitem___navigationItems___navigationitem___navigationItems',
  NavigationitemNavigationItemsNavigationitemNavigationitem = 'navigationitem___navigationItems___navigationitem___navigationitem',
  NavigationitemNavigationItemsNavigationitemNodeLocale = 'navigationitem___navigationItems___navigationitem___node_locale',
  NavigationitemNavigationItemsNavigationitemSpaceId = 'navigationitem___navigationItems___navigationitem___spaceId',
  NavigationitemNavigationItemsNavigationitemTitle = 'navigationitem___navigationItems___navigationitem___title',
  NavigationitemNavigationItemsNavigationitemUpdatedAt = 'navigationitem___navigationItems___navigationitem___updatedAt',
  NavigationitemNavigationItemsNavigationitemUrl = 'navigationitem___navigationItems___navigationitem___url',
  NavigationitemNavigationItemsNodeLocale = 'navigationitem___navigationItems___node_locale',
  NavigationitemNavigationItemsParentChildren = 'navigationitem___navigationItems___parent___children',
  NavigationitemNavigationItemsParentId = 'navigationitem___navigationItems___parent___id',
  NavigationitemNavigationItemsSpaceId = 'navigationitem___navigationItems___spaceId',
  NavigationitemNavigationItemsSysRevision = 'navigationitem___navigationItems___sys___revision',
  NavigationitemNavigationItemsSysType = 'navigationitem___navigationItems___sys___type',
  NavigationitemNavigationItemsTitle = 'navigationitem___navigationItems___title',
  NavigationitemNavigationItemsUpdatedAt = 'navigationitem___navigationItems___updatedAt',
  NavigationitemNavigationItemsUrl = 'navigationitem___navigationItems___url',
  NavigationitemNavigationChildren = 'navigationitem___navigation___children',
  NavigationitemNavigationChildrenChildren = 'navigationitem___navigation___children___children',
  NavigationitemNavigationChildrenId = 'navigationitem___navigation___children___id',
  NavigationitemNavigationContentfulId = 'navigationitem___navigation___contentful_id',
  NavigationitemNavigationCreatedAt = 'navigationitem___navigation___createdAt',
  NavigationitemNavigationId = 'navigationitem___navigation___id',
  NavigationitemNavigationInternalContent = 'navigationitem___navigation___internal___content',
  NavigationitemNavigationInternalContentDigest = 'navigationitem___navigation___internal___contentDigest',
  NavigationitemNavigationInternalContentFilePath = 'navigationitem___navigation___internal___contentFilePath',
  NavigationitemNavigationInternalDescription = 'navigationitem___navigation___internal___description',
  NavigationitemNavigationInternalFieldOwners = 'navigationitem___navigation___internal___fieldOwners',
  NavigationitemNavigationInternalIgnoreType = 'navigationitem___navigation___internal___ignoreType',
  NavigationitemNavigationInternalMediaType = 'navigationitem___navigation___internal___mediaType',
  NavigationitemNavigationInternalOwner = 'navigationitem___navigation___internal___owner',
  NavigationitemNavigationInternalType = 'navigationitem___navigation___internal___type',
  NavigationitemNavigationItems = 'navigationitem___navigation___items',
  NavigationitemNavigationItemsChildren = 'navigationitem___navigation___items___children',
  NavigationitemNavigationItemsContentfulId = 'navigationitem___navigation___items___contentful_id',
  NavigationitemNavigationItemsCreatedAt = 'navigationitem___navigation___items___createdAt',
  NavigationitemNavigationItemsId = 'navigationitem___navigation___items___id',
  NavigationitemNavigationItemsNavigation = 'navigationitem___navigation___items___navigation',
  NavigationitemNavigationItemsNavigationItems = 'navigationitem___navigation___items___navigationItems',
  NavigationitemNavigationItemsNavigationitem = 'navigationitem___navigation___items___navigationitem',
  NavigationitemNavigationItemsNodeLocale = 'navigationitem___navigation___items___node_locale',
  NavigationitemNavigationItemsSpaceId = 'navigationitem___navigation___items___spaceId',
  NavigationitemNavigationItemsTitle = 'navigationitem___navigation___items___title',
  NavigationitemNavigationItemsUpdatedAt = 'navigationitem___navigation___items___updatedAt',
  NavigationitemNavigationItemsUrl = 'navigationitem___navigation___items___url',
  NavigationitemNavigationNodeLocale = 'navigationitem___navigation___node_locale',
  NavigationitemNavigationParentChildren = 'navigationitem___navigation___parent___children',
  NavigationitemNavigationParentId = 'navigationitem___navigation___parent___id',
  NavigationitemNavigationSpaceId = 'navigationitem___navigation___spaceId',
  NavigationitemNavigationSysRevision = 'navigationitem___navigation___sys___revision',
  NavigationitemNavigationSysType = 'navigationitem___navigation___sys___type',
  NavigationitemNavigationTitle = 'navigationitem___navigation___title',
  NavigationitemNavigationUpdatedAt = 'navigationitem___navigation___updatedAt',
  NavigationitemNavigationitem = 'navigationitem___navigationitem',
  NavigationitemNavigationitemChildren = 'navigationitem___navigationitem___children',
  NavigationitemNavigationitemChildrenChildren = 'navigationitem___navigationitem___children___children',
  NavigationitemNavigationitemChildrenId = 'navigationitem___navigationitem___children___id',
  NavigationitemNavigationitemContentfulId = 'navigationitem___navigationitem___contentful_id',
  NavigationitemNavigationitemCreatedAt = 'navigationitem___navigationitem___createdAt',
  NavigationitemNavigationitemId = 'navigationitem___navigationitem___id',
  NavigationitemNavigationitemInternalContent = 'navigationitem___navigationitem___internal___content',
  NavigationitemNavigationitemInternalContentDigest = 'navigationitem___navigationitem___internal___contentDigest',
  NavigationitemNavigationitemInternalContentFilePath = 'navigationitem___navigationitem___internal___contentFilePath',
  NavigationitemNavigationitemInternalDescription = 'navigationitem___navigationitem___internal___description',
  NavigationitemNavigationitemInternalFieldOwners = 'navigationitem___navigationitem___internal___fieldOwners',
  NavigationitemNavigationitemInternalIgnoreType = 'navigationitem___navigationitem___internal___ignoreType',
  NavigationitemNavigationitemInternalMediaType = 'navigationitem___navigationitem___internal___mediaType',
  NavigationitemNavigationitemInternalOwner = 'navigationitem___navigationitem___internal___owner',
  NavigationitemNavigationitemInternalType = 'navigationitem___navigationitem___internal___type',
  NavigationitemNavigationitemNavigation = 'navigationitem___navigationitem___navigation',
  NavigationitemNavigationitemNavigationItems = 'navigationitem___navigationitem___navigationItems',
  NavigationitemNavigationitemNavigationItemsChildren = 'navigationitem___navigationitem___navigationItems___children',
  NavigationitemNavigationitemNavigationItemsContentfulId = 'navigationitem___navigationitem___navigationItems___contentful_id',
  NavigationitemNavigationitemNavigationItemsCreatedAt = 'navigationitem___navigationitem___navigationItems___createdAt',
  NavigationitemNavigationitemNavigationItemsId = 'navigationitem___navigationitem___navigationItems___id',
  NavigationitemNavigationitemNavigationItemsNavigation = 'navigationitem___navigationitem___navigationItems___navigation',
  NavigationitemNavigationitemNavigationItemsNavigationItems = 'navigationitem___navigationitem___navigationItems___navigationItems',
  NavigationitemNavigationitemNavigationItemsNavigationitem = 'navigationitem___navigationitem___navigationItems___navigationitem',
  NavigationitemNavigationitemNavigationItemsNodeLocale = 'navigationitem___navigationitem___navigationItems___node_locale',
  NavigationitemNavigationitemNavigationItemsSpaceId = 'navigationitem___navigationitem___navigationItems___spaceId',
  NavigationitemNavigationitemNavigationItemsTitle = 'navigationitem___navigationitem___navigationItems___title',
  NavigationitemNavigationitemNavigationItemsUpdatedAt = 'navigationitem___navigationitem___navigationItems___updatedAt',
  NavigationitemNavigationitemNavigationItemsUrl = 'navigationitem___navigationitem___navigationItems___url',
  NavigationitemNavigationitemNavigationChildren = 'navigationitem___navigationitem___navigation___children',
  NavigationitemNavigationitemNavigationContentfulId = 'navigationitem___navigationitem___navigation___contentful_id',
  NavigationitemNavigationitemNavigationCreatedAt = 'navigationitem___navigationitem___navigation___createdAt',
  NavigationitemNavigationitemNavigationId = 'navigationitem___navigationitem___navigation___id',
  NavigationitemNavigationitemNavigationItems = 'navigationitem___navigationitem___navigation___items',
  NavigationitemNavigationitemNavigationNodeLocale = 'navigationitem___navigationitem___navigation___node_locale',
  NavigationitemNavigationitemNavigationSpaceId = 'navigationitem___navigationitem___navigation___spaceId',
  NavigationitemNavigationitemNavigationTitle = 'navigationitem___navigationitem___navigation___title',
  NavigationitemNavigationitemNavigationUpdatedAt = 'navigationitem___navigationitem___navigation___updatedAt',
  NavigationitemNavigationitemNavigationitem = 'navigationitem___navigationitem___navigationitem',
  NavigationitemNavigationitemNavigationitemChildren = 'navigationitem___navigationitem___navigationitem___children',
  NavigationitemNavigationitemNavigationitemContentfulId = 'navigationitem___navigationitem___navigationitem___contentful_id',
  NavigationitemNavigationitemNavigationitemCreatedAt = 'navigationitem___navigationitem___navigationitem___createdAt',
  NavigationitemNavigationitemNavigationitemId = 'navigationitem___navigationitem___navigationitem___id',
  NavigationitemNavigationitemNavigationitemNavigation = 'navigationitem___navigationitem___navigationitem___navigation',
  NavigationitemNavigationitemNavigationitemNavigationItems = 'navigationitem___navigationitem___navigationitem___navigationItems',
  NavigationitemNavigationitemNavigationitemNavigationitem = 'navigationitem___navigationitem___navigationitem___navigationitem',
  NavigationitemNavigationitemNavigationitemNodeLocale = 'navigationitem___navigationitem___navigationitem___node_locale',
  NavigationitemNavigationitemNavigationitemSpaceId = 'navigationitem___navigationitem___navigationitem___spaceId',
  NavigationitemNavigationitemNavigationitemTitle = 'navigationitem___navigationitem___navigationitem___title',
  NavigationitemNavigationitemNavigationitemUpdatedAt = 'navigationitem___navigationitem___navigationitem___updatedAt',
  NavigationitemNavigationitemNavigationitemUrl = 'navigationitem___navigationitem___navigationitem___url',
  NavigationitemNavigationitemNodeLocale = 'navigationitem___navigationitem___node_locale',
  NavigationitemNavigationitemParentChildren = 'navigationitem___navigationitem___parent___children',
  NavigationitemNavigationitemParentId = 'navigationitem___navigationitem___parent___id',
  NavigationitemNavigationitemSpaceId = 'navigationitem___navigationitem___spaceId',
  NavigationitemNavigationitemSysRevision = 'navigationitem___navigationitem___sys___revision',
  NavigationitemNavigationitemSysType = 'navigationitem___navigationitem___sys___type',
  NavigationitemNavigationitemTitle = 'navigationitem___navigationitem___title',
  NavigationitemNavigationitemUpdatedAt = 'navigationitem___navigationitem___updatedAt',
  NavigationitemNavigationitemUrl = 'navigationitem___navigationitem___url',
  NavigationitemNodeLocale = 'navigationitem___node_locale',
  NavigationitemParentChildren = 'navigationitem___parent___children',
  NavigationitemParentChildrenChildren = 'navigationitem___parent___children___children',
  NavigationitemParentChildrenId = 'navigationitem___parent___children___id',
  NavigationitemParentId = 'navigationitem___parent___id',
  NavigationitemParentInternalContent = 'navigationitem___parent___internal___content',
  NavigationitemParentInternalContentDigest = 'navigationitem___parent___internal___contentDigest',
  NavigationitemParentInternalContentFilePath = 'navigationitem___parent___internal___contentFilePath',
  NavigationitemParentInternalDescription = 'navigationitem___parent___internal___description',
  NavigationitemParentInternalFieldOwners = 'navigationitem___parent___internal___fieldOwners',
  NavigationitemParentInternalIgnoreType = 'navigationitem___parent___internal___ignoreType',
  NavigationitemParentInternalMediaType = 'navigationitem___parent___internal___mediaType',
  NavigationitemParentInternalOwner = 'navigationitem___parent___internal___owner',
  NavigationitemParentInternalType = 'navigationitem___parent___internal___type',
  NavigationitemParentParentChildren = 'navigationitem___parent___parent___children',
  NavigationitemParentParentId = 'navigationitem___parent___parent___id',
  NavigationitemSpaceId = 'navigationitem___spaceId',
  NavigationitemSysRevision = 'navigationitem___sys___revision',
  NavigationitemSysType = 'navigationitem___sys___type',
  NavigationitemTitle = 'navigationitem___title',
  NavigationitemUpdatedAt = 'navigationitem___updatedAt',
  NavigationitemUrl = 'navigationitem___url',
  NodeLocale = 'node_locale',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalContentFilePath = 'parent___children___internal___contentFilePath',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalContentFilePath = 'parent___internal___contentFilePath',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalContentFilePath = 'parent___parent___internal___contentFilePath',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  SpaceId = 'spaceId',
  SysContentTypeSysId = 'sys___contentType___sys___id',
  SysContentTypeSysLinkType = 'sys___contentType___sys___linkType',
  SysContentTypeSysType = 'sys___contentType___sys___type',
  SysRevision = 'sys___revision',
  SysType = 'sys___type',
  Title = 'title',
  UpdatedAt = 'updatedAt',
  Url = 'url'
}

export type ContentfulNavigationItemFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  navigation?: InputMaybe<ContentfulNavigationFilterListInput>;
  navigationItems?: InputMaybe<ContentfulNavigationItemFilterListInput>;
  navigationitem?: InputMaybe<ContentfulNavigationItemFilterListInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulNavigationItemSysFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulNavigationItemFilterListInput = {
  elemMatch?: InputMaybe<ContentfulNavigationItemFilterInput>;
};

export type ContentfulNavigationItemGroupConnection = {
  __typename?: 'ContentfulNavigationItemGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<ContentfulNavigationItemEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<ContentfulNavigationItemGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<ContentfulNavigationItem>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type ContentfulNavigationItemGroupConnectionDistinctArgs = {
  field: ContentfulNavigationItemFieldsEnum;
};


export type ContentfulNavigationItemGroupConnectionGroupArgs = {
  field: ContentfulNavigationItemFieldsEnum;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulNavigationItemGroupConnectionMaxArgs = {
  field: ContentfulNavigationItemFieldsEnum;
};


export type ContentfulNavigationItemGroupConnectionMinArgs = {
  field: ContentfulNavigationItemFieldsEnum;
};


export type ContentfulNavigationItemGroupConnectionSumArgs = {
  field: ContentfulNavigationItemFieldsEnum;
};

export type ContentfulNavigationItemSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulNavigationItemFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulNavigationItemSys = {
  __typename?: 'ContentfulNavigationItemSys';
  contentType?: Maybe<ContentfulNavigationItemSysContentType>;
  revision?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ContentfulNavigationItemSysContentType = {
  __typename?: 'ContentfulNavigationItemSysContentType';
  sys?: Maybe<ContentfulNavigationItemSysContentTypeSys>;
};

export type ContentfulNavigationItemSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulNavigationItemSysContentTypeSysFilterInput>;
};

export type ContentfulNavigationItemSysContentTypeSys = {
  __typename?: 'ContentfulNavigationItemSysContentTypeSys';
  id?: Maybe<Scalars['String']['output']>;
  linkType?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ContentfulNavigationItemSysContentTypeSysFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulNavigationItemSysFilterInput = {
  contentType?: InputMaybe<ContentfulNavigationItemSysContentTypeFilterInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulNavigationSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulNavigationFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulNavigationSys = {
  __typename?: 'ContentfulNavigationSys';
  contentType?: Maybe<ContentfulNavigationSysContentType>;
  revision?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ContentfulNavigationSysContentType = {
  __typename?: 'ContentfulNavigationSysContentType';
  sys?: Maybe<ContentfulNavigationSysContentTypeSys>;
};

export type ContentfulNavigationSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulNavigationSysContentTypeSysFilterInput>;
};

export type ContentfulNavigationSysContentTypeSys = {
  __typename?: 'ContentfulNavigationSysContentTypeSys';
  id?: Maybe<Scalars['String']['output']>;
  linkType?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ContentfulNavigationSysContentTypeSysFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulNavigationSysFilterInput = {
  contentType?: InputMaybe<ContentfulNavigationSysContentTypeFilterInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulPost = ContentfulEntry & ContentfulReference & Node & {
  __typename?: 'ContentfulPost';
  children: Array<Node>;
  contentful_id: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['Date']['output']>;
  gallery?: Maybe<Array<Maybe<ContentfulAsset>>>;
  gatsbyPath?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  internal: Internal;
  node_locale: Scalars['String']['output'];
  parent?: Maybe<Node>;
  spaceId?: Maybe<Scalars['String']['output']>;
  sys?: Maybe<ContentfulPostSys>;
  text?: Maybe<ContentfulPostText>;
  thumbnail?: Maybe<ContentfulAsset>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};


export type ContentfulPostCreatedAtArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type ContentfulPostGatsbyPathArgs = {
  filePath?: InputMaybe<Scalars['String']['input']>;
};


export type ContentfulPostUpdatedAtArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ContentfulPostConnection = {
  __typename?: 'ContentfulPostConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<ContentfulPostEdge>;
  group: Array<ContentfulPostGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<ContentfulPost>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type ContentfulPostConnectionDistinctArgs = {
  field: ContentfulPostFieldsEnum;
};


export type ContentfulPostConnectionGroupArgs = {
  field: ContentfulPostFieldsEnum;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulPostConnectionMaxArgs = {
  field: ContentfulPostFieldsEnum;
};


export type ContentfulPostConnectionMinArgs = {
  field: ContentfulPostFieldsEnum;
};


export type ContentfulPostConnectionSumArgs = {
  field: ContentfulPostFieldsEnum;
};

export type ContentfulPostEdge = {
  __typename?: 'ContentfulPostEdge';
  next?: Maybe<ContentfulPost>;
  node: ContentfulPost;
  previous?: Maybe<ContentfulPost>;
};

export enum ContentfulPostFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalContentFilePath = 'children___children___internal___contentFilePath',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalContentFilePath = 'children___internal___contentFilePath',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalContentFilePath = 'children___parent___internal___contentFilePath',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  Gallery = 'gallery',
  GalleryChildren = 'gallery___children',
  GalleryChildrenChildren = 'gallery___children___children',
  GalleryChildrenChildrenChildren = 'gallery___children___children___children',
  GalleryChildrenChildrenId = 'gallery___children___children___id',
  GalleryChildrenId = 'gallery___children___id',
  GalleryChildrenInternalContent = 'gallery___children___internal___content',
  GalleryChildrenInternalContentDigest = 'gallery___children___internal___contentDigest',
  GalleryChildrenInternalContentFilePath = 'gallery___children___internal___contentFilePath',
  GalleryChildrenInternalDescription = 'gallery___children___internal___description',
  GalleryChildrenInternalFieldOwners = 'gallery___children___internal___fieldOwners',
  GalleryChildrenInternalIgnoreType = 'gallery___children___internal___ignoreType',
  GalleryChildrenInternalMediaType = 'gallery___children___internal___mediaType',
  GalleryChildrenInternalOwner = 'gallery___children___internal___owner',
  GalleryChildrenInternalType = 'gallery___children___internal___type',
  GalleryChildrenParentChildren = 'gallery___children___parent___children',
  GalleryChildrenParentId = 'gallery___children___parent___id',
  GalleryContentfulId = 'gallery___contentful_id',
  GalleryCreatedAt = 'gallery___createdAt',
  GalleryDescription = 'gallery___description',
  GalleryFileContentType = 'gallery___file___contentType',
  GalleryFileDetailsSize = 'gallery___file___details___size',
  GalleryFileFileName = 'gallery___file___fileName',
  GalleryFileUrl = 'gallery___file___url',
  GalleryFilename = 'gallery___filename',
  GalleryFilesize = 'gallery___filesize',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  GalleryGatsbyImage = 'gallery___gatsbyImage',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  GalleryGatsbyImageData = 'gallery___gatsbyImageData',
  GalleryHeight = 'gallery___height',
  GalleryId = 'gallery___id',
  GalleryInternalContent = 'gallery___internal___content',
  GalleryInternalContentDigest = 'gallery___internal___contentDigest',
  GalleryInternalContentFilePath = 'gallery___internal___contentFilePath',
  GalleryInternalDescription = 'gallery___internal___description',
  GalleryInternalFieldOwners = 'gallery___internal___fieldOwners',
  GalleryInternalIgnoreType = 'gallery___internal___ignoreType',
  GalleryInternalMediaType = 'gallery___internal___mediaType',
  GalleryInternalOwner = 'gallery___internal___owner',
  GalleryInternalType = 'gallery___internal___type',
  GalleryMimeType = 'gallery___mimeType',
  GalleryNodeLocale = 'gallery___node_locale',
  GalleryParentChildren = 'gallery___parent___children',
  GalleryParentChildrenChildren = 'gallery___parent___children___children',
  GalleryParentChildrenId = 'gallery___parent___children___id',
  GalleryParentId = 'gallery___parent___id',
  GalleryParentInternalContent = 'gallery___parent___internal___content',
  GalleryParentInternalContentDigest = 'gallery___parent___internal___contentDigest',
  GalleryParentInternalContentFilePath = 'gallery___parent___internal___contentFilePath',
  GalleryParentInternalDescription = 'gallery___parent___internal___description',
  GalleryParentInternalFieldOwners = 'gallery___parent___internal___fieldOwners',
  GalleryParentInternalIgnoreType = 'gallery___parent___internal___ignoreType',
  GalleryParentInternalMediaType = 'gallery___parent___internal___mediaType',
  GalleryParentInternalOwner = 'gallery___parent___internal___owner',
  GalleryParentInternalType = 'gallery___parent___internal___type',
  GalleryParentParentChildren = 'gallery___parent___parent___children',
  GalleryParentParentId = 'gallery___parent___parent___id',
  GalleryPlaceholderUrl = 'gallery___placeholderUrl',
  GalleryPublicUrl = 'gallery___publicUrl',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  GalleryResizeHeight = 'gallery___resize___height',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  GalleryResizeSrc = 'gallery___resize___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  GalleryResizeWidth = 'gallery___resize___width',
  GallerySize = 'gallery___size',
  GallerySpaceId = 'gallery___spaceId',
  GallerySysRevision = 'gallery___sys___revision',
  GallerySysType = 'gallery___sys___type',
  GalleryTitle = 'gallery___title',
  GalleryUpdatedAt = 'gallery___updatedAt',
  GalleryUrl = 'gallery___url',
  GalleryWidth = 'gallery___width',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  GatsbyPath = 'gatsbyPath',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalContentFilePath = 'internal___contentFilePath',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  NodeLocale = 'node_locale',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalContentFilePath = 'parent___children___internal___contentFilePath',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalContentFilePath = 'parent___internal___contentFilePath',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalContentFilePath = 'parent___parent___internal___contentFilePath',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  SpaceId = 'spaceId',
  SysContentTypeSysId = 'sys___contentType___sys___id',
  SysContentTypeSysLinkType = 'sys___contentType___sys___linkType',
  SysContentTypeSysType = 'sys___contentType___sys___type',
  SysRevision = 'sys___revision',
  SysType = 'sys___type',
  TextRaw = 'text___raw',
  ThumbnailChildren = 'thumbnail___children',
  ThumbnailChildrenChildren = 'thumbnail___children___children',
  ThumbnailChildrenChildrenChildren = 'thumbnail___children___children___children',
  ThumbnailChildrenChildrenId = 'thumbnail___children___children___id',
  ThumbnailChildrenId = 'thumbnail___children___id',
  ThumbnailChildrenInternalContent = 'thumbnail___children___internal___content',
  ThumbnailChildrenInternalContentDigest = 'thumbnail___children___internal___contentDigest',
  ThumbnailChildrenInternalContentFilePath = 'thumbnail___children___internal___contentFilePath',
  ThumbnailChildrenInternalDescription = 'thumbnail___children___internal___description',
  ThumbnailChildrenInternalFieldOwners = 'thumbnail___children___internal___fieldOwners',
  ThumbnailChildrenInternalIgnoreType = 'thumbnail___children___internal___ignoreType',
  ThumbnailChildrenInternalMediaType = 'thumbnail___children___internal___mediaType',
  ThumbnailChildrenInternalOwner = 'thumbnail___children___internal___owner',
  ThumbnailChildrenInternalType = 'thumbnail___children___internal___type',
  ThumbnailChildrenParentChildren = 'thumbnail___children___parent___children',
  ThumbnailChildrenParentId = 'thumbnail___children___parent___id',
  ThumbnailContentfulId = 'thumbnail___contentful_id',
  ThumbnailCreatedAt = 'thumbnail___createdAt',
  ThumbnailDescription = 'thumbnail___description',
  ThumbnailFileContentType = 'thumbnail___file___contentType',
  ThumbnailFileDetailsSize = 'thumbnail___file___details___size',
  ThumbnailFileFileName = 'thumbnail___file___fileName',
  ThumbnailFileUrl = 'thumbnail___file___url',
  ThumbnailFilename = 'thumbnail___filename',
  ThumbnailFilesize = 'thumbnail___filesize',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ThumbnailGatsbyImage = 'thumbnail___gatsbyImage',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ThumbnailGatsbyImageData = 'thumbnail___gatsbyImageData',
  ThumbnailHeight = 'thumbnail___height',
  ThumbnailId = 'thumbnail___id',
  ThumbnailInternalContent = 'thumbnail___internal___content',
  ThumbnailInternalContentDigest = 'thumbnail___internal___contentDigest',
  ThumbnailInternalContentFilePath = 'thumbnail___internal___contentFilePath',
  ThumbnailInternalDescription = 'thumbnail___internal___description',
  ThumbnailInternalFieldOwners = 'thumbnail___internal___fieldOwners',
  ThumbnailInternalIgnoreType = 'thumbnail___internal___ignoreType',
  ThumbnailInternalMediaType = 'thumbnail___internal___mediaType',
  ThumbnailInternalOwner = 'thumbnail___internal___owner',
  ThumbnailInternalType = 'thumbnail___internal___type',
  ThumbnailMimeType = 'thumbnail___mimeType',
  ThumbnailNodeLocale = 'thumbnail___node_locale',
  ThumbnailParentChildren = 'thumbnail___parent___children',
  ThumbnailParentChildrenChildren = 'thumbnail___parent___children___children',
  ThumbnailParentChildrenId = 'thumbnail___parent___children___id',
  ThumbnailParentId = 'thumbnail___parent___id',
  ThumbnailParentInternalContent = 'thumbnail___parent___internal___content',
  ThumbnailParentInternalContentDigest = 'thumbnail___parent___internal___contentDigest',
  ThumbnailParentInternalContentFilePath = 'thumbnail___parent___internal___contentFilePath',
  ThumbnailParentInternalDescription = 'thumbnail___parent___internal___description',
  ThumbnailParentInternalFieldOwners = 'thumbnail___parent___internal___fieldOwners',
  ThumbnailParentInternalIgnoreType = 'thumbnail___parent___internal___ignoreType',
  ThumbnailParentInternalMediaType = 'thumbnail___parent___internal___mediaType',
  ThumbnailParentInternalOwner = 'thumbnail___parent___internal___owner',
  ThumbnailParentInternalType = 'thumbnail___parent___internal___type',
  ThumbnailParentParentChildren = 'thumbnail___parent___parent___children',
  ThumbnailParentParentId = 'thumbnail___parent___parent___id',
  ThumbnailPlaceholderUrl = 'thumbnail___placeholderUrl',
  ThumbnailPublicUrl = 'thumbnail___publicUrl',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ThumbnailResizeHeight = 'thumbnail___resize___height',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ThumbnailResizeSrc = 'thumbnail___resize___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ThumbnailResizeWidth = 'thumbnail___resize___width',
  ThumbnailSize = 'thumbnail___size',
  ThumbnailSpaceId = 'thumbnail___spaceId',
  ThumbnailSysRevision = 'thumbnail___sys___revision',
  ThumbnailSysType = 'thumbnail___sys___type',
  ThumbnailTitle = 'thumbnail___title',
  ThumbnailUpdatedAt = 'thumbnail___updatedAt',
  ThumbnailUrl = 'thumbnail___url',
  ThumbnailWidth = 'thumbnail___width',
  Title = 'title',
  UpdatedAt = 'updatedAt'
}

export type ContentfulPostFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  gallery?: InputMaybe<ContentfulAssetFilterListInput>;
  gatsbyPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulPostSysFilterInput>;
  text?: InputMaybe<ContentfulPostTextFilterInput>;
  thumbnail?: InputMaybe<ContentfulAssetFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
};

export type ContentfulPostGroupConnection = {
  __typename?: 'ContentfulPostGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<ContentfulPostEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<ContentfulPostGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<ContentfulPost>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type ContentfulPostGroupConnectionDistinctArgs = {
  field: ContentfulPostFieldsEnum;
};


export type ContentfulPostGroupConnectionGroupArgs = {
  field: ContentfulPostFieldsEnum;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulPostGroupConnectionMaxArgs = {
  field: ContentfulPostFieldsEnum;
};


export type ContentfulPostGroupConnectionMinArgs = {
  field: ContentfulPostFieldsEnum;
};


export type ContentfulPostGroupConnectionSumArgs = {
  field: ContentfulPostFieldsEnum;
};

export type ContentfulPostSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulPostFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulPostSys = {
  __typename?: 'ContentfulPostSys';
  contentType?: Maybe<ContentfulPostSysContentType>;
  revision?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ContentfulPostSysContentType = {
  __typename?: 'ContentfulPostSysContentType';
  sys?: Maybe<ContentfulPostSysContentTypeSys>;
};

export type ContentfulPostSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulPostSysContentTypeSysFilterInput>;
};

export type ContentfulPostSysContentTypeSys = {
  __typename?: 'ContentfulPostSysContentTypeSys';
  id?: Maybe<Scalars['String']['output']>;
  linkType?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ContentfulPostSysContentTypeSysFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulPostSysFilterInput = {
  contentType?: InputMaybe<ContentfulPostSysContentTypeFilterInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulPostText = {
  __typename?: 'ContentfulPostText';
  raw?: Maybe<Scalars['String']['output']>;
};

export type ContentfulPostTextFilterInput = {
  raw?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulPromoVideo = ContentfulEntry & ContentfulReference & Node & {
  __typename?: 'ContentfulPromoVideo';
  children: Array<Node>;
  contentful_id: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  internal: Internal;
  node_locale: Scalars['String']['output'];
  parent?: Maybe<Node>;
  spaceId?: Maybe<Scalars['String']['output']>;
  sys?: Maybe<ContentfulPromoVideoSys>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  video?: Maybe<ContentfulAsset>;
};


export type ContentfulPromoVideoCreatedAtArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type ContentfulPromoVideoUpdatedAtArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ContentfulPromoVideoConnection = {
  __typename?: 'ContentfulPromoVideoConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<ContentfulPromoVideoEdge>;
  group: Array<ContentfulPromoVideoGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<ContentfulPromoVideo>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type ContentfulPromoVideoConnectionDistinctArgs = {
  field: ContentfulPromoVideoFieldsEnum;
};


export type ContentfulPromoVideoConnectionGroupArgs = {
  field: ContentfulPromoVideoFieldsEnum;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulPromoVideoConnectionMaxArgs = {
  field: ContentfulPromoVideoFieldsEnum;
};


export type ContentfulPromoVideoConnectionMinArgs = {
  field: ContentfulPromoVideoFieldsEnum;
};


export type ContentfulPromoVideoConnectionSumArgs = {
  field: ContentfulPromoVideoFieldsEnum;
};

export type ContentfulPromoVideoEdge = {
  __typename?: 'ContentfulPromoVideoEdge';
  next?: Maybe<ContentfulPromoVideo>;
  node: ContentfulPromoVideo;
  previous?: Maybe<ContentfulPromoVideo>;
};

export enum ContentfulPromoVideoFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalContentFilePath = 'children___children___internal___contentFilePath',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalContentFilePath = 'children___internal___contentFilePath',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalContentFilePath = 'children___parent___internal___contentFilePath',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalContentFilePath = 'internal___contentFilePath',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  NodeLocale = 'node_locale',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalContentFilePath = 'parent___children___internal___contentFilePath',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalContentFilePath = 'parent___internal___contentFilePath',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalContentFilePath = 'parent___parent___internal___contentFilePath',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  SpaceId = 'spaceId',
  SysContentTypeSysId = 'sys___contentType___sys___id',
  SysContentTypeSysLinkType = 'sys___contentType___sys___linkType',
  SysContentTypeSysType = 'sys___contentType___sys___type',
  SysRevision = 'sys___revision',
  SysType = 'sys___type',
  UpdatedAt = 'updatedAt',
  VideoChildren = 'video___children',
  VideoChildrenChildren = 'video___children___children',
  VideoChildrenChildrenChildren = 'video___children___children___children',
  VideoChildrenChildrenId = 'video___children___children___id',
  VideoChildrenId = 'video___children___id',
  VideoChildrenInternalContent = 'video___children___internal___content',
  VideoChildrenInternalContentDigest = 'video___children___internal___contentDigest',
  VideoChildrenInternalContentFilePath = 'video___children___internal___contentFilePath',
  VideoChildrenInternalDescription = 'video___children___internal___description',
  VideoChildrenInternalFieldOwners = 'video___children___internal___fieldOwners',
  VideoChildrenInternalIgnoreType = 'video___children___internal___ignoreType',
  VideoChildrenInternalMediaType = 'video___children___internal___mediaType',
  VideoChildrenInternalOwner = 'video___children___internal___owner',
  VideoChildrenInternalType = 'video___children___internal___type',
  VideoChildrenParentChildren = 'video___children___parent___children',
  VideoChildrenParentId = 'video___children___parent___id',
  VideoContentfulId = 'video___contentful_id',
  VideoCreatedAt = 'video___createdAt',
  VideoDescription = 'video___description',
  VideoFileContentType = 'video___file___contentType',
  VideoFileDetailsSize = 'video___file___details___size',
  VideoFileFileName = 'video___file___fileName',
  VideoFileUrl = 'video___file___url',
  VideoFilename = 'video___filename',
  VideoFilesize = 'video___filesize',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  VideoGatsbyImage = 'video___gatsbyImage',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  VideoGatsbyImageData = 'video___gatsbyImageData',
  VideoHeight = 'video___height',
  VideoId = 'video___id',
  VideoInternalContent = 'video___internal___content',
  VideoInternalContentDigest = 'video___internal___contentDigest',
  VideoInternalContentFilePath = 'video___internal___contentFilePath',
  VideoInternalDescription = 'video___internal___description',
  VideoInternalFieldOwners = 'video___internal___fieldOwners',
  VideoInternalIgnoreType = 'video___internal___ignoreType',
  VideoInternalMediaType = 'video___internal___mediaType',
  VideoInternalOwner = 'video___internal___owner',
  VideoInternalType = 'video___internal___type',
  VideoMimeType = 'video___mimeType',
  VideoNodeLocale = 'video___node_locale',
  VideoParentChildren = 'video___parent___children',
  VideoParentChildrenChildren = 'video___parent___children___children',
  VideoParentChildrenId = 'video___parent___children___id',
  VideoParentId = 'video___parent___id',
  VideoParentInternalContent = 'video___parent___internal___content',
  VideoParentInternalContentDigest = 'video___parent___internal___contentDigest',
  VideoParentInternalContentFilePath = 'video___parent___internal___contentFilePath',
  VideoParentInternalDescription = 'video___parent___internal___description',
  VideoParentInternalFieldOwners = 'video___parent___internal___fieldOwners',
  VideoParentInternalIgnoreType = 'video___parent___internal___ignoreType',
  VideoParentInternalMediaType = 'video___parent___internal___mediaType',
  VideoParentInternalOwner = 'video___parent___internal___owner',
  VideoParentInternalType = 'video___parent___internal___type',
  VideoParentParentChildren = 'video___parent___parent___children',
  VideoParentParentId = 'video___parent___parent___id',
  VideoPlaceholderUrl = 'video___placeholderUrl',
  VideoPublicUrl = 'video___publicUrl',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  VideoResizeHeight = 'video___resize___height',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  VideoResizeSrc = 'video___resize___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  VideoResizeWidth = 'video___resize___width',
  VideoSize = 'video___size',
  VideoSpaceId = 'video___spaceId',
  VideoSysRevision = 'video___sys___revision',
  VideoSysType = 'video___sys___type',
  VideoTitle = 'video___title',
  VideoUpdatedAt = 'video___updatedAt',
  VideoUrl = 'video___url',
  VideoWidth = 'video___width'
}

export type ContentfulPromoVideoFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulPromoVideoSysFilterInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  video?: InputMaybe<ContentfulAssetFilterInput>;
};

export type ContentfulPromoVideoGroupConnection = {
  __typename?: 'ContentfulPromoVideoGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<ContentfulPromoVideoEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<ContentfulPromoVideoGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<ContentfulPromoVideo>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type ContentfulPromoVideoGroupConnectionDistinctArgs = {
  field: ContentfulPromoVideoFieldsEnum;
};


export type ContentfulPromoVideoGroupConnectionGroupArgs = {
  field: ContentfulPromoVideoFieldsEnum;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulPromoVideoGroupConnectionMaxArgs = {
  field: ContentfulPromoVideoFieldsEnum;
};


export type ContentfulPromoVideoGroupConnectionMinArgs = {
  field: ContentfulPromoVideoFieldsEnum;
};


export type ContentfulPromoVideoGroupConnectionSumArgs = {
  field: ContentfulPromoVideoFieldsEnum;
};

export type ContentfulPromoVideoSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulPromoVideoFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulPromoVideoSys = {
  __typename?: 'ContentfulPromoVideoSys';
  contentType?: Maybe<ContentfulPromoVideoSysContentType>;
  revision?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ContentfulPromoVideoSysContentType = {
  __typename?: 'ContentfulPromoVideoSysContentType';
  sys?: Maybe<ContentfulPromoVideoSysContentTypeSys>;
};

export type ContentfulPromoVideoSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulPromoVideoSysContentTypeSysFilterInput>;
};

export type ContentfulPromoVideoSysContentTypeSys = {
  __typename?: 'ContentfulPromoVideoSysContentTypeSys';
  id?: Maybe<Scalars['String']['output']>;
  linkType?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ContentfulPromoVideoSysContentTypeSysFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulPromoVideoSysFilterInput = {
  contentType?: InputMaybe<ContentfulPromoVideoSysContentTypeFilterInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulReference = {
  contentful_id: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

export type ContentfulStage = ContentfulEntry & ContentfulReference & Node & {
  __typename?: 'ContentfulStage';
  artist?: Maybe<Array<Maybe<ContentfulArtist>>>;
  children: Array<Node>;
  contentful_id: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  internal: Internal;
  node_locale: Scalars['String']['output'];
  order: Scalars['Int']['output'];
  parent?: Maybe<Node>;
  spaceId?: Maybe<Scalars['String']['output']>;
  sys?: Maybe<ContentfulStageSys>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};


export type ContentfulStageCreatedAtArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type ContentfulStageUpdatedAtArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ContentfulStageConnection = {
  __typename?: 'ContentfulStageConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<ContentfulStageEdge>;
  group: Array<ContentfulStageGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<ContentfulStage>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type ContentfulStageConnectionDistinctArgs = {
  field: ContentfulStageFieldsEnum;
};


export type ContentfulStageConnectionGroupArgs = {
  field: ContentfulStageFieldsEnum;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulStageConnectionMaxArgs = {
  field: ContentfulStageFieldsEnum;
};


export type ContentfulStageConnectionMinArgs = {
  field: ContentfulStageFieldsEnum;
};


export type ContentfulStageConnectionSumArgs = {
  field: ContentfulStageFieldsEnum;
};

export type ContentfulStageEdge = {
  __typename?: 'ContentfulStageEdge';
  next?: Maybe<ContentfulStage>;
  node: ContentfulStage;
  previous?: Maybe<ContentfulStage>;
};

export enum ContentfulStageFieldsEnum {
  Artist = 'artist',
  ArtistChildren = 'artist___children',
  ArtistChildrenChildren = 'artist___children___children',
  ArtistChildrenChildrenChildren = 'artist___children___children___children',
  ArtistChildrenChildrenId = 'artist___children___children___id',
  ArtistChildrenId = 'artist___children___id',
  ArtistChildrenInternalContent = 'artist___children___internal___content',
  ArtistChildrenInternalContentDigest = 'artist___children___internal___contentDigest',
  ArtistChildrenInternalContentFilePath = 'artist___children___internal___contentFilePath',
  ArtistChildrenInternalDescription = 'artist___children___internal___description',
  ArtistChildrenInternalFieldOwners = 'artist___children___internal___fieldOwners',
  ArtistChildrenInternalIgnoreType = 'artist___children___internal___ignoreType',
  ArtistChildrenInternalMediaType = 'artist___children___internal___mediaType',
  ArtistChildrenInternalOwner = 'artist___children___internal___owner',
  ArtistChildrenInternalType = 'artist___children___internal___type',
  ArtistChildrenParentChildren = 'artist___children___parent___children',
  ArtistChildrenParentId = 'artist___children___parent___id',
  ArtistContentfulId = 'artist___contentful_id',
  ArtistCountryOfOrigin = 'artist___countryOfOrigin',
  ArtistCreatedAt = 'artist___createdAt',
  ArtistId = 'artist___id',
  ArtistInternalContent = 'artist___internal___content',
  ArtistInternalContentDigest = 'artist___internal___contentDigest',
  ArtistInternalContentFilePath = 'artist___internal___contentFilePath',
  ArtistInternalDescription = 'artist___internal___description',
  ArtistInternalFieldOwners = 'artist___internal___fieldOwners',
  ArtistInternalIgnoreType = 'artist___internal___ignoreType',
  ArtistInternalMediaType = 'artist___internal___mediaType',
  ArtistInternalOwner = 'artist___internal___owner',
  ArtistInternalType = 'artist___internal___type',
  ArtistLineup = 'artist___lineup',
  ArtistLineupArtists = 'artist___lineup___artists',
  ArtistLineupArtistsChildren = 'artist___lineup___artists___children',
  ArtistLineupArtistsContentfulId = 'artist___lineup___artists___contentful_id',
  ArtistLineupArtistsCountryOfOrigin = 'artist___lineup___artists___countryOfOrigin',
  ArtistLineupArtistsCreatedAt = 'artist___lineup___artists___createdAt',
  ArtistLineupArtistsId = 'artist___lineup___artists___id',
  ArtistLineupArtistsLineup = 'artist___lineup___artists___lineup',
  ArtistLineupArtistsName = 'artist___lineup___artists___name',
  ArtistLineupArtistsNodeLocale = 'artist___lineup___artists___node_locale',
  ArtistLineupArtistsSocialMediaLink = 'artist___lineup___artists___socialMediaLink',
  ArtistLineupArtistsSpaceId = 'artist___lineup___artists___spaceId',
  ArtistLineupArtistsUpdatedAt = 'artist___lineup___artists___updatedAt',
  ArtistLineupChildren = 'artist___lineup___children',
  ArtistLineupChildrenChildren = 'artist___lineup___children___children',
  ArtistLineupChildrenId = 'artist___lineup___children___id',
  ArtistLineupContentfulId = 'artist___lineup___contentful_id',
  ArtistLineupCreatedAt = 'artist___lineup___createdAt',
  ArtistLineupId = 'artist___lineup___id',
  ArtistLineupInternalContent = 'artist___lineup___internal___content',
  ArtistLineupInternalContentDigest = 'artist___lineup___internal___contentDigest',
  ArtistLineupInternalContentFilePath = 'artist___lineup___internal___contentFilePath',
  ArtistLineupInternalDescription = 'artist___lineup___internal___description',
  ArtistLineupInternalFieldOwners = 'artist___lineup___internal___fieldOwners',
  ArtistLineupInternalIgnoreType = 'artist___lineup___internal___ignoreType',
  ArtistLineupInternalMediaType = 'artist___lineup___internal___mediaType',
  ArtistLineupInternalOwner = 'artist___lineup___internal___owner',
  ArtistLineupInternalType = 'artist___lineup___internal___type',
  ArtistLineupName = 'artist___lineup___name',
  ArtistLineupNodeLocale = 'artist___lineup___node_locale',
  ArtistLineupParentChildren = 'artist___lineup___parent___children',
  ArtistLineupParentId = 'artist___lineup___parent___id',
  ArtistLineupSpaceId = 'artist___lineup___spaceId',
  ArtistLineupSysRevision = 'artist___lineup___sys___revision',
  ArtistLineupSysType = 'artist___lineup___sys___type',
  ArtistLineupUpdatedAt = 'artist___lineup___updatedAt',
  ArtistLineupUrl = 'artist___lineup___url',
  ArtistName = 'artist___name',
  ArtistNodeLocale = 'artist___node_locale',
  ArtistParentChildren = 'artist___parent___children',
  ArtistParentChildrenChildren = 'artist___parent___children___children',
  ArtistParentChildrenId = 'artist___parent___children___id',
  ArtistParentId = 'artist___parent___id',
  ArtistParentInternalContent = 'artist___parent___internal___content',
  ArtistParentInternalContentDigest = 'artist___parent___internal___contentDigest',
  ArtistParentInternalContentFilePath = 'artist___parent___internal___contentFilePath',
  ArtistParentInternalDescription = 'artist___parent___internal___description',
  ArtistParentInternalFieldOwners = 'artist___parent___internal___fieldOwners',
  ArtistParentInternalIgnoreType = 'artist___parent___internal___ignoreType',
  ArtistParentInternalMediaType = 'artist___parent___internal___mediaType',
  ArtistParentInternalOwner = 'artist___parent___internal___owner',
  ArtistParentInternalType = 'artist___parent___internal___type',
  ArtistParentParentChildren = 'artist___parent___parent___children',
  ArtistParentParentId = 'artist___parent___parent___id',
  ArtistPhotoChildren = 'artist___photo___children',
  ArtistPhotoChildrenChildren = 'artist___photo___children___children',
  ArtistPhotoChildrenId = 'artist___photo___children___id',
  ArtistPhotoContentfulId = 'artist___photo___contentful_id',
  ArtistPhotoCreatedAt = 'artist___photo___createdAt',
  ArtistPhotoDescription = 'artist___photo___description',
  ArtistPhotoFileContentType = 'artist___photo___file___contentType',
  ArtistPhotoFileFileName = 'artist___photo___file___fileName',
  ArtistPhotoFileUrl = 'artist___photo___file___url',
  ArtistPhotoFilename = 'artist___photo___filename',
  ArtistPhotoFilesize = 'artist___photo___filesize',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ArtistPhotoGatsbyImage = 'artist___photo___gatsbyImage',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ArtistPhotoGatsbyImageData = 'artist___photo___gatsbyImageData',
  ArtistPhotoHeight = 'artist___photo___height',
  ArtistPhotoId = 'artist___photo___id',
  ArtistPhotoInternalContent = 'artist___photo___internal___content',
  ArtistPhotoInternalContentDigest = 'artist___photo___internal___contentDigest',
  ArtistPhotoInternalContentFilePath = 'artist___photo___internal___contentFilePath',
  ArtistPhotoInternalDescription = 'artist___photo___internal___description',
  ArtistPhotoInternalFieldOwners = 'artist___photo___internal___fieldOwners',
  ArtistPhotoInternalIgnoreType = 'artist___photo___internal___ignoreType',
  ArtistPhotoInternalMediaType = 'artist___photo___internal___mediaType',
  ArtistPhotoInternalOwner = 'artist___photo___internal___owner',
  ArtistPhotoInternalType = 'artist___photo___internal___type',
  ArtistPhotoMimeType = 'artist___photo___mimeType',
  ArtistPhotoNodeLocale = 'artist___photo___node_locale',
  ArtistPhotoParentChildren = 'artist___photo___parent___children',
  ArtistPhotoParentId = 'artist___photo___parent___id',
  ArtistPhotoPlaceholderUrl = 'artist___photo___placeholderUrl',
  ArtistPhotoPublicUrl = 'artist___photo___publicUrl',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ArtistPhotoResizeHeight = 'artist___photo___resize___height',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ArtistPhotoResizeSrc = 'artist___photo___resize___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ArtistPhotoResizeWidth = 'artist___photo___resize___width',
  ArtistPhotoSize = 'artist___photo___size',
  ArtistPhotoSpaceId = 'artist___photo___spaceId',
  ArtistPhotoSysRevision = 'artist___photo___sys___revision',
  ArtistPhotoSysType = 'artist___photo___sys___type',
  ArtistPhotoTitle = 'artist___photo___title',
  ArtistPhotoUpdatedAt = 'artist___photo___updatedAt',
  ArtistPhotoUrl = 'artist___photo___url',
  ArtistPhotoWidth = 'artist___photo___width',
  ArtistSocialMediaLink = 'artist___socialMediaLink',
  ArtistSpaceId = 'artist___spaceId',
  ArtistStageArtist = 'artist___stage___artist',
  ArtistStageArtistChildren = 'artist___stage___artist___children',
  ArtistStageArtistContentfulId = 'artist___stage___artist___contentful_id',
  ArtistStageArtistCountryOfOrigin = 'artist___stage___artist___countryOfOrigin',
  ArtistStageArtistCreatedAt = 'artist___stage___artist___createdAt',
  ArtistStageArtistId = 'artist___stage___artist___id',
  ArtistStageArtistLineup = 'artist___stage___artist___lineup',
  ArtistStageArtistName = 'artist___stage___artist___name',
  ArtistStageArtistNodeLocale = 'artist___stage___artist___node_locale',
  ArtistStageArtistSocialMediaLink = 'artist___stage___artist___socialMediaLink',
  ArtistStageArtistSpaceId = 'artist___stage___artist___spaceId',
  ArtistStageArtistUpdatedAt = 'artist___stage___artist___updatedAt',
  ArtistStageChildren = 'artist___stage___children',
  ArtistStageChildrenChildren = 'artist___stage___children___children',
  ArtistStageChildrenId = 'artist___stage___children___id',
  ArtistStageContentfulId = 'artist___stage___contentful_id',
  ArtistStageCreatedAt = 'artist___stage___createdAt',
  ArtistStageId = 'artist___stage___id',
  ArtistStageInternalContent = 'artist___stage___internal___content',
  ArtistStageInternalContentDigest = 'artist___stage___internal___contentDigest',
  ArtistStageInternalContentFilePath = 'artist___stage___internal___contentFilePath',
  ArtistStageInternalDescription = 'artist___stage___internal___description',
  ArtistStageInternalFieldOwners = 'artist___stage___internal___fieldOwners',
  ArtistStageInternalIgnoreType = 'artist___stage___internal___ignoreType',
  ArtistStageInternalMediaType = 'artist___stage___internal___mediaType',
  ArtistStageInternalOwner = 'artist___stage___internal___owner',
  ArtistStageInternalType = 'artist___stage___internal___type',
  ArtistStageNodeLocale = 'artist___stage___node_locale',
  ArtistStageOrder = 'artist___stage___order',
  ArtistStageParentChildren = 'artist___stage___parent___children',
  ArtistStageParentId = 'artist___stage___parent___id',
  ArtistStageSpaceId = 'artist___stage___spaceId',
  ArtistStageSysRevision = 'artist___stage___sys___revision',
  ArtistStageSysType = 'artist___stage___sys___type',
  ArtistStageTitle = 'artist___stage___title',
  ArtistStageUpdatedAt = 'artist___stage___updatedAt',
  ArtistSysRevision = 'artist___sys___revision',
  ArtistSysType = 'artist___sys___type',
  ArtistUpdatedAt = 'artist___updatedAt',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalContentFilePath = 'children___children___internal___contentFilePath',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalContentFilePath = 'children___internal___contentFilePath',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalContentFilePath = 'children___parent___internal___contentFilePath',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalContentFilePath = 'internal___contentFilePath',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  NodeLocale = 'node_locale',
  Order = 'order',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalContentFilePath = 'parent___children___internal___contentFilePath',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalContentFilePath = 'parent___internal___contentFilePath',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalContentFilePath = 'parent___parent___internal___contentFilePath',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  SpaceId = 'spaceId',
  SysContentTypeSysId = 'sys___contentType___sys___id',
  SysContentTypeSysLinkType = 'sys___contentType___sys___linkType',
  SysContentTypeSysType = 'sys___contentType___sys___type',
  SysRevision = 'sys___revision',
  SysType = 'sys___type',
  Title = 'title',
  UpdatedAt = 'updatedAt'
}

export type ContentfulStageFilterInput = {
  artist?: InputMaybe<ContentfulArtistFilterListInput>;
  children?: InputMaybe<NodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  order?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulStageSysFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
};

export type ContentfulStageGroupConnection = {
  __typename?: 'ContentfulStageGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<ContentfulStageEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<ContentfulStageGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<ContentfulStage>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type ContentfulStageGroupConnectionDistinctArgs = {
  field: ContentfulStageFieldsEnum;
};


export type ContentfulStageGroupConnectionGroupArgs = {
  field: ContentfulStageFieldsEnum;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulStageGroupConnectionMaxArgs = {
  field: ContentfulStageFieldsEnum;
};


export type ContentfulStageGroupConnectionMinArgs = {
  field: ContentfulStageFieldsEnum;
};


export type ContentfulStageGroupConnectionSumArgs = {
  field: ContentfulStageFieldsEnum;
};

export type ContentfulStageSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulStageFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulStageSys = {
  __typename?: 'ContentfulStageSys';
  contentType?: Maybe<ContentfulStageSysContentType>;
  revision?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ContentfulStageSysContentType = {
  __typename?: 'ContentfulStageSysContentType';
  sys?: Maybe<ContentfulStageSysContentTypeSys>;
};

export type ContentfulStageSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulStageSysContentTypeSysFilterInput>;
};

export type ContentfulStageSysContentTypeSys = {
  __typename?: 'ContentfulStageSysContentTypeSys';
  id?: Maybe<Scalars['String']['output']>;
  linkType?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ContentfulStageSysContentTypeSysFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulStageSysFilterInput = {
  contentType?: InputMaybe<ContentfulStageSysContentTypeFilterInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type DateQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  ne?: InputMaybe<Scalars['Date']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
};

export type Directory = Node & {
  __typename?: 'Directory';
  absolutePath: Scalars['String']['output'];
  accessTime: Scalars['Date']['output'];
  atime: Scalars['Date']['output'];
  atimeMs: Scalars['Float']['output'];
  base: Scalars['String']['output'];
  birthTime: Scalars['Date']['output'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']['output']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']['output']>;
  changeTime: Scalars['Date']['output'];
  children: Array<Node>;
  ctime: Scalars['Date']['output'];
  ctimeMs: Scalars['Float']['output'];
  dev: Scalars['Int']['output'];
  dir: Scalars['String']['output'];
  ext: Scalars['String']['output'];
  extension: Scalars['String']['output'];
  gid: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  ino: Scalars['Float']['output'];
  internal: Internal;
  mode: Scalars['Int']['output'];
  modifiedTime: Scalars['Date']['output'];
  mtime: Scalars['Date']['output'];
  mtimeMs: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  nlink: Scalars['Int']['output'];
  parent?: Maybe<Node>;
  prettySize: Scalars['String']['output'];
  rdev: Scalars['Int']['output'];
  relativeDirectory: Scalars['String']['output'];
  relativePath: Scalars['String']['output'];
  root: Scalars['String']['output'];
  size: Scalars['Int']['output'];
  sourceInstanceName: Scalars['String']['output'];
  uid: Scalars['Int']['output'];
};


export type DirectoryAccessTimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type DirectoryAtimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type DirectoryBirthTimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type DirectoryChangeTimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type DirectoryCtimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type DirectoryModifiedTimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type DirectoryMtimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type DirectoryConnection = {
  __typename?: 'DirectoryConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<DirectoryEdge>;
  group: Array<DirectoryGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  field: DirectoryFieldsEnum;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  __typename?: 'DirectoryEdge';
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export enum DirectoryFieldsEnum {
  AbsolutePath = 'absolutePath',
  AccessTime = 'accessTime',
  Atime = 'atime',
  AtimeMs = 'atimeMs',
  Base = 'base',
  BirthTime = 'birthTime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  ChangeTime = 'changeTime',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalContentFilePath = 'children___children___internal___contentFilePath',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalContentFilePath = 'children___internal___contentFilePath',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalContentFilePath = 'children___parent___internal___contentFilePath',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Ctime = 'ctime',
  CtimeMs = 'ctimeMs',
  Dev = 'dev',
  Dir = 'dir',
  Ext = 'ext',
  Extension = 'extension',
  Gid = 'gid',
  Id = 'id',
  Ino = 'ino',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalContentFilePath = 'internal___contentFilePath',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Mode = 'mode',
  ModifiedTime = 'modifiedTime',
  Mtime = 'mtime',
  MtimeMs = 'mtimeMs',
  Name = 'name',
  Nlink = 'nlink',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalContentFilePath = 'parent___children___internal___contentFilePath',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalContentFilePath = 'parent___internal___contentFilePath',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalContentFilePath = 'parent___parent___internal___contentFilePath',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PrettySize = 'prettySize',
  Rdev = 'rdev',
  RelativeDirectory = 'relativeDirectory',
  RelativePath = 'relativePath',
  Root = 'root',
  Size = 'size',
  SourceInstanceName = 'sourceInstanceName',
  Uid = 'uid'
}

export type DirectoryFilterInput = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};

export type DirectoryGroupConnection = {
  __typename?: 'DirectoryGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<DirectoryEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<DirectoryGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionGroupArgs = {
  field: DirectoryFieldsEnum;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type DirectoryGroupConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectorySortInput = {
  fields?: InputMaybe<Array<InputMaybe<DirectoryFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars['String']['input'];
  opacity?: InputMaybe<Scalars['Int']['input']>;
  shadow: Scalars['String']['input'];
};

export type File = Node & {
  __typename?: 'File';
  absolutePath: Scalars['String']['output'];
  accessTime: Scalars['Date']['output'];
  atime: Scalars['Date']['output'];
  atimeMs: Scalars['Float']['output'];
  base: Scalars['String']['output'];
  birthTime: Scalars['Date']['output'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']['output']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']['output']>;
  blksize?: Maybe<Scalars['Int']['output']>;
  blocks?: Maybe<Scalars['Int']['output']>;
  changeTime: Scalars['Date']['output'];
  /** Returns the first child node of type ArtistsJson or null if there are no children of given type on this node */
  childArtistsJson?: Maybe<ArtistsJson>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  /** Returns the first child node of type InfoItemsJson or null if there are no children of given type on this node */
  childInfoItemsJson?: Maybe<InfoItemsJson>;
  children: Array<Node>;
  /** Returns all children nodes filtered by type ArtistsJson */
  childrenArtistsJson?: Maybe<Array<Maybe<ArtistsJson>>>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  /** Returns all children nodes filtered by type InfoItemsJson */
  childrenInfoItemsJson?: Maybe<Array<Maybe<InfoItemsJson>>>;
  ctime: Scalars['Date']['output'];
  ctimeMs: Scalars['Float']['output'];
  dev: Scalars['Int']['output'];
  dir: Scalars['String']['output'];
  ext: Scalars['String']['output'];
  extension: Scalars['String']['output'];
  gid: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  ino: Scalars['Float']['output'];
  internal: Internal;
  mode: Scalars['Int']['output'];
  modifiedTime: Scalars['Date']['output'];
  mtime: Scalars['Date']['output'];
  mtimeMs: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  nlink: Scalars['Int']['output'];
  parent?: Maybe<Node>;
  prettySize: Scalars['String']['output'];
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']['output']>;
  rdev: Scalars['Int']['output'];
  relativeDirectory: Scalars['String']['output'];
  relativePath: Scalars['String']['output'];
  root: Scalars['String']['output'];
  size: Scalars['Int']['output'];
  sourceInstanceName: Scalars['String']['output'];
  uid: Scalars['Int']['output'];
};


export type FileAccessTimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type FileAtimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type FileBirthTimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type FileChangeTimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type FileCtimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type FileModifiedTimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type FileMtimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type FileConnection = {
  __typename?: 'FileConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<FileEdge>;
  group: Array<FileGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  field: FileFieldsEnum;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type FileConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionSumArgs = {
  field: FileFieldsEnum;
};

export type FileEdge = {
  __typename?: 'FileEdge';
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export enum FileFieldsEnum {
  AbsolutePath = 'absolutePath',
  AccessTime = 'accessTime',
  Atime = 'atime',
  AtimeMs = 'atimeMs',
  Base = 'base',
  BirthTime = 'birthTime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  ChangeTime = 'changeTime',
  ChildArtistsJsonChildren = 'childArtistsJson___children',
  ChildArtistsJsonChildrenChildren = 'childArtistsJson___children___children',
  ChildArtistsJsonChildrenChildrenChildren = 'childArtistsJson___children___children___children',
  ChildArtistsJsonChildrenChildrenId = 'childArtistsJson___children___children___id',
  ChildArtistsJsonChildrenId = 'childArtistsJson___children___id',
  ChildArtistsJsonChildrenInternalContent = 'childArtistsJson___children___internal___content',
  ChildArtistsJsonChildrenInternalContentDigest = 'childArtistsJson___children___internal___contentDigest',
  ChildArtistsJsonChildrenInternalContentFilePath = 'childArtistsJson___children___internal___contentFilePath',
  ChildArtistsJsonChildrenInternalDescription = 'childArtistsJson___children___internal___description',
  ChildArtistsJsonChildrenInternalFieldOwners = 'childArtistsJson___children___internal___fieldOwners',
  ChildArtistsJsonChildrenInternalIgnoreType = 'childArtistsJson___children___internal___ignoreType',
  ChildArtistsJsonChildrenInternalMediaType = 'childArtistsJson___children___internal___mediaType',
  ChildArtistsJsonChildrenInternalOwner = 'childArtistsJson___children___internal___owner',
  ChildArtistsJsonChildrenInternalType = 'childArtistsJson___children___internal___type',
  ChildArtistsJsonChildrenParentChildren = 'childArtistsJson___children___parent___children',
  ChildArtistsJsonChildrenParentId = 'childArtistsJson___children___parent___id',
  ChildArtistsJsonCountry = 'childArtistsJson___country',
  ChildArtistsJsonId = 'childArtistsJson___id',
  ChildArtistsJsonImages = 'childArtistsJson___images',
  ChildArtistsJsonInternalContent = 'childArtistsJson___internal___content',
  ChildArtistsJsonInternalContentDigest = 'childArtistsJson___internal___contentDigest',
  ChildArtistsJsonInternalContentFilePath = 'childArtistsJson___internal___contentFilePath',
  ChildArtistsJsonInternalDescription = 'childArtistsJson___internal___description',
  ChildArtistsJsonInternalFieldOwners = 'childArtistsJson___internal___fieldOwners',
  ChildArtistsJsonInternalIgnoreType = 'childArtistsJson___internal___ignoreType',
  ChildArtistsJsonInternalMediaType = 'childArtistsJson___internal___mediaType',
  ChildArtistsJsonInternalOwner = 'childArtistsJson___internal___owner',
  ChildArtistsJsonInternalType = 'childArtistsJson___internal___type',
  ChildArtistsJsonLinks = 'childArtistsJson___links',
  ChildArtistsJsonOrder = 'childArtistsJson___order',
  ChildArtistsJsonParentChildren = 'childArtistsJson___parent___children',
  ChildArtistsJsonParentChildrenChildren = 'childArtistsJson___parent___children___children',
  ChildArtistsJsonParentChildrenId = 'childArtistsJson___parent___children___id',
  ChildArtistsJsonParentId = 'childArtistsJson___parent___id',
  ChildArtistsJsonParentInternalContent = 'childArtistsJson___parent___internal___content',
  ChildArtistsJsonParentInternalContentDigest = 'childArtistsJson___parent___internal___contentDigest',
  ChildArtistsJsonParentInternalContentFilePath = 'childArtistsJson___parent___internal___contentFilePath',
  ChildArtistsJsonParentInternalDescription = 'childArtistsJson___parent___internal___description',
  ChildArtistsJsonParentInternalFieldOwners = 'childArtistsJson___parent___internal___fieldOwners',
  ChildArtistsJsonParentInternalIgnoreType = 'childArtistsJson___parent___internal___ignoreType',
  ChildArtistsJsonParentInternalMediaType = 'childArtistsJson___parent___internal___mediaType',
  ChildArtistsJsonParentInternalOwner = 'childArtistsJson___parent___internal___owner',
  ChildArtistsJsonParentInternalType = 'childArtistsJson___parent___internal___type',
  ChildArtistsJsonParentParentChildren = 'childArtistsJson___parent___parent___children',
  ChildArtistsJsonParentParentId = 'childArtistsJson___parent___parent___id',
  ChildArtistsJsonStage = 'childArtistsJson___stage',
  ChildArtistsJsonTitle = 'childArtistsJson___title',
  ChildArtistsJsonUid = 'childArtistsJson___uid',
  ChildImageSharpChildren = 'childImageSharp___children',
  ChildImageSharpChildrenChildren = 'childImageSharp___children___children',
  ChildImageSharpChildrenChildrenChildren = 'childImageSharp___children___children___children',
  ChildImageSharpChildrenChildrenId = 'childImageSharp___children___children___id',
  ChildImageSharpChildrenId = 'childImageSharp___children___id',
  ChildImageSharpChildrenInternalContent = 'childImageSharp___children___internal___content',
  ChildImageSharpChildrenInternalContentDigest = 'childImageSharp___children___internal___contentDigest',
  ChildImageSharpChildrenInternalContentFilePath = 'childImageSharp___children___internal___contentFilePath',
  ChildImageSharpChildrenInternalDescription = 'childImageSharp___children___internal___description',
  ChildImageSharpChildrenInternalFieldOwners = 'childImageSharp___children___internal___fieldOwners',
  ChildImageSharpChildrenInternalIgnoreType = 'childImageSharp___children___internal___ignoreType',
  ChildImageSharpChildrenInternalMediaType = 'childImageSharp___children___internal___mediaType',
  ChildImageSharpChildrenInternalOwner = 'childImageSharp___children___internal___owner',
  ChildImageSharpChildrenInternalType = 'childImageSharp___children___internal___type',
  ChildImageSharpChildrenParentChildren = 'childImageSharp___children___parent___children',
  ChildImageSharpChildrenParentId = 'childImageSharp___children___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFixedAspectRatio = 'childImageSharp___fixed___aspectRatio',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFixedBase64 = 'childImageSharp___fixed___base64',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFixedHeight = 'childImageSharp___fixed___height',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFixedOriginalName = 'childImageSharp___fixed___originalName',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFixedSrc = 'childImageSharp___fixed___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFixedSrcSet = 'childImageSharp___fixed___srcSet',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFixedSrcSetWebp = 'childImageSharp___fixed___srcSetWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFixedSrcWebp = 'childImageSharp___fixed___srcWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFixedTracedSvg = 'childImageSharp___fixed___tracedSVG',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFixedWidth = 'childImageSharp___fixed___width',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFluidAspectRatio = 'childImageSharp___fluid___aspectRatio',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFluidBase64 = 'childImageSharp___fluid___base64',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFluidOriginalImg = 'childImageSharp___fluid___originalImg',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFluidOriginalName = 'childImageSharp___fluid___originalName',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFluidPresentationHeight = 'childImageSharp___fluid___presentationHeight',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFluidPresentationWidth = 'childImageSharp___fluid___presentationWidth',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFluidSizes = 'childImageSharp___fluid___sizes',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFluidSrc = 'childImageSharp___fluid___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFluidSrcSet = 'childImageSharp___fluid___srcSet',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFluidSrcSetWebp = 'childImageSharp___fluid___srcSetWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFluidSrcWebp = 'childImageSharp___fluid___srcWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFluidTracedSvg = 'childImageSharp___fluid___tracedSVG',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpGatsbyImageData = 'childImageSharp___gatsbyImageData',
  ChildImageSharpId = 'childImageSharp___id',
  ChildImageSharpInternalContent = 'childImageSharp___internal___content',
  ChildImageSharpInternalContentDigest = 'childImageSharp___internal___contentDigest',
  ChildImageSharpInternalContentFilePath = 'childImageSharp___internal___contentFilePath',
  ChildImageSharpInternalDescription = 'childImageSharp___internal___description',
  ChildImageSharpInternalFieldOwners = 'childImageSharp___internal___fieldOwners',
  ChildImageSharpInternalIgnoreType = 'childImageSharp___internal___ignoreType',
  ChildImageSharpInternalMediaType = 'childImageSharp___internal___mediaType',
  ChildImageSharpInternalOwner = 'childImageSharp___internal___owner',
  ChildImageSharpInternalType = 'childImageSharp___internal___type',
  ChildImageSharpOriginalHeight = 'childImageSharp___original___height',
  ChildImageSharpOriginalSrc = 'childImageSharp___original___src',
  ChildImageSharpOriginalWidth = 'childImageSharp___original___width',
  ChildImageSharpParentChildren = 'childImageSharp___parent___children',
  ChildImageSharpParentChildrenChildren = 'childImageSharp___parent___children___children',
  ChildImageSharpParentChildrenId = 'childImageSharp___parent___children___id',
  ChildImageSharpParentId = 'childImageSharp___parent___id',
  ChildImageSharpParentInternalContent = 'childImageSharp___parent___internal___content',
  ChildImageSharpParentInternalContentDigest = 'childImageSharp___parent___internal___contentDigest',
  ChildImageSharpParentInternalContentFilePath = 'childImageSharp___parent___internal___contentFilePath',
  ChildImageSharpParentInternalDescription = 'childImageSharp___parent___internal___description',
  ChildImageSharpParentInternalFieldOwners = 'childImageSharp___parent___internal___fieldOwners',
  ChildImageSharpParentInternalIgnoreType = 'childImageSharp___parent___internal___ignoreType',
  ChildImageSharpParentInternalMediaType = 'childImageSharp___parent___internal___mediaType',
  ChildImageSharpParentInternalOwner = 'childImageSharp___parent___internal___owner',
  ChildImageSharpParentInternalType = 'childImageSharp___parent___internal___type',
  ChildImageSharpParentParentChildren = 'childImageSharp___parent___parent___children',
  ChildImageSharpParentParentId = 'childImageSharp___parent___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpResizeAspectRatio = 'childImageSharp___resize___aspectRatio',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpResizeHeight = 'childImageSharp___resize___height',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpResizeOriginalName = 'childImageSharp___resize___originalName',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpResizeSrc = 'childImageSharp___resize___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpResizeTracedSvg = 'childImageSharp___resize___tracedSVG',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpResizeWidth = 'childImageSharp___resize___width',
  ChildInfoItemsJsonChildren = 'childInfoItemsJson___children',
  ChildInfoItemsJsonChildrenChildren = 'childInfoItemsJson___children___children',
  ChildInfoItemsJsonChildrenChildrenChildren = 'childInfoItemsJson___children___children___children',
  ChildInfoItemsJsonChildrenChildrenId = 'childInfoItemsJson___children___children___id',
  ChildInfoItemsJsonChildrenId = 'childInfoItemsJson___children___id',
  ChildInfoItemsJsonChildrenInternalContent = 'childInfoItemsJson___children___internal___content',
  ChildInfoItemsJsonChildrenInternalContentDigest = 'childInfoItemsJson___children___internal___contentDigest',
  ChildInfoItemsJsonChildrenInternalContentFilePath = 'childInfoItemsJson___children___internal___contentFilePath',
  ChildInfoItemsJsonChildrenInternalDescription = 'childInfoItemsJson___children___internal___description',
  ChildInfoItemsJsonChildrenInternalFieldOwners = 'childInfoItemsJson___children___internal___fieldOwners',
  ChildInfoItemsJsonChildrenInternalIgnoreType = 'childInfoItemsJson___children___internal___ignoreType',
  ChildInfoItemsJsonChildrenInternalMediaType = 'childInfoItemsJson___children___internal___mediaType',
  ChildInfoItemsJsonChildrenInternalOwner = 'childInfoItemsJson___children___internal___owner',
  ChildInfoItemsJsonChildrenInternalType = 'childInfoItemsJson___children___internal___type',
  ChildInfoItemsJsonChildrenParentChildren = 'childInfoItemsJson___children___parent___children',
  ChildInfoItemsJsonChildrenParentId = 'childInfoItemsJson___children___parent___id',
  ChildInfoItemsJsonDescription = 'childInfoItemsJson___description',
  ChildInfoItemsJsonId = 'childInfoItemsJson___id',
  ChildInfoItemsJsonImage = 'childInfoItemsJson___image',
  ChildInfoItemsJsonInternalContent = 'childInfoItemsJson___internal___content',
  ChildInfoItemsJsonInternalContentDigest = 'childInfoItemsJson___internal___contentDigest',
  ChildInfoItemsJsonInternalContentFilePath = 'childInfoItemsJson___internal___contentFilePath',
  ChildInfoItemsJsonInternalDescription = 'childInfoItemsJson___internal___description',
  ChildInfoItemsJsonInternalFieldOwners = 'childInfoItemsJson___internal___fieldOwners',
  ChildInfoItemsJsonInternalIgnoreType = 'childInfoItemsJson___internal___ignoreType',
  ChildInfoItemsJsonInternalMediaType = 'childInfoItemsJson___internal___mediaType',
  ChildInfoItemsJsonInternalOwner = 'childInfoItemsJson___internal___owner',
  ChildInfoItemsJsonInternalType = 'childInfoItemsJson___internal___type',
  ChildInfoItemsJsonParentChildren = 'childInfoItemsJson___parent___children',
  ChildInfoItemsJsonParentChildrenChildren = 'childInfoItemsJson___parent___children___children',
  ChildInfoItemsJsonParentChildrenId = 'childInfoItemsJson___parent___children___id',
  ChildInfoItemsJsonParentId = 'childInfoItemsJson___parent___id',
  ChildInfoItemsJsonParentInternalContent = 'childInfoItemsJson___parent___internal___content',
  ChildInfoItemsJsonParentInternalContentDigest = 'childInfoItemsJson___parent___internal___contentDigest',
  ChildInfoItemsJsonParentInternalContentFilePath = 'childInfoItemsJson___parent___internal___contentFilePath',
  ChildInfoItemsJsonParentInternalDescription = 'childInfoItemsJson___parent___internal___description',
  ChildInfoItemsJsonParentInternalFieldOwners = 'childInfoItemsJson___parent___internal___fieldOwners',
  ChildInfoItemsJsonParentInternalIgnoreType = 'childInfoItemsJson___parent___internal___ignoreType',
  ChildInfoItemsJsonParentInternalMediaType = 'childInfoItemsJson___parent___internal___mediaType',
  ChildInfoItemsJsonParentInternalOwner = 'childInfoItemsJson___parent___internal___owner',
  ChildInfoItemsJsonParentInternalType = 'childInfoItemsJson___parent___internal___type',
  ChildInfoItemsJsonParentParentChildren = 'childInfoItemsJson___parent___parent___children',
  ChildInfoItemsJsonParentParentId = 'childInfoItemsJson___parent___parent___id',
  ChildInfoItemsJsonTitle = 'childInfoItemsJson___title',
  Children = 'children',
  ChildrenArtistsJson = 'childrenArtistsJson',
  ChildrenArtistsJsonChildren = 'childrenArtistsJson___children',
  ChildrenArtistsJsonChildrenChildren = 'childrenArtistsJson___children___children',
  ChildrenArtistsJsonChildrenChildrenChildren = 'childrenArtistsJson___children___children___children',
  ChildrenArtistsJsonChildrenChildrenId = 'childrenArtistsJson___children___children___id',
  ChildrenArtistsJsonChildrenId = 'childrenArtistsJson___children___id',
  ChildrenArtistsJsonChildrenInternalContent = 'childrenArtistsJson___children___internal___content',
  ChildrenArtistsJsonChildrenInternalContentDigest = 'childrenArtistsJson___children___internal___contentDigest',
  ChildrenArtistsJsonChildrenInternalContentFilePath = 'childrenArtistsJson___children___internal___contentFilePath',
  ChildrenArtistsJsonChildrenInternalDescription = 'childrenArtistsJson___children___internal___description',
  ChildrenArtistsJsonChildrenInternalFieldOwners = 'childrenArtistsJson___children___internal___fieldOwners',
  ChildrenArtistsJsonChildrenInternalIgnoreType = 'childrenArtistsJson___children___internal___ignoreType',
  ChildrenArtistsJsonChildrenInternalMediaType = 'childrenArtistsJson___children___internal___mediaType',
  ChildrenArtistsJsonChildrenInternalOwner = 'childrenArtistsJson___children___internal___owner',
  ChildrenArtistsJsonChildrenInternalType = 'childrenArtistsJson___children___internal___type',
  ChildrenArtistsJsonChildrenParentChildren = 'childrenArtistsJson___children___parent___children',
  ChildrenArtistsJsonChildrenParentId = 'childrenArtistsJson___children___parent___id',
  ChildrenArtistsJsonCountry = 'childrenArtistsJson___country',
  ChildrenArtistsJsonId = 'childrenArtistsJson___id',
  ChildrenArtistsJsonImages = 'childrenArtistsJson___images',
  ChildrenArtistsJsonInternalContent = 'childrenArtistsJson___internal___content',
  ChildrenArtistsJsonInternalContentDigest = 'childrenArtistsJson___internal___contentDigest',
  ChildrenArtistsJsonInternalContentFilePath = 'childrenArtistsJson___internal___contentFilePath',
  ChildrenArtistsJsonInternalDescription = 'childrenArtistsJson___internal___description',
  ChildrenArtistsJsonInternalFieldOwners = 'childrenArtistsJson___internal___fieldOwners',
  ChildrenArtistsJsonInternalIgnoreType = 'childrenArtistsJson___internal___ignoreType',
  ChildrenArtistsJsonInternalMediaType = 'childrenArtistsJson___internal___mediaType',
  ChildrenArtistsJsonInternalOwner = 'childrenArtistsJson___internal___owner',
  ChildrenArtistsJsonInternalType = 'childrenArtistsJson___internal___type',
  ChildrenArtistsJsonLinks = 'childrenArtistsJson___links',
  ChildrenArtistsJsonOrder = 'childrenArtistsJson___order',
  ChildrenArtistsJsonParentChildren = 'childrenArtistsJson___parent___children',
  ChildrenArtistsJsonParentChildrenChildren = 'childrenArtistsJson___parent___children___children',
  ChildrenArtistsJsonParentChildrenId = 'childrenArtistsJson___parent___children___id',
  ChildrenArtistsJsonParentId = 'childrenArtistsJson___parent___id',
  ChildrenArtistsJsonParentInternalContent = 'childrenArtistsJson___parent___internal___content',
  ChildrenArtistsJsonParentInternalContentDigest = 'childrenArtistsJson___parent___internal___contentDigest',
  ChildrenArtistsJsonParentInternalContentFilePath = 'childrenArtistsJson___parent___internal___contentFilePath',
  ChildrenArtistsJsonParentInternalDescription = 'childrenArtistsJson___parent___internal___description',
  ChildrenArtistsJsonParentInternalFieldOwners = 'childrenArtistsJson___parent___internal___fieldOwners',
  ChildrenArtistsJsonParentInternalIgnoreType = 'childrenArtistsJson___parent___internal___ignoreType',
  ChildrenArtistsJsonParentInternalMediaType = 'childrenArtistsJson___parent___internal___mediaType',
  ChildrenArtistsJsonParentInternalOwner = 'childrenArtistsJson___parent___internal___owner',
  ChildrenArtistsJsonParentInternalType = 'childrenArtistsJson___parent___internal___type',
  ChildrenArtistsJsonParentParentChildren = 'childrenArtistsJson___parent___parent___children',
  ChildrenArtistsJsonParentParentId = 'childrenArtistsJson___parent___parent___id',
  ChildrenArtistsJsonStage = 'childrenArtistsJson___stage',
  ChildrenArtistsJsonTitle = 'childrenArtistsJson___title',
  ChildrenArtistsJsonUid = 'childrenArtistsJson___uid',
  ChildrenImageSharp = 'childrenImageSharp',
  ChildrenImageSharpChildren = 'childrenImageSharp___children',
  ChildrenImageSharpChildrenChildren = 'childrenImageSharp___children___children',
  ChildrenImageSharpChildrenChildrenChildren = 'childrenImageSharp___children___children___children',
  ChildrenImageSharpChildrenChildrenId = 'childrenImageSharp___children___children___id',
  ChildrenImageSharpChildrenId = 'childrenImageSharp___children___id',
  ChildrenImageSharpChildrenInternalContent = 'childrenImageSharp___children___internal___content',
  ChildrenImageSharpChildrenInternalContentDigest = 'childrenImageSharp___children___internal___contentDigest',
  ChildrenImageSharpChildrenInternalContentFilePath = 'childrenImageSharp___children___internal___contentFilePath',
  ChildrenImageSharpChildrenInternalDescription = 'childrenImageSharp___children___internal___description',
  ChildrenImageSharpChildrenInternalFieldOwners = 'childrenImageSharp___children___internal___fieldOwners',
  ChildrenImageSharpChildrenInternalIgnoreType = 'childrenImageSharp___children___internal___ignoreType',
  ChildrenImageSharpChildrenInternalMediaType = 'childrenImageSharp___children___internal___mediaType',
  ChildrenImageSharpChildrenInternalOwner = 'childrenImageSharp___children___internal___owner',
  ChildrenImageSharpChildrenInternalType = 'childrenImageSharp___children___internal___type',
  ChildrenImageSharpChildrenParentChildren = 'childrenImageSharp___children___parent___children',
  ChildrenImageSharpChildrenParentId = 'childrenImageSharp___children___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFixedAspectRatio = 'childrenImageSharp___fixed___aspectRatio',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFixedBase64 = 'childrenImageSharp___fixed___base64',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFixedHeight = 'childrenImageSharp___fixed___height',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFixedOriginalName = 'childrenImageSharp___fixed___originalName',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFixedSrc = 'childrenImageSharp___fixed___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFixedSrcSet = 'childrenImageSharp___fixed___srcSet',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFixedSrcSetWebp = 'childrenImageSharp___fixed___srcSetWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFixedSrcWebp = 'childrenImageSharp___fixed___srcWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFixedTracedSvg = 'childrenImageSharp___fixed___tracedSVG',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFixedWidth = 'childrenImageSharp___fixed___width',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFluidAspectRatio = 'childrenImageSharp___fluid___aspectRatio',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFluidBase64 = 'childrenImageSharp___fluid___base64',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFluidOriginalImg = 'childrenImageSharp___fluid___originalImg',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFluidOriginalName = 'childrenImageSharp___fluid___originalName',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFluidPresentationHeight = 'childrenImageSharp___fluid___presentationHeight',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFluidPresentationWidth = 'childrenImageSharp___fluid___presentationWidth',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFluidSizes = 'childrenImageSharp___fluid___sizes',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFluidSrc = 'childrenImageSharp___fluid___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFluidSrcSet = 'childrenImageSharp___fluid___srcSet',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFluidSrcSetWebp = 'childrenImageSharp___fluid___srcSetWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFluidSrcWebp = 'childrenImageSharp___fluid___srcWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFluidTracedSvg = 'childrenImageSharp___fluid___tracedSVG',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpGatsbyImageData = 'childrenImageSharp___gatsbyImageData',
  ChildrenImageSharpId = 'childrenImageSharp___id',
  ChildrenImageSharpInternalContent = 'childrenImageSharp___internal___content',
  ChildrenImageSharpInternalContentDigest = 'childrenImageSharp___internal___contentDigest',
  ChildrenImageSharpInternalContentFilePath = 'childrenImageSharp___internal___contentFilePath',
  ChildrenImageSharpInternalDescription = 'childrenImageSharp___internal___description',
  ChildrenImageSharpInternalFieldOwners = 'childrenImageSharp___internal___fieldOwners',
  ChildrenImageSharpInternalIgnoreType = 'childrenImageSharp___internal___ignoreType',
  ChildrenImageSharpInternalMediaType = 'childrenImageSharp___internal___mediaType',
  ChildrenImageSharpInternalOwner = 'childrenImageSharp___internal___owner',
  ChildrenImageSharpInternalType = 'childrenImageSharp___internal___type',
  ChildrenImageSharpOriginalHeight = 'childrenImageSharp___original___height',
  ChildrenImageSharpOriginalSrc = 'childrenImageSharp___original___src',
  ChildrenImageSharpOriginalWidth = 'childrenImageSharp___original___width',
  ChildrenImageSharpParentChildren = 'childrenImageSharp___parent___children',
  ChildrenImageSharpParentChildrenChildren = 'childrenImageSharp___parent___children___children',
  ChildrenImageSharpParentChildrenId = 'childrenImageSharp___parent___children___id',
  ChildrenImageSharpParentId = 'childrenImageSharp___parent___id',
  ChildrenImageSharpParentInternalContent = 'childrenImageSharp___parent___internal___content',
  ChildrenImageSharpParentInternalContentDigest = 'childrenImageSharp___parent___internal___contentDigest',
  ChildrenImageSharpParentInternalContentFilePath = 'childrenImageSharp___parent___internal___contentFilePath',
  ChildrenImageSharpParentInternalDescription = 'childrenImageSharp___parent___internal___description',
  ChildrenImageSharpParentInternalFieldOwners = 'childrenImageSharp___parent___internal___fieldOwners',
  ChildrenImageSharpParentInternalIgnoreType = 'childrenImageSharp___parent___internal___ignoreType',
  ChildrenImageSharpParentInternalMediaType = 'childrenImageSharp___parent___internal___mediaType',
  ChildrenImageSharpParentInternalOwner = 'childrenImageSharp___parent___internal___owner',
  ChildrenImageSharpParentInternalType = 'childrenImageSharp___parent___internal___type',
  ChildrenImageSharpParentParentChildren = 'childrenImageSharp___parent___parent___children',
  ChildrenImageSharpParentParentId = 'childrenImageSharp___parent___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpResizeAspectRatio = 'childrenImageSharp___resize___aspectRatio',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpResizeHeight = 'childrenImageSharp___resize___height',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpResizeOriginalName = 'childrenImageSharp___resize___originalName',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpResizeSrc = 'childrenImageSharp___resize___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpResizeTracedSvg = 'childrenImageSharp___resize___tracedSVG',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpResizeWidth = 'childrenImageSharp___resize___width',
  ChildrenInfoItemsJson = 'childrenInfoItemsJson',
  ChildrenInfoItemsJsonChildren = 'childrenInfoItemsJson___children',
  ChildrenInfoItemsJsonChildrenChildren = 'childrenInfoItemsJson___children___children',
  ChildrenInfoItemsJsonChildrenChildrenChildren = 'childrenInfoItemsJson___children___children___children',
  ChildrenInfoItemsJsonChildrenChildrenId = 'childrenInfoItemsJson___children___children___id',
  ChildrenInfoItemsJsonChildrenId = 'childrenInfoItemsJson___children___id',
  ChildrenInfoItemsJsonChildrenInternalContent = 'childrenInfoItemsJson___children___internal___content',
  ChildrenInfoItemsJsonChildrenInternalContentDigest = 'childrenInfoItemsJson___children___internal___contentDigest',
  ChildrenInfoItemsJsonChildrenInternalContentFilePath = 'childrenInfoItemsJson___children___internal___contentFilePath',
  ChildrenInfoItemsJsonChildrenInternalDescription = 'childrenInfoItemsJson___children___internal___description',
  ChildrenInfoItemsJsonChildrenInternalFieldOwners = 'childrenInfoItemsJson___children___internal___fieldOwners',
  ChildrenInfoItemsJsonChildrenInternalIgnoreType = 'childrenInfoItemsJson___children___internal___ignoreType',
  ChildrenInfoItemsJsonChildrenInternalMediaType = 'childrenInfoItemsJson___children___internal___mediaType',
  ChildrenInfoItemsJsonChildrenInternalOwner = 'childrenInfoItemsJson___children___internal___owner',
  ChildrenInfoItemsJsonChildrenInternalType = 'childrenInfoItemsJson___children___internal___type',
  ChildrenInfoItemsJsonChildrenParentChildren = 'childrenInfoItemsJson___children___parent___children',
  ChildrenInfoItemsJsonChildrenParentId = 'childrenInfoItemsJson___children___parent___id',
  ChildrenInfoItemsJsonDescription = 'childrenInfoItemsJson___description',
  ChildrenInfoItemsJsonId = 'childrenInfoItemsJson___id',
  ChildrenInfoItemsJsonImage = 'childrenInfoItemsJson___image',
  ChildrenInfoItemsJsonInternalContent = 'childrenInfoItemsJson___internal___content',
  ChildrenInfoItemsJsonInternalContentDigest = 'childrenInfoItemsJson___internal___contentDigest',
  ChildrenInfoItemsJsonInternalContentFilePath = 'childrenInfoItemsJson___internal___contentFilePath',
  ChildrenInfoItemsJsonInternalDescription = 'childrenInfoItemsJson___internal___description',
  ChildrenInfoItemsJsonInternalFieldOwners = 'childrenInfoItemsJson___internal___fieldOwners',
  ChildrenInfoItemsJsonInternalIgnoreType = 'childrenInfoItemsJson___internal___ignoreType',
  ChildrenInfoItemsJsonInternalMediaType = 'childrenInfoItemsJson___internal___mediaType',
  ChildrenInfoItemsJsonInternalOwner = 'childrenInfoItemsJson___internal___owner',
  ChildrenInfoItemsJsonInternalType = 'childrenInfoItemsJson___internal___type',
  ChildrenInfoItemsJsonParentChildren = 'childrenInfoItemsJson___parent___children',
  ChildrenInfoItemsJsonParentChildrenChildren = 'childrenInfoItemsJson___parent___children___children',
  ChildrenInfoItemsJsonParentChildrenId = 'childrenInfoItemsJson___parent___children___id',
  ChildrenInfoItemsJsonParentId = 'childrenInfoItemsJson___parent___id',
  ChildrenInfoItemsJsonParentInternalContent = 'childrenInfoItemsJson___parent___internal___content',
  ChildrenInfoItemsJsonParentInternalContentDigest = 'childrenInfoItemsJson___parent___internal___contentDigest',
  ChildrenInfoItemsJsonParentInternalContentFilePath = 'childrenInfoItemsJson___parent___internal___contentFilePath',
  ChildrenInfoItemsJsonParentInternalDescription = 'childrenInfoItemsJson___parent___internal___description',
  ChildrenInfoItemsJsonParentInternalFieldOwners = 'childrenInfoItemsJson___parent___internal___fieldOwners',
  ChildrenInfoItemsJsonParentInternalIgnoreType = 'childrenInfoItemsJson___parent___internal___ignoreType',
  ChildrenInfoItemsJsonParentInternalMediaType = 'childrenInfoItemsJson___parent___internal___mediaType',
  ChildrenInfoItemsJsonParentInternalOwner = 'childrenInfoItemsJson___parent___internal___owner',
  ChildrenInfoItemsJsonParentInternalType = 'childrenInfoItemsJson___parent___internal___type',
  ChildrenInfoItemsJsonParentParentChildren = 'childrenInfoItemsJson___parent___parent___children',
  ChildrenInfoItemsJsonParentParentId = 'childrenInfoItemsJson___parent___parent___id',
  ChildrenInfoItemsJsonTitle = 'childrenInfoItemsJson___title',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalContentFilePath = 'children___children___internal___contentFilePath',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalContentFilePath = 'children___internal___contentFilePath',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalContentFilePath = 'children___parent___internal___contentFilePath',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Ctime = 'ctime',
  CtimeMs = 'ctimeMs',
  Dev = 'dev',
  Dir = 'dir',
  Ext = 'ext',
  Extension = 'extension',
  Gid = 'gid',
  Id = 'id',
  Ino = 'ino',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalContentFilePath = 'internal___contentFilePath',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Mode = 'mode',
  ModifiedTime = 'modifiedTime',
  Mtime = 'mtime',
  MtimeMs = 'mtimeMs',
  Name = 'name',
  Nlink = 'nlink',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalContentFilePath = 'parent___children___internal___contentFilePath',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalContentFilePath = 'parent___internal___contentFilePath',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalContentFilePath = 'parent___parent___internal___contentFilePath',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PrettySize = 'prettySize',
  PublicUrl = 'publicURL',
  Rdev = 'rdev',
  RelativeDirectory = 'relativeDirectory',
  RelativePath = 'relativePath',
  Root = 'root',
  Size = 'size',
  SourceInstanceName = 'sourceInstanceName',
  Uid = 'uid'
}

export type FileFilterInput = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  childArtistsJson?: InputMaybe<ArtistsJsonFilterInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  childInfoItemsJson?: InputMaybe<InfoItemsJsonFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  childrenArtistsJson?: InputMaybe<ArtistsJsonFilterListInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  childrenInfoItemsJson?: InputMaybe<InfoItemsJsonFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};

export type FileGroupConnection = {
  __typename?: 'FileGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<FileEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<FileGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type FileGroupConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionGroupArgs = {
  field: FileFieldsEnum;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type FileGroupConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionSumArgs = {
  field: FileFieldsEnum;
};

export type FileSortInput = {
  fields?: InputMaybe<Array<InputMaybe<FileFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type GatsbyImageDataQueryOperatorInput = {
  eq?: InputMaybe<Scalars['GatsbyImageData']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['GatsbyImageData']['input']>>>;
  ne?: InputMaybe<Scalars['GatsbyImageData']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['GatsbyImageData']['input']>>>;
};

export enum GatsbyImageFormat {
  Auto = 'AUTO',
  Avif = 'AVIF',
  Jpg = 'JPG',
  NoChange = 'NO_CHANGE',
  Png = 'PNG',
  Webp = 'WEBP'
}

export enum GatsbyImageLayout {
  Constrained = 'CONSTRAINED',
  Fixed = 'FIXED',
  FullWidth = 'FULL_WIDTH'
}

export enum GatsbyImagePlaceholder {
  Blurred = 'BLURRED',
  DominantColor = 'DOMINANT_COLOR',
  None = 'NONE',
  TracedSvg = 'TRACED_SVG'
}

export enum ImageCropFocus {
  Attention = 'ATTENTION',
  Center = 'CENTER',
  East = 'EAST',
  Entropy = 'ENTROPY',
  North = 'NORTH',
  Northeast = 'NORTHEAST',
  Northwest = 'NORTHWEST',
  South = 'SOUTH',
  Southeast = 'SOUTHEAST',
  Southwest = 'SOUTHWEST',
  West = 'WEST'
}

export enum ImageFit {
  Contain = 'CONTAIN',
  Cover = 'COVER',
  Fill = 'FILL',
  Inside = 'INSIDE',
  Outside = 'OUTSIDE'
}

export enum ImageFormat {
  Auto = 'AUTO',
  Avif = 'AVIF',
  Jpg = 'JPG',
  NoChange = 'NO_CHANGE',
  Png = 'PNG',
  Webp = 'WEBP'
}

export enum ImageLayout {
  Constrained = 'CONSTRAINED',
  Fixed = 'FIXED',
  FullWidth = 'FULL_WIDTH'
}

export enum ImagePlaceholder {
  Blurred = 'BLURRED',
  DominantColor = 'DOMINANT_COLOR',
  None = 'NONE',
  TracedSvg = 'TRACED_SVG'
}

export enum ImageResizingBehavior {
  /** Crop a part of the original image to match the specified size. */
  Crop = 'CROP',
  /** Crop the image to the specified dimensions, if the original image is smaller than these dimensions, then the image will be upscaled. */
  Fill = 'FILL',
  NoChange = 'NO_CHANGE',
  /** Same as the default resizing, but adds padding so that the generated image has the specified dimensions. */
  Pad = 'PAD',
  /** Scale the image regardless of the original aspect ratio. */
  Scale = 'SCALE',
  /** When used in association with the f parameter below, creates a thumbnail from the image based on a focus area. */
  Thumb = 'THUMB'
}

export type ImageSharp = Node & {
  __typename?: 'ImageSharp';
  children: Array<Node>;
  fixed?: Maybe<ImageSharpFixed>;
  fluid?: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars['GatsbyImageData']['output'];
  id: Scalars['ID']['output'];
  internal: Internal;
  original?: Maybe<ImageSharpOriginal>;
  parent?: Maybe<Node>;
  resize?: Maybe<ImageSharpResize>;
};


export type ImageSharpFixedArgs = {
  background?: InputMaybe<Scalars['String']['input']>;
  base64Width?: InputMaybe<Scalars['Int']['input']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']['input']>;
  jpegQuality?: InputMaybe<Scalars['Int']['input']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']['input']>;
  pngQuality?: InputMaybe<Scalars['Int']['input']>;
  quality?: InputMaybe<Scalars['Int']['input']>;
  rotate?: InputMaybe<Scalars['Int']['input']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']['input']>;
  webpQuality?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};


export type ImageSharpFluidArgs = {
  background?: InputMaybe<Scalars['String']['input']>;
  base64Width?: InputMaybe<Scalars['Int']['input']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']['input']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']['input']>;
  jpegQuality?: InputMaybe<Scalars['Int']['input']>;
  maxHeight?: InputMaybe<Scalars['Int']['input']>;
  maxWidth?: InputMaybe<Scalars['Int']['input']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']['input']>;
  pngQuality?: InputMaybe<Scalars['Int']['input']>;
  quality?: InputMaybe<Scalars['Int']['input']>;
  rotate?: InputMaybe<Scalars['Int']['input']>;
  sizes?: InputMaybe<Scalars['String']['input']>;
  srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']['input']>;
  webpQuality?: InputMaybe<Scalars['Int']['input']>;
};


export type ImageSharpGatsbyImageDataArgs = {
  aspectRatio?: InputMaybe<Scalars['Float']['input']>;
  avifOptions?: InputMaybe<AvifOptions>;
  backgroundColor?: InputMaybe<Scalars['String']['input']>;
  blurredOptions?: InputMaybe<BlurredOptions>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  formats?: InputMaybe<Array<InputMaybe<ImageFormat>>>;
  height?: InputMaybe<Scalars['Int']['input']>;
  jpgOptions?: InputMaybe<JpgOptions>;
  layout?: InputMaybe<ImageLayout>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  placeholder?: InputMaybe<ImagePlaceholder>;
  pngOptions?: InputMaybe<PngOptions>;
  quality?: InputMaybe<Scalars['Int']['input']>;
  sizes?: InputMaybe<Scalars['String']['input']>;
  tracedSVGOptions?: InputMaybe<Potrace>;
  transformOptions?: InputMaybe<TransformOptions>;
  webpOptions?: InputMaybe<WebPOptions>;
  width?: InputMaybe<Scalars['Int']['input']>;
};


export type ImageSharpResizeArgs = {
  background?: InputMaybe<Scalars['String']['input']>;
  base64?: InputMaybe<Scalars['Boolean']['input']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']['input']>;
  jpegQuality?: InputMaybe<Scalars['Int']['input']>;
  pngCompressionLevel?: InputMaybe<Scalars['Int']['input']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']['input']>;
  pngQuality?: InputMaybe<Scalars['Int']['input']>;
  quality?: InputMaybe<Scalars['Int']['input']>;
  rotate?: InputMaybe<Scalars['Int']['input']>;
  toFormat?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']['input']>;
  webpQuality?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type ImageSharpConnection = {
  __typename?: 'ImageSharpConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<ImageSharpEdge>;
  group: Array<ImageSharpGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  field: ImageSharpFieldsEnum;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  __typename?: 'ImageSharpEdge';
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export enum ImageSharpFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalContentFilePath = 'children___children___internal___contentFilePath',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalContentFilePath = 'children___internal___contentFilePath',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalContentFilePath = 'children___parent___internal___contentFilePath',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FixedAspectRatio = 'fixed___aspectRatio',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FixedBase64 = 'fixed___base64',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FixedHeight = 'fixed___height',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FixedOriginalName = 'fixed___originalName',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FixedSrc = 'fixed___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FixedSrcSet = 'fixed___srcSet',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FixedSrcSetWebp = 'fixed___srcSetWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FixedSrcWebp = 'fixed___srcWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FixedTracedSvg = 'fixed___tracedSVG',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FixedWidth = 'fixed___width',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FluidAspectRatio = 'fluid___aspectRatio',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FluidBase64 = 'fluid___base64',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FluidOriginalImg = 'fluid___originalImg',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FluidOriginalName = 'fluid___originalName',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FluidPresentationHeight = 'fluid___presentationHeight',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FluidPresentationWidth = 'fluid___presentationWidth',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FluidSizes = 'fluid___sizes',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FluidSrc = 'fluid___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FluidSrcSet = 'fluid___srcSet',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FluidSrcSetWebp = 'fluid___srcSetWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FluidSrcWebp = 'fluid___srcWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FluidTracedSvg = 'fluid___tracedSVG',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  GatsbyImageData = 'gatsbyImageData',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalContentFilePath = 'internal___contentFilePath',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  OriginalHeight = 'original___height',
  OriginalSrc = 'original___src',
  OriginalWidth = 'original___width',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalContentFilePath = 'parent___children___internal___contentFilePath',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalContentFilePath = 'parent___internal___contentFilePath',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalContentFilePath = 'parent___parent___internal___contentFilePath',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ResizeAspectRatio = 'resize___aspectRatio',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ResizeHeight = 'resize___height',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ResizeOriginalName = 'resize___originalName',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ResizeSrc = 'resize___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ResizeTracedSvg = 'resize___tracedSVG',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ResizeWidth = 'resize___width'
}

export type ImageSharpFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<GatsbyImageDataQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: InputMaybe<ImageSharpFilterInput>;
};

export type ImageSharpFixed = {
  __typename?: 'ImageSharpFixed';
  aspectRatio?: Maybe<Scalars['Float']['output']>;
  base64?: Maybe<Scalars['String']['output']>;
  height: Scalars['Float']['output'];
  originalName?: Maybe<Scalars['String']['output']>;
  src: Scalars['String']['output'];
  srcSet: Scalars['String']['output'];
  srcSetWebp?: Maybe<Scalars['String']['output']>;
  srcWebp?: Maybe<Scalars['String']['output']>;
  tracedSVG?: Maybe<Scalars['String']['output']>;
  width: Scalars['Float']['output'];
};

export type ImageSharpFixedFilterInput = {
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  base64?: InputMaybe<StringQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
};

export type ImageSharpFluid = {
  __typename?: 'ImageSharpFluid';
  aspectRatio: Scalars['Float']['output'];
  base64?: Maybe<Scalars['String']['output']>;
  originalImg?: Maybe<Scalars['String']['output']>;
  originalName?: Maybe<Scalars['String']['output']>;
  presentationHeight: Scalars['Int']['output'];
  presentationWidth: Scalars['Int']['output'];
  sizes: Scalars['String']['output'];
  src: Scalars['String']['output'];
  srcSet: Scalars['String']['output'];
  srcSetWebp?: Maybe<Scalars['String']['output']>;
  srcWebp?: Maybe<Scalars['String']['output']>;
  tracedSVG?: Maybe<Scalars['String']['output']>;
};

export type ImageSharpFluidFilterInput = {
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  base64?: InputMaybe<StringQueryOperatorInput>;
  originalImg?: InputMaybe<StringQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
  presentationHeight?: InputMaybe<IntQueryOperatorInput>;
  presentationWidth?: InputMaybe<IntQueryOperatorInput>;
  sizes?: InputMaybe<StringQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  __typename?: 'ImageSharpGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<ImageSharpEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<ImageSharpGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type ImageSharpGroupConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionGroupArgs = {
  field: ImageSharpFieldsEnum;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ImageSharpGroupConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpOriginal = {
  __typename?: 'ImageSharpOriginal';
  height?: Maybe<Scalars['Float']['output']>;
  src?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type ImageSharpOriginalFilterInput = {
  height?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
};

export type ImageSharpResize = {
  __typename?: 'ImageSharpResize';
  aspectRatio?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  originalName?: Maybe<Scalars['String']['output']>;
  src?: Maybe<Scalars['String']['output']>;
  tracedSVG?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

export type ImageSharpResizeFilterInput = {
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ImageSharpFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type InfoItemsJson = Node & {
  __typename?: 'InfoItemsJson';
  children: Array<Node>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  internal: Internal;
  parent?: Maybe<Node>;
  title?: Maybe<Scalars['String']['output']>;
};

export type InfoItemsJsonConnection = {
  __typename?: 'InfoItemsJsonConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<InfoItemsJsonEdge>;
  group: Array<InfoItemsJsonGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<InfoItemsJson>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type InfoItemsJsonConnectionDistinctArgs = {
  field: InfoItemsJsonFieldsEnum;
};


export type InfoItemsJsonConnectionGroupArgs = {
  field: InfoItemsJsonFieldsEnum;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type InfoItemsJsonConnectionMaxArgs = {
  field: InfoItemsJsonFieldsEnum;
};


export type InfoItemsJsonConnectionMinArgs = {
  field: InfoItemsJsonFieldsEnum;
};


export type InfoItemsJsonConnectionSumArgs = {
  field: InfoItemsJsonFieldsEnum;
};

export type InfoItemsJsonEdge = {
  __typename?: 'InfoItemsJsonEdge';
  next?: Maybe<InfoItemsJson>;
  node: InfoItemsJson;
  previous?: Maybe<InfoItemsJson>;
};

export enum InfoItemsJsonFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalContentFilePath = 'children___children___internal___contentFilePath',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalContentFilePath = 'children___internal___contentFilePath',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalContentFilePath = 'children___parent___internal___contentFilePath',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Description = 'description',
  Id = 'id',
  Image = 'image',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalContentFilePath = 'internal___contentFilePath',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalContentFilePath = 'parent___children___internal___contentFilePath',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalContentFilePath = 'parent___internal___contentFilePath',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalContentFilePath = 'parent___parent___internal___contentFilePath',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  Title = 'title'
}

export type InfoItemsJsonFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  image?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
};

export type InfoItemsJsonFilterListInput = {
  elemMatch?: InputMaybe<InfoItemsJsonFilterInput>;
};

export type InfoItemsJsonGroupConnection = {
  __typename?: 'InfoItemsJsonGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<InfoItemsJsonEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<InfoItemsJsonGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<InfoItemsJson>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type InfoItemsJsonGroupConnectionDistinctArgs = {
  field: InfoItemsJsonFieldsEnum;
};


export type InfoItemsJsonGroupConnectionGroupArgs = {
  field: InfoItemsJsonFieldsEnum;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type InfoItemsJsonGroupConnectionMaxArgs = {
  field: InfoItemsJsonFieldsEnum;
};


export type InfoItemsJsonGroupConnectionMinArgs = {
  field: InfoItemsJsonFieldsEnum;
};


export type InfoItemsJsonGroupConnectionSumArgs = {
  field: InfoItemsJsonFieldsEnum;
};

export type InfoItemsJsonSortInput = {
  fields?: InputMaybe<Array<InputMaybe<InfoItemsJsonFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type IntQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type Internal = {
  __typename?: 'Internal';
  content?: Maybe<Scalars['String']['output']>;
  contentDigest: Scalars['String']['output'];
  contentFilePath?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ignoreType?: Maybe<Scalars['Boolean']['output']>;
  mediaType?: Maybe<Scalars['String']['output']>;
  owner: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type InternalFilterInput = {
  content?: InputMaybe<StringQueryOperatorInput>;
  contentDigest?: InputMaybe<StringQueryOperatorInput>;
  contentFilePath?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  fieldOwners?: InputMaybe<StringQueryOperatorInput>;
  ignoreType?: InputMaybe<BooleanQueryOperatorInput>;
  mediaType?: InputMaybe<StringQueryOperatorInput>;
  owner?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type JpgOptions = {
  progressive?: InputMaybe<Scalars['Boolean']['input']>;
  quality?: InputMaybe<Scalars['Int']['input']>;
};

export type JsonQueryOperatorInput = {
  eq?: InputMaybe<Scalars['JSON']['input']>;
  glob?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  ne?: InputMaybe<Scalars['JSON']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  regex?: InputMaybe<Scalars['JSON']['input']>;
};

/** Node Interface */
export type Node = {
  children: Array<Node>;
  id: Scalars['ID']['output'];
  internal: Internal;
  parent?: Maybe<Node>;
};

export type NodeFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: InputMaybe<NodeFilterInput>;
};

export type PngOptions = {
  compressionSpeed?: InputMaybe<Scalars['Int']['input']>;
  quality?: InputMaybe<Scalars['Int']['input']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  currentPage: Scalars['Int']['output'];
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  itemCount: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  perPage?: Maybe<Scalars['Int']['output']>;
  totalCount: Scalars['Int']['output'];
};

export type Potrace = {
  alphaMax?: InputMaybe<Scalars['Float']['input']>;
  background?: InputMaybe<Scalars['String']['input']>;
  blackOnWhite?: InputMaybe<Scalars['Boolean']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  optCurve?: InputMaybe<Scalars['Boolean']['input']>;
  optTolerance?: InputMaybe<Scalars['Float']['input']>;
  threshold?: InputMaybe<Scalars['Int']['input']>;
  turdSize?: InputMaybe<Scalars['Float']['input']>;
  turnPolicy?: InputMaybe<PotraceTurnPolicy>;
};

export enum PotraceTurnPolicy {
  TurnpolicyBlack = 'TURNPOLICY_BLACK',
  TurnpolicyLeft = 'TURNPOLICY_LEFT',
  TurnpolicyMajority = 'TURNPOLICY_MAJORITY',
  TurnpolicyMinority = 'TURNPOLICY_MINORITY',
  TurnpolicyRight = 'TURNPOLICY_RIGHT',
  TurnpolicyWhite = 'TURNPOLICY_WHITE'
}

export type Query = {
  __typename?: 'Query';
  allArtistsJson: ArtistsJsonConnection;
  allContentfulActivity: ContentfulActivityConnection;
  allContentfulArtist: ContentfulArtistConnection;
  allContentfulAsset: ContentfulAssetConnection;
  allContentfulBanner: ContentfulBannerConnection;
  allContentfulContentType: ContentfulContentTypeConnection;
  allContentfulEntry: ContentfulEntryConnection;
  allContentfulFaq: ContentfulFaqConnection;
  allContentfulFrontPageIntroductionSection: ContentfulFrontPageIntroductionSectionConnection;
  allContentfulFrontPageSectionDate: ContentfulFrontPageSectionDateConnection;
  allContentfulGallery: ContentfulGalleryConnection;
  allContentfulLineup: ContentfulLineupConnection;
  allContentfulMap: ContentfulMapConnection;
  allContentfulMerch: ContentfulMerchConnection;
  allContentfulMerchDescriptionTextNode: ContentfulMerchDescriptionTextNodeConnection;
  allContentfulNavigation: ContentfulNavigationConnection;
  allContentfulNavigationItem: ContentfulNavigationItemConnection;
  allContentfulPost: ContentfulPostConnection;
  allContentfulPromoVideo: ContentfulPromoVideoConnection;
  allContentfulStage: ContentfulStageConnection;
  allDirectory: DirectoryConnection;
  allFacebook: FacebookConnection;
  allFile: FileConnection;
  allImageSharp: ImageSharpConnection;
  allInfoItemsJson: InfoItemsJsonConnection;
  allSite: SiteConnection;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  allSiteFunction: SiteFunctionConnection;
  allSitePage: SitePageConnection;
  allSitePlugin: SitePluginConnection;
  artistsJson?: Maybe<ArtistsJson>;
  contentfulActivity?: Maybe<ContentfulActivity>;
  contentfulArtist?: Maybe<ContentfulArtist>;
  contentfulAsset?: Maybe<ContentfulAsset>;
  contentfulBanner?: Maybe<ContentfulBanner>;
  contentfulContentType?: Maybe<ContentfulContentType>;
  contentfulEntry?: Maybe<ContentfulEntry>;
  contentfulFaq?: Maybe<ContentfulFaq>;
  contentfulFrontPageIntroductionSection?: Maybe<ContentfulFrontPageIntroductionSection>;
  contentfulFrontPageSectionDate?: Maybe<ContentfulFrontPageSectionDate>;
  contentfulGallery?: Maybe<ContentfulGallery>;
  contentfulLineup?: Maybe<ContentfulLineup>;
  contentfulMap?: Maybe<ContentfulMap>;
  contentfulMerch?: Maybe<ContentfulMerch>;
  contentfulMerchDescriptionTextNode?: Maybe<ContentfulMerchDescriptionTextNode>;
  contentfulNavigation?: Maybe<ContentfulNavigation>;
  contentfulNavigationItem?: Maybe<ContentfulNavigationItem>;
  contentfulPost?: Maybe<ContentfulPost>;
  contentfulPromoVideo?: Maybe<ContentfulPromoVideo>;
  contentfulStage?: Maybe<ContentfulStage>;
  directory?: Maybe<Directory>;
  facebook?: Maybe<Facebook>;
  file?: Maybe<File>;
  imageSharp?: Maybe<ImageSharp>;
  infoItemsJson?: Maybe<InfoItemsJson>;
  site?: Maybe<Site>;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  siteFunction?: Maybe<SiteFunction>;
  sitePage?: Maybe<SitePage>;
  sitePlugin?: Maybe<SitePlugin>;
};


export type QueryAllArtistsJsonArgs = {
  filter?: InputMaybe<ArtistsJsonFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<ArtistsJsonSortInput>;
};


export type QueryAllContentfulActivityArgs = {
  filter?: InputMaybe<ContentfulActivityFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<ContentfulActivitySortInput>;
};


export type QueryAllContentfulArtistArgs = {
  filter?: InputMaybe<ContentfulArtistFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<ContentfulArtistSortInput>;
};


export type QueryAllContentfulAssetArgs = {
  filter?: InputMaybe<ContentfulAssetFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<ContentfulAssetSortInput>;
};


export type QueryAllContentfulBannerArgs = {
  filter?: InputMaybe<ContentfulBannerFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<ContentfulBannerSortInput>;
};


export type QueryAllContentfulContentTypeArgs = {
  filter?: InputMaybe<ContentfulContentTypeFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<ContentfulContentTypeSortInput>;
};


export type QueryAllContentfulEntryArgs = {
  filter?: InputMaybe<ContentfulEntryFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<ContentfulEntrySortInput>;
};


export type QueryAllContentfulFaqArgs = {
  filter?: InputMaybe<ContentfulFaqFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<ContentfulFaqSortInput>;
};


export type QueryAllContentfulFrontPageIntroductionSectionArgs = {
  filter?: InputMaybe<ContentfulFrontPageIntroductionSectionFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<ContentfulFrontPageIntroductionSectionSortInput>;
};


export type QueryAllContentfulFrontPageSectionDateArgs = {
  filter?: InputMaybe<ContentfulFrontPageSectionDateFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<ContentfulFrontPageSectionDateSortInput>;
};


export type QueryAllContentfulGalleryArgs = {
  filter?: InputMaybe<ContentfulGalleryFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<ContentfulGallerySortInput>;
};


export type QueryAllContentfulLineupArgs = {
  filter?: InputMaybe<ContentfulLineupFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<ContentfulLineupSortInput>;
};


export type QueryAllContentfulMapArgs = {
  filter?: InputMaybe<ContentfulMapFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<ContentfulMapSortInput>;
};


export type QueryAllContentfulMerchArgs = {
  filter?: InputMaybe<ContentfulMerchFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<ContentfulMerchSortInput>;
};


export type QueryAllContentfulMerchDescriptionTextNodeArgs = {
  filter?: InputMaybe<ContentfulMerchDescriptionTextNodeFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<ContentfulMerchDescriptionTextNodeSortInput>;
};


export type QueryAllContentfulNavigationArgs = {
  filter?: InputMaybe<ContentfulNavigationFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<ContentfulNavigationSortInput>;
};


export type QueryAllContentfulNavigationItemArgs = {
  filter?: InputMaybe<ContentfulNavigationItemFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<ContentfulNavigationItemSortInput>;
};


export type QueryAllContentfulPostArgs = {
  filter?: InputMaybe<ContentfulPostFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<ContentfulPostSortInput>;
};


export type QueryAllContentfulPromoVideoArgs = {
  filter?: InputMaybe<ContentfulPromoVideoFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<ContentfulPromoVideoSortInput>;
};


export type QueryAllContentfulStageArgs = {
  filter?: InputMaybe<ContentfulStageFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<ContentfulStageSortInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: InputMaybe<DirectoryFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<DirectorySortInput>;
};


export type QueryAllFacebookArgs = {
  filter?: InputMaybe<FacebookFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<FacebookSortInput>;
};


export type QueryAllFileArgs = {
  filter?: InputMaybe<FileFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<FileSortInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: InputMaybe<ImageSharpFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<ImageSharpSortInput>;
};


export type QueryAllInfoItemsJsonArgs = {
  filter?: InputMaybe<InfoItemsJsonFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<InfoItemsJsonSortInput>;
};


export type QueryAllSiteArgs = {
  filter?: InputMaybe<SiteFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SiteSortInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: InputMaybe<SiteBuildMetadataFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SiteBuildMetadataSortInput>;
};


export type QueryAllSiteFunctionArgs = {
  filter?: InputMaybe<SiteFunctionFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SiteFunctionSortInput>;
};


export type QueryAllSitePageArgs = {
  filter?: InputMaybe<SitePageFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SitePageSortInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: InputMaybe<SitePluginFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SitePluginSortInput>;
};


export type QueryArtistsJsonArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  country?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  images?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  links?: InputMaybe<StringQueryOperatorInput>;
  order?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  stage?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<StringQueryOperatorInput>;
};


export type QueryContentfulActivityArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  image?: InputMaybe<ContentfulAssetFilterInput>;
  internal?: InputMaybe<InternalFilterInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
};


export type QueryContentfulArtistArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  countryOfOrigin?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  lineup?: InputMaybe<ContentfulLineupFilterListInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  photo?: InputMaybe<ContentfulAssetFilterInput>;
  socialMediaLink?: InputMaybe<StringQueryOperatorInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  stage?: InputMaybe<ContentfulStageFilterInput>;
  sys?: InputMaybe<ContentfulArtistSysFilterInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
};


export type QueryContentfulAssetArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  file?: InputMaybe<ContentfulAssetFileFilterInput>;
  filename?: InputMaybe<StringQueryOperatorInput>;
  filesize?: InputMaybe<IntQueryOperatorInput>;
  gatsbyImage?: InputMaybe<GatsbyImageDataQueryOperatorInput>;
  gatsbyImageData?: InputMaybe<GatsbyImageDataQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mimeType?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  placeholderUrl?: InputMaybe<StringQueryOperatorInput>;
  publicUrl?: InputMaybe<StringQueryOperatorInput>;
  resize?: InputMaybe<RemoteFileResizeFilterInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulAssetSysFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
};


export type QueryContentfulBannerArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  imageDesktop?: InputMaybe<ContentfulAssetFilterInput>;
  imageMobile?: InputMaybe<ContentfulAssetFilterInput>;
  internal?: InputMaybe<InternalFilterInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulBannerSysFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
};


export type QueryContentfulContentTypeArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  displayField?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  sys?: InputMaybe<ContentfulContentTypeSysFilterInput>;
};


export type QueryContentfulEntryArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
};


export type QueryContentfulFaqArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  faqText?: InputMaybe<ContentfulFaqFaqTextFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulFaqSysFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
};


export type QueryContentfulFrontPageIntroductionSectionArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  images?: InputMaybe<ContentfulAssetFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulFrontPageIntroductionSectionSysFilterInput>;
  text?: InputMaybe<ContentfulFrontPageIntroductionSectionTextFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
};


export type QueryContentfulFrontPageSectionDateArgs = {
  backgroundImage?: InputMaybe<ContentfulAssetFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  endDate?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  startDate?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulFrontPageSectionDateSysFilterInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
};


export type QueryContentfulGalleryArgs = {
  banner?: InputMaybe<ContentfulAssetFilterInput>;
  bannerMobile?: InputMaybe<ContentfulAssetFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  eventDate?: InputMaybe<DateQueryOperatorInput>;
  eventDateEnd?: InputMaybe<DateQueryOperatorInput>;
  facebookAlbumId?: InputMaybe<StringQueryOperatorInput>;
  gatsbyPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  lineup?: InputMaybe<ContentfulLineupFilterInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulGallerySysFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
};


export type QueryContentfulLineupArgs = {
  artists?: InputMaybe<ContentfulArtistFilterListInput>;
  children?: InputMaybe<NodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulLineupSysFilterInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  url?: InputMaybe<DateQueryOperatorInput>;
};


export type QueryContentfulMapArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mapImage?: InputMaybe<ContentfulAssetFilterInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulMapSysFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
};


export type QueryContentfulMerchArgs = {
  childContentfulMerchDescriptionTextNode?: InputMaybe<ContentfulMerchDescriptionTextNodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  childrenContentfulMerchDescriptionTextNode?: InputMaybe<ContentfulMerchDescriptionTextNodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  description?: InputMaybe<ContentfulMerchDescriptionTextNodeFilterInput>;
  gatsbyPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  image?: InputMaybe<ContentfulAssetFilterInput>;
  internal?: InputMaybe<InternalFilterInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  price?: InputMaybe<FloatQueryOperatorInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulMerchSysFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
};


export type QueryContentfulMerchDescriptionTextNodeArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  sys?: InputMaybe<ContentfulMerchDescriptionTextNodeSysFilterInput>;
};


export type QueryContentfulNavigationArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  items?: InputMaybe<ContentfulNavigationItemFilterListInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulNavigationSysFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
};


export type QueryContentfulNavigationItemArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  navigation?: InputMaybe<ContentfulNavigationFilterListInput>;
  navigationItems?: InputMaybe<ContentfulNavigationItemFilterListInput>;
  navigationitem?: InputMaybe<ContentfulNavigationItemFilterListInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulNavigationItemSysFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};


export type QueryContentfulPostArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  gallery?: InputMaybe<ContentfulAssetFilterListInput>;
  gatsbyPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulPostSysFilterInput>;
  text?: InputMaybe<ContentfulPostTextFilterInput>;
  thumbnail?: InputMaybe<ContentfulAssetFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
};


export type QueryContentfulPromoVideoArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulPromoVideoSysFilterInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  video?: InputMaybe<ContentfulAssetFilterInput>;
};


export type QueryContentfulStageArgs = {
  artist?: InputMaybe<ContentfulArtistFilterListInput>;
  children?: InputMaybe<NodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  order?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulStageSysFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
};


export type QueryDirectoryArgs = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};


export type QueryFacebookArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  data?: InputMaybe<FacebookDataFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  paging?: InputMaybe<FacebookPagingFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};


export type QueryFileArgs = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  childArtistsJson?: InputMaybe<ArtistsJsonFilterInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  childInfoItemsJson?: InputMaybe<InfoItemsJsonFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  childrenArtistsJson?: InputMaybe<ArtistsJsonFilterListInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  childrenInfoItemsJson?: InputMaybe<InfoItemsJsonFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};


export type QueryImageSharpArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<GatsbyImageDataQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
};


export type QueryInfoItemsJsonArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  image?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
};


export type QuerySiteArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  graphqlTypegen?: InputMaybe<SiteGraphqlTypegenFilterInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  trailingSlash?: InputMaybe<StringQueryOperatorInput>;
};


export type QuerySiteBuildMetadataArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};


export type QuerySiteFunctionArgs = {
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
};


export type QuerySitePageArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
};


export type QuerySitePluginArgs = {
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  resolve?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
};

/** Remote Interface */
export type RemoteFile = {
  filename: Scalars['String']['output'];
  filesize?: Maybe<Scalars['Int']['output']>;
  /** Data used in the <GatsbyImage /> component. See https://gatsby.dev/img for more info. */
  gatsbyImage?: Maybe<Scalars['GatsbyImageData']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  mimeType: Scalars['String']['output'];
  publicUrl: Scalars['String']['output'];
  resize?: Maybe<RemoteFileResize>;
  width?: Maybe<Scalars['Int']['output']>;
};


/** Remote Interface */
export type RemoteFileGatsbyImageArgs = {
  aspectRatio?: InputMaybe<Scalars['Float']['input']>;
  backgroundColor?: InputMaybe<Scalars['String']['input']>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  cropFocus?: InputMaybe<Array<InputMaybe<RemoteFileCropFocus>>>;
  fit?: InputMaybe<RemoteFileFit>;
  formats?: InputMaybe<Array<RemoteFileFormat>>;
  height?: InputMaybe<Scalars['Int']['input']>;
  layout?: InputMaybe<RemoteFileLayout>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  placeholder?: InputMaybe<RemoteFilePlaceholder>;
  quality?: InputMaybe<Scalars['Int']['input']>;
  sizes?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};


/** Remote Interface */
export type RemoteFileResizeArgs = {
  aspectRatio?: InputMaybe<Scalars['Float']['input']>;
  cropFocus?: InputMaybe<Array<InputMaybe<RemoteFileCropFocus>>>;
  fit?: InputMaybe<RemoteFileFit>;
  format?: InputMaybe<RemoteFileFormat>;
  height?: InputMaybe<Scalars['Int']['input']>;
  quality?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export enum RemoteFileCropFocus {
  Bottom = 'BOTTOM',
  Center = 'CENTER',
  Edges = 'EDGES',
  Entropy = 'ENTROPY',
  Faces = 'FACES',
  Left = 'LEFT',
  Right = 'RIGHT',
  Top = 'TOP'
}

export enum RemoteFileFit {
  Contain = 'CONTAIN',
  Cover = 'COVER',
  Fill = 'FILL',
  Outside = 'OUTSIDE'
}

export enum RemoteFileFormat {
  Auto = 'AUTO',
  Avif = 'AVIF',
  Jpg = 'JPG',
  Png = 'PNG',
  Webp = 'WEBP'
}

export enum RemoteFileLayout {
  Constrained = 'CONSTRAINED',
  Fixed = 'FIXED',
  FullWidth = 'FULL_WIDTH'
}

export enum RemoteFilePlaceholder {
  Blurred = 'BLURRED',
  DominantColor = 'DOMINANT_COLOR',
  None = 'NONE',
  TracedSvg = 'TRACED_SVG'
}

export type RemoteFileResize = {
  __typename?: 'RemoteFileResize';
  height?: Maybe<Scalars['Int']['output']>;
  src?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

export type RemoteFileResizeFilterInput = {
  height?: InputMaybe<IntQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
};

export type Site = Node & {
  __typename?: 'Site';
  buildTime?: Maybe<Scalars['Date']['output']>;
  children: Array<Node>;
  graphqlTypegen?: Maybe<SiteGraphqlTypegen>;
  host?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  internal: Internal;
  jsxRuntime?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Node>;
  pathPrefix?: Maybe<Scalars['String']['output']>;
  polyfill?: Maybe<Scalars['Boolean']['output']>;
  port?: Maybe<Scalars['Int']['output']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  trailingSlash?: Maybe<Scalars['String']['output']>;
};


export type SiteBuildTimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type SiteBuildMetadata = Node & {
  __typename?: 'SiteBuildMetadata';
  buildTime?: Maybe<Scalars['Date']['output']>;
  children: Array<Node>;
  id: Scalars['ID']['output'];
  internal: Internal;
  parent?: Maybe<Node>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type SiteBuildMetadataConnection = {
  __typename?: 'SiteBuildMetadataConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<SiteBuildMetadataEdge>;
  group: Array<SiteBuildMetadataGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  field: SiteBuildMetadataFieldsEnum;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  __typename?: 'SiteBuildMetadataEdge';
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export enum SiteBuildMetadataFieldsEnum {
  BuildTime = 'buildTime',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalContentFilePath = 'children___children___internal___contentFilePath',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalContentFilePath = 'children___internal___contentFilePath',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalContentFilePath = 'children___parent___internal___contentFilePath',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalContentFilePath = 'internal___contentFilePath',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalContentFilePath = 'parent___children___internal___contentFilePath',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalContentFilePath = 'parent___internal___contentFilePath',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalContentFilePath = 'parent___parent___internal___contentFilePath',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id'
}

export type SiteBuildMetadataFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type SiteBuildMetadataGroupConnection = {
  __typename?: 'SiteBuildMetadataGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<SiteBuildMetadataEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<SiteBuildMetadataGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionGroupArgs = {
  field: SiteBuildMetadataFieldsEnum;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SiteBuildMetadataGroupConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteBuildMetadataFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  __typename?: 'SiteConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<SiteEdge>;
  group: Array<SiteGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  field: SiteFieldsEnum;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  __typename?: 'SiteEdge';
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export enum SiteFieldsEnum {
  BuildTime = 'buildTime',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalContentFilePath = 'children___children___internal___contentFilePath',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalContentFilePath = 'children___internal___contentFilePath',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalContentFilePath = 'children___parent___internal___contentFilePath',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  GraphqlTypegenGenerateOnBuild = 'graphqlTypegen___generateOnBuild',
  GraphqlTypegenTypesOutputPath = 'graphqlTypegen___typesOutputPath',
  Host = 'host',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalContentFilePath = 'internal___contentFilePath',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  JsxRuntime = 'jsxRuntime',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalContentFilePath = 'parent___children___internal___contentFilePath',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalContentFilePath = 'parent___internal___contentFilePath',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalContentFilePath = 'parent___parent___internal___contentFilePath',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PathPrefix = 'pathPrefix',
  Polyfill = 'polyfill',
  Port = 'port',
  SiteMetadataDescription = 'siteMetadata___description',
  SiteMetadataReferrer = 'siteMetadata___referrer',
  SiteMetadataSiteUrl = 'siteMetadata___siteUrl',
  SiteMetadataTitle = 'siteMetadata___title',
  TrailingSlash = 'trailingSlash'
}

export type SiteFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  graphqlTypegen?: InputMaybe<SiteGraphqlTypegenFilterInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  trailingSlash?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteFunction = Node & {
  __typename?: 'SiteFunction';
  absoluteCompiledFilePath: Scalars['String']['output'];
  children: Array<Node>;
  functionRoute: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  internal: Internal;
  matchPath?: Maybe<Scalars['String']['output']>;
  originalAbsoluteFilePath: Scalars['String']['output'];
  originalRelativeFilePath: Scalars['String']['output'];
  parent?: Maybe<Node>;
  pluginName: Scalars['String']['output'];
  relativeCompiledFilePath: Scalars['String']['output'];
};

export type SiteFunctionConnection = {
  __typename?: 'SiteFunctionConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<SiteFunctionEdge>;
  group: Array<SiteFunctionGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionGroupArgs = {
  field: SiteFunctionFieldsEnum;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionEdge = {
  __typename?: 'SiteFunctionEdge';
  next?: Maybe<SiteFunction>;
  node: SiteFunction;
  previous?: Maybe<SiteFunction>;
};

export enum SiteFunctionFieldsEnum {
  AbsoluteCompiledFilePath = 'absoluteCompiledFilePath',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalContentFilePath = 'children___children___internal___contentFilePath',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalContentFilePath = 'children___internal___contentFilePath',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalContentFilePath = 'children___parent___internal___contentFilePath',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  FunctionRoute = 'functionRoute',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalContentFilePath = 'internal___contentFilePath',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  MatchPath = 'matchPath',
  OriginalAbsoluteFilePath = 'originalAbsoluteFilePath',
  OriginalRelativeFilePath = 'originalRelativeFilePath',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalContentFilePath = 'parent___children___internal___contentFilePath',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalContentFilePath = 'parent___internal___contentFilePath',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalContentFilePath = 'parent___parent___internal___contentFilePath',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PluginName = 'pluginName',
  RelativeCompiledFilePath = 'relativeCompiledFilePath'
}

export type SiteFunctionFilterInput = {
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteFunctionGroupConnection = {
  __typename?: 'SiteFunctionGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<SiteFunctionEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<SiteFunctionGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionGroupArgs = {
  field: SiteFunctionFieldsEnum;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SiteFunctionGroupConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFunctionFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteGraphqlTypegen = {
  __typename?: 'SiteGraphqlTypegen';
  generateOnBuild?: Maybe<Scalars['Boolean']['output']>;
  typesOutputPath?: Maybe<Scalars['String']['output']>;
};

export type SiteGraphqlTypegenFilterInput = {
  generateOnBuild?: InputMaybe<BooleanQueryOperatorInput>;
  typesOutputPath?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteGroupConnection = {
  __typename?: 'SiteGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<SiteEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<SiteGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionGroupArgs = {
  field: SiteFieldsEnum;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SiteGroupConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionSumArgs = {
  field: SiteFieldsEnum;
};

export type SitePage = Node & {
  __typename?: 'SitePage';
  children: Array<Node>;
  component: Scalars['String']['output'];
  componentChunkName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  internal: Internal;
  internalComponentName: Scalars['String']['output'];
  matchPath?: Maybe<Scalars['String']['output']>;
  pageContext?: Maybe<Scalars['JSON']['output']>;
  parent?: Maybe<Node>;
  path: Scalars['String']['output'];
  pluginCreator?: Maybe<SitePlugin>;
};

export type SitePageConnection = {
  __typename?: 'SitePageConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<SitePageEdge>;
  group: Array<SitePageGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  field: SitePageFieldsEnum;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
  __typename?: 'SitePageEdge';
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalContentFilePath = 'children___children___internal___contentFilePath',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalContentFilePath = 'children___internal___contentFilePath',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalContentFilePath = 'children___parent___internal___contentFilePath',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Component = 'component',
  ComponentChunkName = 'componentChunkName',
  Id = 'id',
  InternalComponentName = 'internalComponentName',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalContentFilePath = 'internal___contentFilePath',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  MatchPath = 'matchPath',
  PageContext = 'pageContext',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalContentFilePath = 'parent___children___internal___contentFilePath',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalContentFilePath = 'parent___internal___contentFilePath',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalContentFilePath = 'parent___parent___internal___contentFilePath',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  Path = 'path',
  PluginCreatorBrowserApIs = 'pluginCreator___browserAPIs',
  PluginCreatorChildren = 'pluginCreator___children',
  PluginCreatorChildrenChildren = 'pluginCreator___children___children',
  PluginCreatorChildrenChildrenChildren = 'pluginCreator___children___children___children',
  PluginCreatorChildrenChildrenId = 'pluginCreator___children___children___id',
  PluginCreatorChildrenId = 'pluginCreator___children___id',
  PluginCreatorChildrenInternalContent = 'pluginCreator___children___internal___content',
  PluginCreatorChildrenInternalContentDigest = 'pluginCreator___children___internal___contentDigest',
  PluginCreatorChildrenInternalContentFilePath = 'pluginCreator___children___internal___contentFilePath',
  PluginCreatorChildrenInternalDescription = 'pluginCreator___children___internal___description',
  PluginCreatorChildrenInternalFieldOwners = 'pluginCreator___children___internal___fieldOwners',
  PluginCreatorChildrenInternalIgnoreType = 'pluginCreator___children___internal___ignoreType',
  PluginCreatorChildrenInternalMediaType = 'pluginCreator___children___internal___mediaType',
  PluginCreatorChildrenInternalOwner = 'pluginCreator___children___internal___owner',
  PluginCreatorChildrenInternalType = 'pluginCreator___children___internal___type',
  PluginCreatorChildrenParentChildren = 'pluginCreator___children___parent___children',
  PluginCreatorChildrenParentId = 'pluginCreator___children___parent___id',
  PluginCreatorId = 'pluginCreator___id',
  PluginCreatorInternalContent = 'pluginCreator___internal___content',
  PluginCreatorInternalContentDigest = 'pluginCreator___internal___contentDigest',
  PluginCreatorInternalContentFilePath = 'pluginCreator___internal___contentFilePath',
  PluginCreatorInternalDescription = 'pluginCreator___internal___description',
  PluginCreatorInternalFieldOwners = 'pluginCreator___internal___fieldOwners',
  PluginCreatorInternalIgnoreType = 'pluginCreator___internal___ignoreType',
  PluginCreatorInternalMediaType = 'pluginCreator___internal___mediaType',
  PluginCreatorInternalOwner = 'pluginCreator___internal___owner',
  PluginCreatorInternalType = 'pluginCreator___internal___type',
  PluginCreatorName = 'pluginCreator___name',
  PluginCreatorNodeApIs = 'pluginCreator___nodeAPIs',
  PluginCreatorPackageJson = 'pluginCreator___packageJson',
  PluginCreatorParentChildren = 'pluginCreator___parent___children',
  PluginCreatorParentChildrenChildren = 'pluginCreator___parent___children___children',
  PluginCreatorParentChildrenId = 'pluginCreator___parent___children___id',
  PluginCreatorParentId = 'pluginCreator___parent___id',
  PluginCreatorParentInternalContent = 'pluginCreator___parent___internal___content',
  PluginCreatorParentInternalContentDigest = 'pluginCreator___parent___internal___contentDigest',
  PluginCreatorParentInternalContentFilePath = 'pluginCreator___parent___internal___contentFilePath',
  PluginCreatorParentInternalDescription = 'pluginCreator___parent___internal___description',
  PluginCreatorParentInternalFieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  PluginCreatorParentInternalIgnoreType = 'pluginCreator___parent___internal___ignoreType',
  PluginCreatorParentInternalMediaType = 'pluginCreator___parent___internal___mediaType',
  PluginCreatorParentInternalOwner = 'pluginCreator___parent___internal___owner',
  PluginCreatorParentInternalType = 'pluginCreator___parent___internal___type',
  PluginCreatorParentParentChildren = 'pluginCreator___parent___parent___children',
  PluginCreatorParentParentId = 'pluginCreator___parent___parent___id',
  PluginCreatorPluginFilepath = 'pluginCreator___pluginFilepath',
  PluginCreatorPluginOptions = 'pluginCreator___pluginOptions',
  PluginCreatorResolve = 'pluginCreator___resolve',
  PluginCreatorSsrApIs = 'pluginCreator___ssrAPIs',
  PluginCreatorVersion = 'pluginCreator___version'
}

export type SitePageFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
};

export type SitePageGroupConnection = {
  __typename?: 'SitePageGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<SitePageEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<SitePageGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionGroupArgs = {
  field: SitePageFieldsEnum;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SitePageGroupConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionSumArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePageFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  __typename?: 'SitePlugin';
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  children: Array<Node>;
  id: Scalars['ID']['output'];
  internal: Internal;
  name?: Maybe<Scalars['String']['output']>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  packageJson?: Maybe<Scalars['JSON']['output']>;
  parent?: Maybe<Node>;
  pluginFilepath?: Maybe<Scalars['String']['output']>;
  pluginOptions?: Maybe<Scalars['JSON']['output']>;
  resolve?: Maybe<Scalars['String']['output']>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  version?: Maybe<Scalars['String']['output']>;
};

export type SitePluginConnection = {
  __typename?: 'SitePluginConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<SitePluginEdge>;
  group: Array<SitePluginGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  field: SitePluginFieldsEnum;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  __typename?: 'SitePluginEdge';
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
  BrowserApIs = 'browserAPIs',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalContentFilePath = 'children___children___internal___contentFilePath',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalContentFilePath = 'children___internal___contentFilePath',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalContentFilePath = 'children___parent___internal___contentFilePath',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalContentFilePath = 'internal___contentFilePath',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Name = 'name',
  NodeApIs = 'nodeAPIs',
  PackageJson = 'packageJson',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalContentFilePath = 'parent___children___internal___contentFilePath',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalContentFilePath = 'parent___internal___contentFilePath',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalContentFilePath = 'parent___parent___internal___contentFilePath',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PluginFilepath = 'pluginFilepath',
  PluginOptions = 'pluginOptions',
  Resolve = 'resolve',
  SsrApIs = 'ssrAPIs',
  Version = 'version'
}

export type SitePluginFilterInput = {
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  resolve?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
};

export type SitePluginGroupConnection = {
  __typename?: 'SitePluginGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<SitePluginEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<SitePluginGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionGroupArgs = {
  field: SitePluginFieldsEnum;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SitePluginGroupConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePluginFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  __typename?: 'SiteSiteMetadata';
  description?: Maybe<Scalars['String']['output']>;
  referrer?: Maybe<Scalars['String']['output']>;
  siteUrl?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type SiteSiteMetadataFilterInput = {
  description?: InputMaybe<StringQueryOperatorInput>;
  referrer?: InputMaybe<StringQueryOperatorInput>;
  siteUrl?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringQueryOperatorInput = {
  eq?: InputMaybe<Scalars['String']['input']>;
  glob?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['String']['input']>;
};

export type TransformOptions = {
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']['input']>;
  rotate?: InputMaybe<Scalars['Int']['input']>;
  trim?: InputMaybe<Scalars['Float']['input']>;
};

export type WebPOptions = {
  quality?: InputMaybe<Scalars['Int']['input']>;
};

export type ContentfulMerchDescriptionTextNode = Node & {
  __typename?: 'contentfulMerchDescriptionTextNode';
  children: Array<Node>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  internal: Internal;
  parent?: Maybe<Node>;
  sys?: Maybe<ContentfulMerchDescriptionTextNodeSys>;
};

export type ContentfulMerchDescriptionTextNodeConnection = {
  __typename?: 'contentfulMerchDescriptionTextNodeConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<ContentfulMerchDescriptionTextNodeEdge>;
  group: Array<ContentfulMerchDescriptionTextNodeGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<ContentfulMerchDescriptionTextNode>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type ContentfulMerchDescriptionTextNodeConnectionDistinctArgs = {
  field: ContentfulMerchDescriptionTextNodeFieldsEnum;
};


export type ContentfulMerchDescriptionTextNodeConnectionGroupArgs = {
  field: ContentfulMerchDescriptionTextNodeFieldsEnum;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulMerchDescriptionTextNodeConnectionMaxArgs = {
  field: ContentfulMerchDescriptionTextNodeFieldsEnum;
};


export type ContentfulMerchDescriptionTextNodeConnectionMinArgs = {
  field: ContentfulMerchDescriptionTextNodeFieldsEnum;
};


export type ContentfulMerchDescriptionTextNodeConnectionSumArgs = {
  field: ContentfulMerchDescriptionTextNodeFieldsEnum;
};

export type ContentfulMerchDescriptionTextNodeEdge = {
  __typename?: 'contentfulMerchDescriptionTextNodeEdge';
  next?: Maybe<ContentfulMerchDescriptionTextNode>;
  node: ContentfulMerchDescriptionTextNode;
  previous?: Maybe<ContentfulMerchDescriptionTextNode>;
};

export enum ContentfulMerchDescriptionTextNodeFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalContentFilePath = 'children___children___internal___contentFilePath',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalContentFilePath = 'children___internal___contentFilePath',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalContentFilePath = 'children___parent___internal___contentFilePath',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Description = 'description',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalContentFilePath = 'internal___contentFilePath',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalContentFilePath = 'parent___children___internal___contentFilePath',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalContentFilePath = 'parent___internal___contentFilePath',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalContentFilePath = 'parent___parent___internal___contentFilePath',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  SysType = 'sys___type'
}

export type ContentfulMerchDescriptionTextNodeFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  sys?: InputMaybe<ContentfulMerchDescriptionTextNodeSysFilterInput>;
};

export type ContentfulMerchDescriptionTextNodeFilterListInput = {
  elemMatch?: InputMaybe<ContentfulMerchDescriptionTextNodeFilterInput>;
};

export type ContentfulMerchDescriptionTextNodeGroupConnection = {
  __typename?: 'contentfulMerchDescriptionTextNodeGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<ContentfulMerchDescriptionTextNodeEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<ContentfulMerchDescriptionTextNodeGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<ContentfulMerchDescriptionTextNode>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type ContentfulMerchDescriptionTextNodeGroupConnectionDistinctArgs = {
  field: ContentfulMerchDescriptionTextNodeFieldsEnum;
};


export type ContentfulMerchDescriptionTextNodeGroupConnectionGroupArgs = {
  field: ContentfulMerchDescriptionTextNodeFieldsEnum;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulMerchDescriptionTextNodeGroupConnectionMaxArgs = {
  field: ContentfulMerchDescriptionTextNodeFieldsEnum;
};


export type ContentfulMerchDescriptionTextNodeGroupConnectionMinArgs = {
  field: ContentfulMerchDescriptionTextNodeFieldsEnum;
};


export type ContentfulMerchDescriptionTextNodeGroupConnectionSumArgs = {
  field: ContentfulMerchDescriptionTextNodeFieldsEnum;
};

export type ContentfulMerchDescriptionTextNodeSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulMerchDescriptionTextNodeFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulMerchDescriptionTextNodeSys = {
  __typename?: 'contentfulMerchDescriptionTextNodeSys';
  type?: Maybe<Scalars['String']['output']>;
};

export type ContentfulMerchDescriptionTextNodeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type Facebook = Node & {
  __typename?: 'facebook';
  children: Array<Node>;
  data?: Maybe<Array<Maybe<FacebookData>>>;
  id: Scalars['ID']['output'];
  internal: Internal;
  paging?: Maybe<FacebookPaging>;
  parent?: Maybe<Node>;
};

export type FacebookConnection = {
  __typename?: 'facebookConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<FacebookEdge>;
  group: Array<FacebookGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<Facebook>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type FacebookConnectionDistinctArgs = {
  field: FacebookFieldsEnum;
};


export type FacebookConnectionGroupArgs = {
  field: FacebookFieldsEnum;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type FacebookConnectionMaxArgs = {
  field: FacebookFieldsEnum;
};


export type FacebookConnectionMinArgs = {
  field: FacebookFieldsEnum;
};


export type FacebookConnectionSumArgs = {
  field: FacebookFieldsEnum;
};

export type FacebookData = {
  __typename?: 'facebookData';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  photos?: Maybe<FacebookDataPhotos>;
};

export type FacebookDataFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  photos?: InputMaybe<FacebookDataPhotosFilterInput>;
};

export type FacebookDataFilterListInput = {
  elemMatch?: InputMaybe<FacebookDataFilterInput>;
};

export type FacebookDataPhotos = {
  __typename?: 'facebookDataPhotos';
  data?: Maybe<Array<Maybe<FacebookDataPhotosData>>>;
  paging?: Maybe<FacebookDataPhotosPaging>;
};

export type FacebookDataPhotosData = {
  __typename?: 'facebookDataPhotosData';
  id?: Maybe<Scalars['String']['output']>;
  webp_images?: Maybe<Array<Maybe<FacebookDataPhotosDataWebp_Images>>>;
};

export type FacebookDataPhotosDataFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  webp_images?: InputMaybe<FacebookDataPhotosDataWebp_ImagesFilterListInput>;
};

export type FacebookDataPhotosDataFilterListInput = {
  elemMatch?: InputMaybe<FacebookDataPhotosDataFilterInput>;
};

export type FacebookDataPhotosDataWebp_Images = {
  __typename?: 'facebookDataPhotosDataWebp_images';
  height?: Maybe<Scalars['Int']['output']>;
  source?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

export type FacebookDataPhotosDataWebp_ImagesFilterInput = {
  height?: InputMaybe<IntQueryOperatorInput>;
  source?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
};

export type FacebookDataPhotosDataWebp_ImagesFilterListInput = {
  elemMatch?: InputMaybe<FacebookDataPhotosDataWebp_ImagesFilterInput>;
};

export type FacebookDataPhotosFilterInput = {
  data?: InputMaybe<FacebookDataPhotosDataFilterListInput>;
  paging?: InputMaybe<FacebookDataPhotosPagingFilterInput>;
};

export type FacebookDataPhotosPaging = {
  __typename?: 'facebookDataPhotosPaging';
  cursors?: Maybe<FacebookDataPhotosPagingCursors>;
  next?: Maybe<Scalars['String']['output']>;
};

export type FacebookDataPhotosPagingCursors = {
  __typename?: 'facebookDataPhotosPagingCursors';
  after?: Maybe<Scalars['String']['output']>;
  before?: Maybe<Scalars['String']['output']>;
};

export type FacebookDataPhotosPagingCursorsFilterInput = {
  after?: InputMaybe<StringQueryOperatorInput>;
  before?: InputMaybe<StringQueryOperatorInput>;
};

export type FacebookDataPhotosPagingFilterInput = {
  cursors?: InputMaybe<FacebookDataPhotosPagingCursorsFilterInput>;
  next?: InputMaybe<StringQueryOperatorInput>;
};

export type FacebookEdge = {
  __typename?: 'facebookEdge';
  next?: Maybe<Facebook>;
  node: Facebook;
  previous?: Maybe<Facebook>;
};

export enum FacebookFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalContentFilePath = 'children___children___internal___contentFilePath',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalContentFilePath = 'children___internal___contentFilePath',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalContentFilePath = 'children___parent___internal___contentFilePath',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Data = 'data',
  DataId = 'data___id',
  DataName = 'data___name',
  DataPhotosData = 'data___photos___data',
  DataPhotosDataId = 'data___photos___data___id',
  DataPhotosDataWebpImages = 'data___photos___data___webp_images',
  DataPhotosPagingNext = 'data___photos___paging___next',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalContentFilePath = 'internal___contentFilePath',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  PagingCursorsAfter = 'paging___cursors___after',
  PagingCursorsBefore = 'paging___cursors___before',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalContentFilePath = 'parent___children___internal___contentFilePath',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalContentFilePath = 'parent___internal___contentFilePath',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalContentFilePath = 'parent___parent___internal___contentFilePath',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id'
}

export type FacebookFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  data?: InputMaybe<FacebookDataFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  paging?: InputMaybe<FacebookPagingFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type FacebookGroupConnection = {
  __typename?: 'facebookGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<FacebookEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<FacebookGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<Facebook>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type FacebookGroupConnectionDistinctArgs = {
  field: FacebookFieldsEnum;
};


export type FacebookGroupConnectionGroupArgs = {
  field: FacebookFieldsEnum;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type FacebookGroupConnectionMaxArgs = {
  field: FacebookFieldsEnum;
};


export type FacebookGroupConnectionMinArgs = {
  field: FacebookFieldsEnum;
};


export type FacebookGroupConnectionSumArgs = {
  field: FacebookFieldsEnum;
};

export type FacebookPaging = {
  __typename?: 'facebookPaging';
  cursors?: Maybe<FacebookPagingCursors>;
};

export type FacebookPagingCursors = {
  __typename?: 'facebookPagingCursors';
  after?: Maybe<Scalars['String']['output']>;
  before?: Maybe<Scalars['String']['output']>;
};

export type FacebookPagingCursorsFilterInput = {
  after?: InputMaybe<StringQueryOperatorInput>;
  before?: InputMaybe<StringQueryOperatorInput>;
};

export type FacebookPagingFilterInput = {
  cursors?: InputMaybe<FacebookPagingCursorsFilterInput>;
};

export type FacebookSortInput = {
  fields?: InputMaybe<Array<InputMaybe<FacebookFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type TicketsNavItemQueryVariables = Exact<{ [key: string]: never; }>;


export type TicketsNavItemQuery = { __typename?: 'Query', ticketsNavItem?: { __typename?: 'ContentfulNavigationItem', url?: string | null } | null };

export type BannerImagesQueryVariables = Exact<{ [key: string]: never; }>;


export type BannerImagesQuery = { __typename?: 'Query', contentfulBanner?: { __typename?: 'ContentfulBanner', imageMobile?: { __typename?: 'ContentfulAsset', gatsbyImageData?: any | null } | null, imageDesktop?: { __typename?: 'ContentfulAsset', gatsbyImageData?: any | null } | null } | null };

export type ContentfulFrontPageIntroductionSectionQueryVariables = Exact<{ [key: string]: never; }>;


export type ContentfulFrontPageIntroductionSectionQuery = { __typename?: 'Query', contentfulFrontPageIntroductionSection?: { __typename?: 'ContentfulFrontPageIntroductionSection', title?: string | null, images?: Array<{ __typename?: 'ContentfulAsset', gatsbyImageData?: any | null, description?: string | null } | null> | null, text?: { __typename?: 'ContentfulFrontPageIntroductionSectionText', raw?: string | null } | null } | null };

export type FrontPageDateSectionQueryVariables = Exact<{ [key: string]: never; }>;


export type FrontPageDateSectionQuery = { __typename?: 'Query', dateSection?: { __typename?: 'ContentfulFrontPageSectionDate', startDate?: any | null, endDate?: any | null, backgroundImage?: { __typename?: 'ContentfulAsset', url?: string | null } | null } | null };

export type NavigationItemsQueryVariables = Exact<{ [key: string]: never; }>;


export type NavigationItemsQuery = { __typename?: 'Query', contentfulNavigation?: { __typename?: 'ContentfulNavigation', items?: Array<{ __typename?: 'ContentfulNavigationItem', title?: string | null, url?: string | null, navigationItems?: Array<{ __typename?: 'ContentfulNavigationItem', title?: string | null, url?: string | null } | null> | null } | null> | null } | null };

export type SiteMetadataQueryVariables = Exact<{ [key: string]: never; }>;


export type SiteMetadataQuery = { __typename?: 'Query', site?: { __typename?: 'Site', siteMetadata?: { __typename?: 'SiteSiteMetadata', title?: string | null, description?: string | null, siteUrl?: string | null, referrer?: string | null } | null } | null };

export type FaqPageQueryVariables = Exact<{ [key: string]: never; }>;


export type FaqPageQuery = { __typename?: 'Query', contentfulFaq?: { __typename?: 'ContentfulFaq', title?: string | null, faqText?: { __typename?: 'ContentfulFaqFaqText', raw?: string | null } | null } | null };

export type GalleryPageQueryVariables = Exact<{ [key: string]: never; }>;


export type GalleryPageQuery = { __typename?: 'Query', allContentfulGallery: { __typename?: 'ContentfulGalleryConnection', edges: Array<{ __typename?: 'ContentfulGalleryEdge', node: { __typename?: 'ContentfulGallery', id: string, title?: string | null, bannerMobile?: { __typename?: 'ContentfulAsset', gatsbyImageData?: any | null, title?: string | null } | null } }> } };

export type GalleryDetailPageQueryVariables = Exact<{
  id?: InputMaybe<Scalars['String']['input']>;
}>;


export type GalleryDetailPageQuery = { __typename?: 'Query', albums: { __typename?: 'facebookConnection', nodes: Array<{ __typename?: 'facebook', data?: Array<{ __typename?: 'facebookData', id?: string | null, name?: string | null, photos?: { __typename?: 'facebookDataPhotos', data?: Array<{ __typename?: 'facebookDataPhotosData', id?: string | null, webp_images?: Array<{ __typename?: 'facebookDataPhotosDataWebp_images', source?: string | null, height?: number | null, width?: number | null } | null> | null } | null> | null, paging?: { __typename?: 'facebookDataPhotosPaging', next?: string | null, cursors?: { __typename?: 'facebookDataPhotosPagingCursors', before?: string | null, after?: string | null } | null } | null } | null } | null> | null }> }, contentfulGallery?: { __typename?: 'ContentfulGallery', description?: string | null, eventDate?: any | null, eventDateEnd?: any | null, facebookAlbumId?: string | null, id: string, title?: string | null, bannerDesktop?: { __typename?: 'ContentfulAsset', gatsbyImageData?: any | null, title?: string | null } | null, bannerMobile?: { __typename?: 'ContentfulAsset', gatsbyImageData?: any | null, title?: string | null } | null, lineup?: { __typename?: 'ContentfulLineup', url?: any | null } | null } | null };

export type IndexPageQueryVariables = Exact<{ [key: string]: never; }>;


export type IndexPageQuery = { __typename?: 'Query', allPosts: { __typename?: 'ContentfulPostConnection', nodes: Array<{ __typename?: 'ContentfulPost', id: string, title?: string | null, node_locale: string, text?: { __typename?: 'ContentfulPostText', raw?: string | null } | null, thumbnail?: { __typename?: 'ContentfulAsset', id: string, url?: string | null, title?: string | null } | null, gallery?: Array<{ __typename?: 'ContentfulAsset', id: string, url?: string | null } | null> | null }> }, promoVideo: { __typename?: 'ContentfulPromoVideoConnection', nodes: Array<{ __typename?: 'ContentfulPromoVideo', video?: { __typename?: 'ContentfulAsset', title?: string | null, url?: string | null } | null }> }, infoItems: { __typename?: 'InfoItemsJsonConnection', edges: Array<{ __typename?: 'InfoItemsJsonEdge', node: { __typename?: 'InfoItemsJson', id: string, description?: string | null, title?: string | null, imageName?: string | null } }> }, infoItemImages: { __typename?: 'FileConnection', nodes: Array<{ __typename?: 'File', childImageSharp?: { __typename?: 'ImageSharp', gatsbyImageData: any, original?: { __typename?: 'ImageSharpOriginal', width?: number | null, height?: number | null, src?: string | null } | null, fixed?: { __typename?: 'ImageSharpFixed', originalName?: string | null } | null } | null }> }, activities: { __typename?: 'ContentfulActivityConnection', totalCount: number, edges: Array<{ __typename?: 'ContentfulActivityEdge', node: { __typename?: 'ContentfulActivity', title: string, id: string, description: string, image?: { __typename?: 'ContentfulAsset', filename: string, gatsbyImageData?: any | null } | null } }> } };

export type AllArtistsPageQueryVariables = Exact<{ [key: string]: never; }>;


export type AllArtistsPageQuery = { __typename?: 'Query', allArtistsJson: { __typename?: 'ArtistsJsonConnection', nodes: Array<{ __typename?: 'ArtistsJson', country?: string | null, stage?: string | null, images?: Array<string | null> | null, links?: Array<string | null> | null, title?: string | null, order?: number | null, id: string }> }, allImageSharp: { __typename?: 'ImageSharpConnection', nodes: Array<{ __typename?: 'ImageSharp', gatsbyImageData: any, fixed?: { __typename?: 'ImageSharpFixed', originalName?: string | null } | null }> }, noImagePlaceholder: { __typename?: 'ImageSharpConnection', nodes: Array<{ __typename?: 'ImageSharp', gatsbyImageData: any, fixed?: { __typename?: 'ImageSharpFixed', originalName?: string | null } | null }> } };

export type MapPageQueryVariables = Exact<{ [key: string]: never; }>;


export type MapPageQuery = { __typename?: 'Query', contentfulMap?: { __typename?: 'ContentfulMap', mapImage?: { __typename?: 'ContentfulAsset', gatsbyImageData?: any | null, title?: string | null } | null } | null };

export type MerchPageQueryVariables = Exact<{ [key: string]: never; }>;


export type MerchPageQuery = { __typename?: 'Query', merch: { __typename?: 'ContentfulMerchConnection', edges: Array<{ __typename?: 'ContentfulMerchEdge', node: { __typename?: 'ContentfulMerch', price?: number | null, title?: string | null, id: string, image?: { __typename?: 'ContentfulAsset', gatsbyImageData?: any | null, filename: string } | null, description?: { __typename?: 'contentfulMerchDescriptionTextNode', description?: string | null } | null } }> } };

export type MerchDetailPageQueryVariables = Exact<{
  id?: InputMaybe<Scalars['String']['input']>;
}>;


export type MerchDetailPageQuery = { __typename?: 'Query', contentfulMerch?: { __typename?: 'ContentfulMerch', id: string, price?: number | null, title?: string | null, image?: { __typename?: 'ContentfulAsset', gatsbyImageData?: any | null, filename: string } | null, description?: { __typename?: 'contentfulMerchDescriptionTextNode', description?: string | null } | null } | null };

export type NewsPageQueryVariables = Exact<{ [key: string]: never; }>;


export type NewsPageQuery = { __typename?: 'Query', allContentfulPost: { __typename?: 'ContentfulPostConnection', edges: Array<{ __typename?: 'ContentfulPostEdge', node: { __typename?: 'ContentfulPost', id: string, title?: string | null, node_locale: string, updatedAt?: any | null, gallery?: Array<{ __typename?: 'ContentfulAsset', id: string, url?: string | null, title?: string | null } | null> | null, thumbnail?: { __typename?: 'ContentfulAsset', id: string, url?: string | null, title?: string | null } | null, text?: { __typename?: 'ContentfulPostText', raw?: string | null } | null } }> } };

export type NewsDetailPageQueryVariables = Exact<{
  id?: InputMaybe<Scalars['String']['input']>;
}>;


export type NewsDetailPageQuery = { __typename?: 'Query', contentfulPost?: { __typename?: 'ContentfulPost', title?: string | null, updatedAt?: any | null, text?: { __typename?: 'ContentfulPostText', raw?: string | null } | null, gallery?: Array<{ __typename?: 'ContentfulAsset', id: string, title?: string | null, url?: string | null } | null> | null } | null };

export type LineupDetailPageQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type LineupDetailPageQuery = { __typename?: 'Query', contentfulLineup?: { __typename?: 'ContentfulLineup', id: string, name?: string | null, artists?: Array<{ __typename?: 'ContentfulArtist', countryOfOrigin?: string | null, name?: string | null, socialMediaLink?: string | null, photo?: { __typename?: 'ContentfulAsset', gatsbyImageData?: any | null } | null, stage?: { __typename?: 'ContentfulStage', id: string, title?: string | null, order: number } | null } | null> | null } | null, noImagePlaceholder: { __typename?: 'ImageSharpConnection', nodes: Array<{ __typename?: 'ImageSharp', gatsbyImageData: any, fixed?: { __typename?: 'ImageSharpFixed', originalName?: string | null } | null }> } };
