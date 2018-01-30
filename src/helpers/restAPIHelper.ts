import * as fetchHelper from './fetchHelper'
import { Observable } from 'rxjs'
import { API_URL } from '../config'

export function findAll<T>(resource: string): Observable<T[]> {
    return Observable.from(fetchHelper.get(`${API_URL}/${resource}`)).switchMap(res => res.json())
  }
  
  export function findOne<T>(resource: string, id: number): Observable<T> {
    return Observable.from(fetchHelper.get(`${API_URL}/${resource}/${id}`)).switchMap(res => res.json())
  }
  
  export function put<T>(resource: string, id: number, data: T): Observable<T> {
    return Observable.from(fetchHelper.putJson(`${API_URL}/${resource}/${id}`, data)).switchMap(res => res.json())
  }
  
  export function post<T>(resource: string, data: T): Observable<T> {
    return Observable.from(fetchHelper.postJson(`${API_URL}/${resource}`, data)).switchMap(res => res.json())
  }
  
  export function httpDelete<T>(resource: string, id: number): Observable<T> {
    return Observable.from(fetchHelper.httpDelete(`${API_URL}/${resource}/${id}`)).switchMap(res => res.json())
  }