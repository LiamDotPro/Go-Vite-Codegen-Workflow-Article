import { useQuery, useMutation, UseQueryOptions, UseMutationOptions } from "@tanstack/react-query";
import { DummyService } from "../requests/services/DummyService";
export const useDummyServiceDummyEndpointKey = "DummyServiceDummyEndpoint";
export const useDummyServiceDummyEndpoint = <TQueryKey extends Array<unknown> = unknown[]>({ id }: {
    id: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<Awaited<ReturnType<typeof DummyService.dummyEndpoint>>, unknown, Awaited<ReturnType<typeof DummyService.dummyEndpoint>>, unknown[]>, "queryKey" | "queryFn" | "initialData">) => useQuery([useDummyServiceDummyEndpointKey, ...(queryKey ?? [{ id }])], () => DummyService.dummyEndpoint(id), options);
