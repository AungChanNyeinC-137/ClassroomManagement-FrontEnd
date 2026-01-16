import { MOCK_SUBJECTS } from "@/constants/mock-data";
import {
  DataProvider,
  GetListResponse,
  GetListParams,
  BaseRecord,
} from "@refinedev/core";

export const dataProvider: DataProvider = {
  getList: async <TData extends BaseRecord = BaseRecord>({
    resource,
  }: GetListParams): Promise<GetListResponse<TData>> => {
    if (resource != "subjects") {
      return { data: [] as TData[], total: 0 };
    }
    return {
      data: MOCK_SUBJECTS as unknown as TData[],
      total: MOCK_SUBJECTS.length,
    };
  },
  getOne: async() => {throw new Error('this function is not present in mock dataProvider')},
  create: async() => {throw new Error('this function is not present in mock dataProvider')},
  update: async() => {throw new Error('this function is not present in mock dataProvider')},
  deleteOne: async() => {throw new Error('this function is not present in mock dataProvider')},
  getApiUrl:()=> '',  
};
