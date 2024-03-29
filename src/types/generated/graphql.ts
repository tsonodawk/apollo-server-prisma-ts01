import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { Context } from '../context';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Book = {
  __typename?: 'Book';
  author?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ChatUser = {
  __typename?: 'ChatUser';
  id: Scalars['ID'];
  messages?: Maybe<Array<Maybe<Message>>>;
  name?: Maybe<Scalars['String']>;
};

export type Company = {
  __typename?: 'Company';
  companyName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  stores?: Maybe<Array<Maybe<Store>>>;
};

export type Department = {
  __typename?: 'Department';
  createdAt?: Maybe<Scalars['DateTime']>;
  departmentCode: Scalars['String'];
  departmentName?: Maybe<Scalars['String']>;
  employees?: Maybe<Array<Maybe<Employee>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type Employee = {
  __typename?: 'Employee';
  createdAt?: Maybe<Scalars['DateTime']>;
  departmentCode?: Maybe<Scalars['String']>;
  departments?: Maybe<Array<Maybe<Department>>>;
  employeeCode?: Maybe<Scalars['String']>;
  employeeName?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type Launch = {
  __typename?: 'Launch';
  id: Scalars['ID'];
  isBooked: Scalars['Boolean'];
  mission?: Maybe<Mission>;
  rocket?: Maybe<Rocket>;
  site?: Maybe<Scalars['String']>;
};

export type Message = {
  __typename?: 'Message';
  body?: Maybe<Scalars['String']>;
  chatUser?: Maybe<ChatUser>;
  id: Scalars['ID'];
  room?: Maybe<Room>;
};

export type Mission = {
  __typename?: 'Mission';
  missionPatch?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};


export type MissionMissionPatchArgs = {
  size?: Maybe<PatchSize>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addDepartment?: Maybe<Department>;
  bookTrips: TripUpdateResponse;
  cancelTrip: TripUpdateResponse;
  creatEmployee?: Maybe<Employee>;
  deleteEmployee?: Maybe<Employee>;
  login?: Maybe<Scalars['String']>;
  updateEmployee?: Maybe<Employee>;
};


export type MutationAddDepartmentArgs = {
  departmentCode: Scalars['String'];
  departmentName: Scalars['String'];
};


export type MutationBookTripsArgs = {
  launchIds: Array<Maybe<Scalars['ID']>>;
};


export type MutationCancelTripArgs = {
  launchId: Scalars['ID'];
};


export type MutationCreatEmployeeArgs = {
  deptcodes?: Maybe<Array<Maybe<Scalars['String']>>>;
  employeeCode: Scalars['String'];
  employeeName?: Maybe<Scalars['String']>;
};


export type MutationDeleteEmployeeArgs = {
  employeeCode: Scalars['String'];
};


export type MutationLoginArgs = {
  email?: Maybe<Scalars['String']>;
};


export type MutationUpdateEmployeeArgs = {
  deptcodes: Array<Scalars['String']>;
  employeeCode: Scalars['String'];
};

export enum PatchSize {
  Large = 'LARGE',
  Small = 'SMALL'
}

export type Query = {
  __typename?: 'Query';
  books: Array<Book>;
  getCompanyById?: Maybe<Company>;
  getStoreByStoreCode?: Maybe<Store>;
  launch?: Maybe<Launch>;
  launches: Array<Maybe<Launch>>;
  listCompanys?: Maybe<Array<Maybe<Company>>>;
  listDepartment?: Maybe<Array<Maybe<Department>>>;
  listEmployee?: Maybe<Array<Maybe<Employee>>>;
  listStores?: Maybe<Array<Maybe<Store>>>;
  listStoresByCompanyId?: Maybe<Array<Maybe<Store>>>;
};


export type QueryGetCompanyByIdArgs = {
  id: Scalars['Int'];
};


export type QueryGetStoreByStoreCodeArgs = {
  storeCode: Scalars['String'];
};


export type QueryLaunchArgs = {
  id: Scalars['ID'];
};


export type QueryListStoresByCompanyIdArgs = {
  companyId: Scalars['Int'];
};

export type Rocket = {
  __typename?: 'Rocket';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type Room = {
  __typename?: 'Room';
  id: Scalars['ID'];
  messages?: Maybe<Array<Maybe<Message>>>;
  name?: Maybe<Scalars['String']>;
};

export type Store = {
  __typename?: 'Store';
  company?: Maybe<Company>;
  companyId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  storeCode?: Maybe<Scalars['String']>;
  storeName?: Maybe<Scalars['String']>;
};

export type TripUpdateResponse = {
  __typename?: 'TripUpdateResponse';
  launches?: Maybe<Array<Maybe<Launch>>>;
  message?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Book: ResolverTypeWrapper<Book>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  ChatUser: ResolverTypeWrapper<ChatUser>;
  Company: ResolverTypeWrapper<Company>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  Department: ResolverTypeWrapper<Department>;
  Employee: ResolverTypeWrapper<Employee>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Launch: ResolverTypeWrapper<Launch>;
  Message: ResolverTypeWrapper<Message>;
  Mission: ResolverTypeWrapper<Mission>;
  Mutation: ResolverTypeWrapper<{}>;
  PatchSize: PatchSize;
  Query: ResolverTypeWrapper<{}>;
  Rocket: ResolverTypeWrapper<Rocket>;
  Room: ResolverTypeWrapper<Room>;
  Store: ResolverTypeWrapper<Store>;
  String: ResolverTypeWrapper<Scalars['String']>;
  TripUpdateResponse: ResolverTypeWrapper<TripUpdateResponse>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Book: Book;
  Boolean: Scalars['Boolean'];
  ChatUser: ChatUser;
  Company: Company;
  DateTime: Scalars['DateTime'];
  Department: Department;
  Employee: Employee;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Launch: Launch;
  Message: Message;
  Mission: Mission;
  Mutation: {};
  Query: {};
  Rocket: Rocket;
  Room: Room;
  Store: Store;
  String: Scalars['String'];
  TripUpdateResponse: TripUpdateResponse;
}>;

export type BookResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Book'] = ResolversParentTypes['Book']> = ResolversObject<{
  author?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ChatUserResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ChatUser'] = ResolversParentTypes['ChatUser']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  messages?: Resolver<Maybe<Array<Maybe<ResolversTypes['Message']>>>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CompanyResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Company'] = ResolversParentTypes['Company']> = ResolversObject<{
  companyName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  stores?: Resolver<Maybe<Array<Maybe<ResolversTypes['Store']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type DepartmentResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Department'] = ResolversParentTypes['Department']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  departmentCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  departmentName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  employees?: Resolver<Maybe<Array<Maybe<ResolversTypes['Employee']>>>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EmployeeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Employee'] = ResolversParentTypes['Employee']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  departmentCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  departments?: Resolver<Maybe<Array<Maybe<ResolversTypes['Department']>>>, ParentType, ContextType>;
  employeeCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  employeeName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LaunchResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Launch'] = ResolversParentTypes['Launch']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isBooked?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  mission?: Resolver<Maybe<ResolversTypes['Mission']>, ParentType, ContextType>;
  rocket?: Resolver<Maybe<ResolversTypes['Rocket']>, ParentType, ContextType>;
  site?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MessageResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Message'] = ResolversParentTypes['Message']> = ResolversObject<{
  body?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  chatUser?: Resolver<Maybe<ResolversTypes['ChatUser']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  room?: Resolver<Maybe<ResolversTypes['Room']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MissionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mission'] = ResolversParentTypes['Mission']> = ResolversObject<{
  missionPatch?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MissionMissionPatchArgs, never>>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  addDepartment?: Resolver<Maybe<ResolversTypes['Department']>, ParentType, ContextType, RequireFields<MutationAddDepartmentArgs, 'departmentCode' | 'departmentName'>>;
  bookTrips?: Resolver<ResolversTypes['TripUpdateResponse'], ParentType, ContextType, RequireFields<MutationBookTripsArgs, 'launchIds'>>;
  cancelTrip?: Resolver<ResolversTypes['TripUpdateResponse'], ParentType, ContextType, RequireFields<MutationCancelTripArgs, 'launchId'>>;
  creatEmployee?: Resolver<Maybe<ResolversTypes['Employee']>, ParentType, ContextType, RequireFields<MutationCreatEmployeeArgs, 'employeeCode'>>;
  deleteEmployee?: Resolver<Maybe<ResolversTypes['Employee']>, ParentType, ContextType, RequireFields<MutationDeleteEmployeeArgs, 'employeeCode'>>;
  login?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationLoginArgs, never>>;
  updateEmployee?: Resolver<Maybe<ResolversTypes['Employee']>, ParentType, ContextType, RequireFields<MutationUpdateEmployeeArgs, 'deptcodes' | 'employeeCode'>>;
}>;

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  books?: Resolver<Array<ResolversTypes['Book']>, ParentType, ContextType>;
  getCompanyById?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType, RequireFields<QueryGetCompanyByIdArgs, 'id'>>;
  getStoreByStoreCode?: Resolver<Maybe<ResolversTypes['Store']>, ParentType, ContextType, RequireFields<QueryGetStoreByStoreCodeArgs, 'storeCode'>>;
  launch?: Resolver<Maybe<ResolversTypes['Launch']>, ParentType, ContextType, RequireFields<QueryLaunchArgs, 'id'>>;
  launches?: Resolver<Array<Maybe<ResolversTypes['Launch']>>, ParentType, ContextType>;
  listCompanys?: Resolver<Maybe<Array<Maybe<ResolversTypes['Company']>>>, ParentType, ContextType>;
  listDepartment?: Resolver<Maybe<Array<Maybe<ResolversTypes['Department']>>>, ParentType, ContextType>;
  listEmployee?: Resolver<Maybe<Array<Maybe<ResolversTypes['Employee']>>>, ParentType, ContextType>;
  listStores?: Resolver<Maybe<Array<Maybe<ResolversTypes['Store']>>>, ParentType, ContextType>;
  listStoresByCompanyId?: Resolver<Maybe<Array<Maybe<ResolversTypes['Store']>>>, ParentType, ContextType, RequireFields<QueryListStoresByCompanyIdArgs, 'companyId'>>;
}>;

export type RocketResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Rocket'] = ResolversParentTypes['Rocket']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RoomResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Room'] = ResolversParentTypes['Room']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  messages?: Resolver<Maybe<Array<Maybe<ResolversTypes['Message']>>>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StoreResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Store'] = ResolversParentTypes['Store']> = ResolversObject<{
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>;
  companyId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  storeCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  storeName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TripUpdateResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['TripUpdateResponse'] = ResolversParentTypes['TripUpdateResponse']> = ResolversObject<{
  launches?: Resolver<Maybe<Array<Maybe<ResolversTypes['Launch']>>>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = Context> = ResolversObject<{
  Book?: BookResolvers<ContextType>;
  ChatUser?: ChatUserResolvers<ContextType>;
  Company?: CompanyResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Department?: DepartmentResolvers<ContextType>;
  Employee?: EmployeeResolvers<ContextType>;
  Launch?: LaunchResolvers<ContextType>;
  Message?: MessageResolvers<ContextType>;
  Mission?: MissionResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Rocket?: RocketResolvers<ContextType>;
  Room?: RoomResolvers<ContextType>;
  Store?: StoreResolvers<ContextType>;
  TripUpdateResponse?: TripUpdateResponseResolvers<ContextType>;
}>;

