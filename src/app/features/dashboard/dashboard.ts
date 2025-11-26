import { Component } from '@angular/core';

// מסך דאשבורד(Dashboard )

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
 })
 export class DashboardComponent implements OnInit {
  stats: DashboardStats;
  monthlyData: MonthlyData[];
  vendorData: VendorData[];
  recentInvoices: RecentInvoice[];
  constructor(
    private invoiceService: InvoiceService,
    private statsService: StatsService
  ) {}
  ngOnInit() {
    this.loadDashboardData();
  }
  loadDashboardData() {
    // תואירק API
  }
 }