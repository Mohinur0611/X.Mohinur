function updateDateTime() {
    const now = new Date();
    const days = [
      "Yakshanba", "Dushanba", "Seshanba", "Chorshanba",
      "Payshanba", "Juma", "Shanba"
    ];
    const months = [
      "yanvar", "fevral", "mart", "aprel", "may", "iyun",
      "iyul", "avgust", "sentyabr", "oktyabr", "noyabr", "dekabr"
    ];
    const dayName = days[now.getDay()];
    const day = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    const hour = String(now.getHours()).padStart(2, '0');
    const minute = String(now.getMinutes()).padStart(2, '0');
    const second = String(now.getSeconds()).padStart(2, '0');
  
    const formatted = `${dayName}, ${day}- ${month} ${year} ${hour}:${minute}:${second}`;
    document.getElementById('datetime').textContent = formatted;
  }
  
  setInterval(updateDateTime, 1000);
  updateDateTime();
  