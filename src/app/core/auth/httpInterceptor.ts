import { Injectable, inject } from "@angular/core";
import { HttpInterceptorFn } from "@angular/common/http";
import { Auth } from "./auth";

export const authInterceptor: HttpInterceptorFn = (req, next) => {
    const auth = inject(Auth);
    const token = localStorage.getItem('jwt-mock');

    if (token) {
        const cloned = req.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`
            }
        });
        return next(cloned);
    }

    return next(req);
}