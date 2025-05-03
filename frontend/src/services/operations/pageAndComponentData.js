import React from 'react';
// import { toast } from "react-hot-toast"
import { apiConnector } from '../apiConnector';
import { catalogData } from '../apis';

// ================ Get Catalog Page Data ================
export const getCatalogPageData = async (categoryId) => {
  let result = [];
  console.log("Category ID:", categoryId);  // Log categoryId to check if it's correct
  try {
    const response = await apiConnector("POST", catalogData.CATALOGPAGEDATA_API, {
      categoryId: categoryId,
    });

    if (!response?.data?.success) {
      throw new Error("Could not fetch category page data");
    }

    console.log("CATALOG PAGE DATA API RESPONSE............", response);
    result = response?.data?.data;
  } catch (error) {
    console.log("CATALOG PAGE DATA API ERROR....", error);
    const errorMessage = error?.response?.data?.message || error?.message || "An unexpected error occurred.";
    result = { error: errorMessage };
  }

  return result;
};
