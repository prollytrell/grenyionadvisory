/* =========================
   IMPROVED LAYOUT FIXES
========================= */

/* Center main content better */
section {
  max-width: 1100px;
  margin: 0 auto;
  padding: 80px 20px;
}

/* Fix cards alignment */
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-top: 30px;
}

/* Improve card proportions */
.card {
  padding: 24px;
  border-radius: 14px;
  background: linear-gradient(180deg, rgba(10, 30, 60, 0.9), rgba(5, 15, 30, 0.9));
  border: 1px solid rgba(255,255,255,0.08);
  min-height: 260px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* Fix icon styling (clean, not emoji-heavy look) */
.icon {
  font-size: 20px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: rgba(63,185,80,0.15);
  margin-bottom: 10px;
}

/* Fix badge */
.badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background: #3fb950;
  color: #000;
  padding: 4px 10px;
  font-size: 12px;
  border-radius: 999px;
  font-weight: 600;
}

.card.popular {
  border: 1px solid rgba(63,185,80,0.4);
  transform: scale(1.02);
}

/* Fix spacing inside cards */
.card ul {
  margin: 10px 0;
  padding-left: 18px;
}

/* Fix comparison table */
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  background: rgba(10,30,60,0.6);
  border-radius: 10px;
  overflow: hidden;
}

th, td {
  padding: 12px;
  text-align: center;
  border-bottom: 1px solid rgba(255,255,255,0.08);
}

th {
  background: rgba(63,185,80,0.15);
  font-weight: 600;
}

tr:hover {
  background: rgba(255,255,255,0.03);
}

/* Fix section headers alignment */
h3 {
  margin-bottom: 10px;
}

/* Improve overall vertical rhythm */
section + section {
  margin-top: 20px;
}

/* Mobile fixes */
@media (max-width: 768px) {
  .cards {
    grid-template-columns: 1fr;
  }

  .card.popular {
    transform: none;
  }
}
