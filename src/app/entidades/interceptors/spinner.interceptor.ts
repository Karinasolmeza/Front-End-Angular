import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, finalize } from "rxjs";
import { SpinnerService } from "src/app/servicios/spinner.service";

@Injectable()
export class SpinnerIntercepor implements HttpInterceptor {
  constructor(private spinnerSvc: SpinnerService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinnerSvc.show();
    return next.handle(req).pipe(
      finalize(() => this.spinnerSvc.hide()));
  }
}