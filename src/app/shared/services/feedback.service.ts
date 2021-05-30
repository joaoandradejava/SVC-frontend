import { FeedbackInput } from './../models/feedback-input';
import { Backend } from './../utils/backend';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FeedbackService {
  constructor(private http: HttpClient) {}

  public enviarFeedback(feedbackInput: FeedbackInput, usuarioId: number): Observable<any> {
    return this.http.post(Backend.getBaseUsuario + `/${usuarioId}/feedbacks`, feedbackInput);
  }
}
