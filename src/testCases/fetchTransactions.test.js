import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import {
  fetchTransactions,
  handleHttpErrors,
} from "../utility/services/apiService";

describe("fetchTransactions", () => {
  beforeEach(() => {
    global.fetch = vi.fn(); // Mock fetch
  });

  afterEach(() => {
    vi.restoreAllMocks(); // Restore original fetch
  });

  it("should return data on a successful API call", async () => {
    const mockData = [
      {
        id: 3,
        customerName: "Shivam",
        purchaseDate: "2025-01-05",
        purchaseProduct: "Headphone",
        price: 50.9,
      },
    ];
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    });

    const data = await fetchTransactions("/data/data.json");
    expect(data).toEqual(mockData);
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });

  it("should throw an error for 404 response", async () => {
    // Mock the fetch function to return a 404 error
    global.fetch.mockResolvedValueOnce({
      ok: false,
      status: 404,
      statusText: "Not Found",
    });
    // Test if the function throws the correct error message
    await expect(fetchTransactions("/data/data.json")).rejects.toThrow(handleHttpErrors(404));
  });

  it("should handle 500 error", async () => {
    // for internal server error
    global.fetch.mockResolvedValueOnce({
      ok: false,
      status: 500,
      statusText: "Internal Server Error",
    });
    await expect(fetchTransactions("/data/data.json")).rejects.toThrow(handleHttpErrors(500));
  });

  it("should handle other fetch errors", async () => {
    global.fetch.mockResolvedValueOnce({
      ok: false,
      status: 403,
      statusText: "Forbidden",
    });
    await expect(fetchTransactions("/data/data.json")).rejects.toThrow(handleHttpErrors(403));
  });
});
