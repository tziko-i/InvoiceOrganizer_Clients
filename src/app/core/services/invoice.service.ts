import { Injectable, signal } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Invoice, InvoiceStatus } from '../models/invoice.model';
@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
    // בשלב ראשון: נתוני דמו. אחרי זה תחליף ב־HTTP ל־API האמיתי
 private readonly _invoices = signal<Invoice[]>([
    {
      id: 1,
      invoiceNumber: 'INV-001',
      vendor: 'ספק א',
      date: '2025-11-01',
      amount: 450.5,
      currency: 'ILS',
      category: 'שירותים',
      status: InvoiceStatus.Verified,

      // השדות שהיו חסרים:
      confidence: 0.95,
      month: '11',         // או '2025-11' או 'נובמבר' – לפי איך שהגדרת במודל
      year: 2025,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      invoiceNumber: 'INV-002',
      vendor: 'ספק ב',
      date: '2025-11-10',
      amount: 1200,
      currency: 'ILS',
      category: 'משרד',
      status: InvoiceStatus.Pending,

      confidence: 0.8,
      month: '11',
      year: 2025,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);

  invoices = this._invoices.asReadonly();

  getAll(): Invoice[] {
    return this._invoices();
  }

  add(invoice: Invoice) {
    this._invoices.update(list => [...list, invoice]);
  }

  update(updated: Invoice) {
    this._invoices.update(list =>
      list.map(inv => (inv.id === updated.id ? updated : inv)),
    );
  }

  delete(id: number) {
    this._invoices.update(list => list.filter(inv => inv.id !== id));
  }
  /*private apiUrl = 'http://localhost:5000/api/invoices';
  constructor(private http: HttpClient) {}
  getAll(filters?: any): Observable<Invoice[]> {
    let params = new HttpParams();
    if (filters) {
      Object.keys(filters).forEach((key) => {
        if (filters[key]) {
          params = params.set(key, filters[key]);
        }
      });
    }
    return this.http.get<Invoice[]>(this.apiUrl, { params });
  }
  getById(id: number): Observable<Invoice> {
    return this.http.get<Invoice>(`${this.apiUrl}/${id}`);
  }
  create(invoice: Partial<Invoice>): Observable<Invoice> {
    return this.http.post<Invoice>(this.apiUrl, invoice);
  }
  update(invoice: Invoice): Observable<Invoice> {
    return this.http.put<Invoice>(`${this.apiUrl}/${invoice.id}`, invoice);
  }
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  updateStatus(id: number, status: InvoiceStatus): Observable<Invoice> {
    return this.http.patch<Invoice>(`${this.apiUrl}/${id}/status`, { status });
  }*/
}
