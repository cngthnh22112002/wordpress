import { Container, Box, Typography, Card, CardContent, CardHeader } from "@mui/material";

interface FeaturesProps {
  title: string;
  description: string;
}

const greenServices: FeaturesProps[] = [
  {
    title: "Sustainable Building Materials",
    description:
      "Our services provide sustainable solutions, such as eco-friendly building materials to reduce environmental impact.",
  },
  {
    title: "Eco-friendly Packaging",
    description:
      "We offer recyclable and biodegradable packaging solutions to promote a greener planet.",
  },
  {
    title: "Recycled Products",
    description:
      "Our products are made from recycled materials, contributing to waste reduction and environmental sustainability.",
  },
];

export const FeaturesSection = () => {
  return (
    <Container className="green-services-container">
      <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
        Our Green Services
      </Typography>
      <Typography variant="subtitle1" textAlign="center" color="text.secondary" gutterBottom>
        Explore our range of eco-conscious services designed to support a sustainable future.
      </Typography>
      <Box 
        className="green-services-box"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 2,
          mt: 4
        }}
      >
        {greenServices.map(({ title, description }) => (
          <Card key={title} className="green-services-card" sx={{ flex: 1 }}>
            <CardHeader
              title={
                <Typography variant="h6" fontWeight="bold" align="center">
                  {title}
                </Typography>
              }
            />
            <CardContent>
              <Typography color="text.secondary">{description}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
};
