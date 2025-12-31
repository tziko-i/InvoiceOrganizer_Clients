import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ExtractedData } from '../models/invoice.model';

@Injectable({
  providedIn: 'root',
})
export class OCRService {
  private apiUrl = 'http://localhost:5000/api/ocr';
  constructor(private http: HttpClient) {}
  process(fileId: string): Observable<ExtractedData> {
    return this.http.post<ExtractedData>(`${this.apiUrl}/process`, { fileId });
  }
  validate(data: ExtractedData): Observable<{ isValid: boolean; errors: string[] }> {
    return this.http.post<{ isValid: boolean; errors: string[] }>(`${this.apiUrl}/validate`, data);
  }
}
