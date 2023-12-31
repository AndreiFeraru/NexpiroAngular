import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.sass'],
})
export class VerifyEmailComponent implements OnInit {
  private currentUser: any;

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.auth.getCurrentUser().subscribe((user) => {
      this.currentUser = user;
    });
    this.auth.sendEmailForVerification(this.currentUser);
    // TODO add resend link button with timer to avoid spamming.
  }
}
