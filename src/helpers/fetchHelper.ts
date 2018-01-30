
export function get(url: string, config: RequestInit = {}) {
    return fetch(url, config)
  }
  
  export function post(url: string, data: any, config: RequestInit = {}) {
    return fetch(url, {
      method: "POST",
      body: data,
      ...config
    })
  }
  
  export function postJson(url: string, data: any = {}, config: RequestInit = {}) {
    const fetchConfig: any = {
      ...config,
      headers: {
        ...config.headers,
        'Content-Type': 'application/json'
      }
    }
    return post(url, JSON.stringify(data), fetchConfig)
  }
  
  export function put(url: string, data: any = {}, config: RequestInit = {}) {
    return fetch(url, {
      method: "PUT",
      body: data,
      ...config
    })
  }
  
  export function putJson(url: string, data: any = {}, config: RequestInit = {}) {
    const fetchConfig: any = {
      ...config,
      headers: {
        ...config.headers,
        'Content-Type': 'application/json'
      }
    }
    return put(url, JSON.stringify(data), fetchConfig)
  }
  
  export function httpDelete(url: string, config: any = {}) {
    return fetch(url, {
      ...config,
      method: "DELETE",
    })
  }