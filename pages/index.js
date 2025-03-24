import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Grid,
  Card,
  CardContent,
  Button,
  TextField,
  Link as MUILink,
} from "@mui/material";

// Example data (customize freely)
const projects = [
  {
    title: "No Excusas",
    description: "Fitness motivation app using React Native and Firebase.",
  },
  {
    title: "MEFisio",
    description:
      "Reservation management app built with React Native & Firebase.",
  },
  {
    title: "Inventario",
    description: "Inventory management app with barcode scanning.",
  },
  {
    title: "Unifyr",
    description:
      "Event reservation platform (React Native, Node.js, PostgreSQL).",
  },
  {
    title: "Zayanverse",
    description: "Streaming app (Expo, React Native, Firebase).",
  },
  {
    title: "MAPS (Confidential)",
    description: "Details confidential per client agreement.",
  },
  {
    title: "BOSS",
    description:
      "POS system and admin dashboard with React, React Native, Node.js.",
  },
];

const experiences = [
  {
    role: "Full Stack Engineer",
    company: "BuoyFi",
    duration: "July 2023 – December 2024",
    details: [
      "Developed and maintained React Native apps for iOS and Android.",
      "Implemented Rewards feature, boosting user engagement.",
      "Created financial web tools with integrated third-party APIs.",
      "Collaborated cross-functionally to define product roadmaps.",
      "Managed on-call issue triage, improving resolution times.",
    ],
  },
  {
    role: "Mobile Engineer",
    company: "Blue Note Therapeutics",
    duration: "July 2022 – June 2023",
    details: [
      "Built and maintained React Native apps for iOS and Android.",
      "Implemented Jest unit testing, reducing manual testing.",
      "Enhanced user experience for the flagship app “Attune.”",
    ],
  },
  {
    role: "Driver App Tester & Command Center",
    company: "Veyo",
    duration: "January 2016 – November 2019",
    details: [
      "Tested pre-release apps, significantly reducing defects.",
      "Automated manual workflows, increasing operational efficiency.",
      "Resolved internal tickets and streamlined team productivity.",
    ],
  },
];

const skills = [
  "React / React Native / Next.js",
  "TypeScript / JavaScript / C# / Java / Swift",
  "Node.js / Express / PostgreSQL / Firebase",
  "AWS (Lambda, S3, Amplify), Docker, CI/CD",
  "Jest, React Testing Library, Agile Methodologies",
];

export default function Home() {
  // Simple contact form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just log the data. You can integrate an API or email service here.
    console.log("Contact Form Submission:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
    alert("Message sent (in theory)! Check console for data.");
  };

  return (
    <>
      {/* Navbar */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Carlos Craig
          </Typography>
          <Button
            color="inherit"
            href="/CRAIG_CARLOS_TECH_RESUME.pdf"
            download
            sx={{ textTransform: "none" }}
          >
            Download Resume
          </Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4, mb: 4 }}>
        {/* Hero / Intro Section */}
        <Box
          display="flex"
          alignItems="center"
          flexDirection={{ xs: "column", md: "row" }}
          mb={4}
        >
          <Box
            component="img"
            src="/CARLOS_HEADSHOT.png"
            alt="Headshot"
            sx={{
              width: 200,
              height: 200,
              borderRadius: "50%",
              objectFit: "cover",
              mr: { md: 4, xs: 0 },
              mb: { xs: 2, md: 0 },
            }}
          />
          <Box>
            <Typography variant="h4" gutterBottom>
              Hello, I’m Carlos Craig
            </Typography>
            <Typography variant="body1">
              Results-driven software engineer with over six years of experience
              in developing scalable mobile and web applications. Proficient in
              React, React Native, and full-stack development. Dedicated to
              continuous learning and innovation, aiming to drive impactful
              solutions in a forward-thinking organization.
            </Typography>
          </Box>
        </Box>

        {/* Projects Section */}
        <Typography variant="h5" gutterBottom>
          Projects
        </Typography>
        <Grid container spacing={2} mb={4}>
          {projects.map((proj, idx) => (
            <Grid item xs={12} md={6} key={idx}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{proj.title}</Typography>
                  <Typography variant="body2">{proj.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Experience Section */}
        <Typography variant="h5" gutterBottom>
          Experience
        </Typography>
        {experiences.map((exp, idx) => (
          <Box key={idx} mb={3}>
            <Typography variant="h6">
              {exp.role} | {exp.company} ({exp.duration})
            </Typography>
            <ul>
              {exp.details.map((detail, i) => (
                <li key={i}>
                  <Typography variant="body2">{detail}</Typography>
                </li>
              ))}
            </ul>
          </Box>
        ))}

        {/* Skills Section */}
        <Typography variant="h5" gutterBottom>
          Skills
        </Typography>
        <Box mb={3}>
          <ul>
            {skills.map((skill, idx) => (
              <li key={idx}>
                <Typography variant="body2">{skill}</Typography>
              </li>
            ))}
          </ul>
        </Box>

        {/* Education */}
        <Typography variant="h5" gutterBottom>
          Education
        </Typography>
        <Box mb={4}>
          <Typography variant="subtitle1" fontWeight="bold">
            Associate’s Degree in Liberal Arts and Sciences
          </Typography>
          <Typography variant="body2">
            San Diego Mesa College (2011 -- 2014)
          </Typography>
          <Typography variant="subtitle1" fontWeight="bold" mt={2}>
            React Native Certification
          </Typography>
          <Typography variant="body2">Udemy (September 2021)</Typography>
        </Box>

        {/* Contact Form */}
        <Typography variant="h5" gutterBottom>
          Contact Me
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 500 }}>
          <TextField
            label="Name"
            name="name"
            fullWidth
            margin="normal"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            fullWidth
            margin="normal"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <TextField
            label="Message"
            name="message"
            multiline
            rows={4}
            fullWidth
            margin="normal"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
          <Button variant="contained" type="submit" sx={{ mt: 2 }}>
            Send
          </Button>
        </Box>

        {/* Footer / Quick Links */}
        <Box mt={6} textAlign="center">
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Carlos Craig |{" "}
            <MUILink
              href="https://www.linkedin.com/in/carloscraig"
              target="_blank"
            >
              LinkedIn
            </MUILink>{" "}
            |{" "}
            <MUILink href="https://github.com/ccraig09" target="_blank">
              GitHub
            </MUILink>{" "}
            | carloscraig.dev
          </Typography>
        </Box>
      </Container>
    </>
  );
}
