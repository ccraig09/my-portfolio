import React from "react";
import dayjs from "dayjs";
import { Box, Typography, Card, Container, Grid } from "@mui/material";

// -------- SETTINGS --------
const WEDDING_DATE = "2025-07-12T16:00:00"; // 4:00PM July 12, 2025
const VENUE = "The Canopy Tulsa";
const ADDRESS = "19 E. Reconciliation Way, Tulsa, OK";
const CEREMONY_TIME = "4:00 PM";
const RECEPTION_TIME = "6:00 PM";

// -------- COUNTDOWN LOGIC --------
function getCountdown() {
  const today = dayjs();
  const weddingDay = dayjs(WEDDING_DATE);
  const diff = weddingDay.startOf("day").diff(today.startOf("day"), "day");
  if (diff > 0) {
    return { count: diff, label: "Days until our wedding" };
  } else if (diff < 0) {
    return { count: Math.abs(diff), label: 'Days since we said "I do"' };
  } else {
    return { count: 0, label: "Today is our wedding day!" };
  }
}

const { count, label } = getCountdown();

export default function WeddingCountdown() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f7f7f7 0%, #fffaf5 100%)",
        py: { xs: 2, md: 4 },
      }}
    >
      <Container maxWidth="sm">
        {/* Photo Header */}
        <Box
          sx={{
            width: "100%",
            height: { xs: 240, md: 320 },
            borderRadius: 4,
            overflow: "hidden",
            boxShadow: 2,
            mb: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#e6e1dc",
            position: "relative",
          }}
        >
          {/* Swap this src with your real photo! */}
          <img
            src="/us_brown.png"
            alt="Jackia & Carlos"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              filter: "brightness(0.93)",
            }}
          />
          {/* Optional romantic overlay */}
          <Box
            sx={{
              position: "absolute",
              left: 0,
              top: 0,
              width: "100%",
              height: "100%",
              bgcolor: "rgba(255,255,255,0.13)",
            }}
          />
        </Box>

        {/* Wedding Title and Names */}
        <Typography
          variant="h3"
          align="center"
          fontWeight="bold"
          sx={{
            fontFamily: "Playfair Display, serif",
            letterSpacing: 2,
            color: "#b38b58",
            mb: 0.5,
          }}
        >
          Our Wedding
        </Typography>
        <Typography
          variant="h5"
          align="center"
          sx={{
            color: "#6d5843",
            fontFamily: "Playfair Display, serif",
            fontWeight: 400,
          }}
        >
          Jackia & Carlos
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          sx={{ color: "#b38b58", mb: 3, fontWeight: 600 }}
        >
          {dayjs(WEDDING_DATE).format("MMMM D, YYYY")}
        </Typography>

        {/* Countdown Timer */}
        <Card
          elevation={3}
          sx={{
            py: 4,
            px: 2,
            mb: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            background: "#fff8f1",
            borderRadius: 4,
            border: "1.5px solid #f2e5d7",
          }}
        >
          <Typography
            variant="h2"
            fontWeight="bold"
            sx={{
              color: "#c39057",
              letterSpacing: 2,
              mb: 0.5,
              fontFamily: "Playfair Display, serif",
            }}
          >
            {count}
          </Typography>
          <Typography
            variant="h6"
            align="center"
            sx={{ color: "#7a6b5c", fontWeight: 500 }}
          >
            {label}
          </Typography>
        </Card>

        {/* Ceremony & Reception Info */}
        <Grid container spacing={2} mb={2}>
          <Grid item xs={12} sm={6}>
            <Card
              elevation={2}
              sx={{
                background: "#fff",
                borderRadius: 4,
                border: "1.5px solid #f2e5d7",
                py: 2.5,
                px: 2,
                textAlign: "center",
              }}
            >
              <Typography
                variant="subtitle1"
                fontWeight={700}
                color="#b38b58"
                mb={0.5}
              >
                Ceremony
              </Typography>
              <Typography variant="body2" fontWeight={500} color="#6d5843">
                {VENUE}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {ADDRESS}
              </Typography>
              <Typography
                variant="body2"
                color="#b38b58"
                fontWeight={600}
                mt={0.5}
              >
                {CEREMONY_TIME}
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card
              elevation={2}
              sx={{
                background: "#fff",
                borderRadius: 4,
                border: "1.5px solid #f2e5d7",
                py: 2.5,
                px: 2,
                textAlign: "center",
              }}
            >
              <Typography
                variant="subtitle1"
                fontWeight={700}
                color="#b38b58"
                mb={0.5}
              >
                Reception
              </Typography>
              <Typography variant="body2" fontWeight={500} color="#6d5843">
                {VENUE}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {ADDRESS}
              </Typography>
              <Typography
                variant="body2"
                color="#b38b58"
                fontWeight={600}
                mt={0.5}
              >
                {RECEPTION_TIME}
              </Typography>
            </Card>
          </Grid>
        </Grid>

        {/* Message from Couple */}
        <Card
          elevation={0}
          sx={{
            borderRadius: 4,
            background: "#fffaf5",
            border: "1.5px solid #f2e5d7",
            px: 3,
            py: 3.5,
            textAlign: "center",
            mt: 3,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "#b38b58",
              fontWeight: 700,
              mb: 1,
              letterSpacing: 1,
            }}
          >
            A Message from the Couple
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: 2, fontSize: "1.1rem", lineHeight: 1.7 }}
          >
            We are beyond excited to celebrate this special day with you all!
            This page will keep you updated with all the details, and help those
            who can't attend in person to still be a part of our big day. We
            can't wait to see you all at The Canopy Tulsa!
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontStyle: "italic", color: "#6d5843" }}
          >
            With love, Jackia & Carlos
          </Typography>
        </Card>
      </Container>
    </Box>
  );
}
