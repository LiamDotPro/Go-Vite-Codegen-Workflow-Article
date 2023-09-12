/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DummyService {

    /**
     * Dummy endpoint
     * Fetch data from dummy endpoint
     * @param id Some ID
     * @returns any OK
     * @throws ApiError
     */
    public static dummyEndpoint(
id: number,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/dummy/:id',
            path: {
                'id': id,
            },
        });
    }

}
