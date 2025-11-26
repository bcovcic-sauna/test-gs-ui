import { Button, Card, CardContent, CardHeader, CardTitle, Input, Badge } from '@/components/ui';

function App() {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Test App for gs-ui Package</h1>
      <p>This app tests the gs-ui package installation via npm link.</p>
      
      <Card style={{ marginTop: '2rem' }}>
        <CardHeader>
          <CardTitle>Component Test</CardTitle>
        </CardHeader>
        <CardContent style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label>Input Component:</label>
            <Input placeholder="Type something..." />
          </div>
          
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <Button>Primary Button</Button>
            <Button variant="outline">Outline Button</Button>
            <Button variant="secondary">Secondary Button</Button>
          </div>
          
          <div>
            <Badge>Badge Component</Badge>
            <Badge variant="secondary" style={{ marginLeft: '0.5rem' }}>Secondary Badge</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;

