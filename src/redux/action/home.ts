
import { apiClient } from "@/utils/apiHandler";

export const callApiForHomeData = async (
  input: string,
  page?: number,
  perPage?: number,
) => {
  try {
    const response = await apiClient.get(`/api-endpoint-would-be-here?input=${input}`,
      {
        params: {
          page: page || 1,
          perPage: perPage || 100,
        },
      }
    );
    return response.data.data;
  } catch (err) {
    console.log(err);
  }
};
