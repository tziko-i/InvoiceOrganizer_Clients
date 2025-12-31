import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { InvoiceService } from '../../core/services/invoice.service';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
 })
 export class Dashboard implements OnInit {
  stats!: DashboardStats;
  monthlyData!: MonthlyData[];
  vendorData!: VendorData[];
  recentInvoices!: RecentInvoice[];
  constructor(
    private invoiceService: InvoiceService,
    //private statsService: StatsService
  ) {}
  ngOnInit() {
    this.loadDashboardData();
  }
  loadDashboardData() {
    // תואירק API
  }
 }
 // מסך דאשבורד(Dashboard )
interface MonthlyData {
month: string;
amount: number;
}
interface VendorData {
name: string;
value: number;
color: string;
}
interface RecentInvoice {
id: number;
vendor: string;
date: string;
amount: number;
status: 'processed' | 'pending';
}
interface DashboardStats {
totalInvoices: number;
totalExpenses: number;
avgPerInvoice: number;
activeVendors: number;
invoicesChange: number; // אחוז
expensesChange: number; // אחוז
}