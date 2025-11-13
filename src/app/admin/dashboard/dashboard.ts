import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  staffList = ['All Staff', 'John Doe', 'Jane Smith', 'Michael Adams'];
  selectedStaff = 'All Staff';

  signIns = 123;
  lateness = 8.5;
  earlyBirds = 34;
  suspensions = 3;

  topEarlyStaff = [
    { name: 'Jane Smith', time: '6:45 AM' },
    { name: 'John Doe', time: '6:50 AM' },
    { name: 'Emma Brown', time: '6:52 AM' },
  ];

  latenessCount = [
    { name: 'Michael Adams', days: 5 },
    { name: 'Sophia White', days: 3 },
    { name: 'Chris Green', days: 2 },
  ];

  // Modal state
  showSignInModal = false;
  showSuccessMessage = false;

  // Sign-in form data
  signInForm = {
    employeeId: '',
    department: '',
    email: '',
    signInTime: '',
    notes: ''
  };

  openSignInModal() {
    this.showSignInModal = true;
    this.showSuccessMessage = false;
    // Reset form
    this.signInForm = {
      employeeId: '',
      department: '',
      email: '',
      signInTime: '',
      notes: ''
    };
  }

  closeSignInModal() {
    this.showSignInModal = false;
    this.showSuccessMessage = false;
  }

  submitSignIn() {
    // Validate required fields
    if (!this.signInForm.employeeId || !this.signInForm.department || !this.signInForm.email) {
      alert('Please fill in all required fields');
      return;
    }

    // If no time provided, use current time
    if (!this.signInForm.signInTime) {
      const now = new Date();
      this.signInForm.signInTime = now.toTimeString().slice(0, 5);
    }

    // Here you would typically send this data to your backend API
    console.log('Sign-in created:', this.signInForm);

    // Show success message
    this.showSuccessMessage = true;

    // Increment sign-ins count
    this.signIns++;

    // Close modal after 2 seconds
    setTimeout(() => {
      this.closeSignInModal();
    }, 2000);
  }
}
 