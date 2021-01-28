const days: string[] = [
  `Monday`,
  `Tuesday`,
  `Wednesday`,
  `Thusrday`,
  `Friday`,
  `Saturday`,
  `Sunday`,
];

interface Reservationy {
  getDowBooking(): string;
  getCodeBooking(): string;
}

class Reservation implements Reservationy {
  getDowBooking(): string {
    let i: number = Math.floor(Math.random() * 6);
    return days[i].substring(0, 3).toUpperCase();
  }

  getCodeBooking(): string {
    return Math.random().toString(36).substring(2, 10).toUpperCase();
  }
  getReservedBooking(): void {
    console.log(
      `Booking# ${this.getCodeBooking()} for ${this.getDowBooking()}`
    );
  }
}

console.log(new Reservation());

let newBooking = new Reservation();
for (let i: number = 0; i < 10; i++) {
  newBooking.getReservedBooking();
}
