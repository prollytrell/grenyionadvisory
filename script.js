/* =========================
   SERVICES PAGE FIXES (REAL)
========================= */

/* Fix container width */
section {
  max-width: 1100px;
  margin: 0 auto;
  padding: 70px 20px;
}

/* Fix cards layout */
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  align-items: stretch;
}

/* Fix card look */
.card {
  background: rgba(10, 25, 50, 0.9);
  border-radius: 16px;
  padding: 24px;
  border: 1px solid rgba(255,255,255,0.08);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
}

/* Fix icon */
.icon {
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: rgba(63,185,80,0.15);
  font-size: 18px;
  margin-bottom: 12px;
}

/* Fix button issue (VERY IMPORTANT) */
.cta {
  display: inline-block;
  text-align: center;
  text-decoration: none;
  pointer-events: auto;
  z-index: 10;
}

/* Badge fix */
.badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background: #3fb950;
  color: #000;
  padding: 5px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
}

.card.popular {
  border: 1px solid rgba(63,185,80,0.5);
}

/* Fix table styling */
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 25px;
}

th, td {
  padding: 14px;
  border-bottom: 1px solid rgba(255,255,255,0.08);
  text-align: center;
}

th {
  background: rgba(63,185,80,0.15);
}

tr:hover {
  background: rgba(255,255,255,0.03);
}

/* Fix spacing */
section + section {
  margin-top: 10px;
}

/* Mobile */
@media (max-width: 768px) {
  .cards {
    grid-template-columns: 1fr;
  }
}
