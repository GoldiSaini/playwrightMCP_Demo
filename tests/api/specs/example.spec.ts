import { test, expect } from '@playwright/test';

test.describe('API Testing Examples', () => {
  test('should get user data', async ({ request }) => {
    // GET request example
    const response = await request.get('/users/1');
    expect(response.ok()).toBeTruthy();
    
    const userData = await response.json();
    expect(userData).toHaveProperty('id');
    expect(userData).toHaveProperty('name');
  });

  test('should create a new post', async ({ request }) => {
    // POST request example
    const response = await request.post('/posts', {
      data: {
        title: 'Test Post',
        body: 'This is a test post',
        userId: 1
      }
    });
    
    expect(response.ok()).toBeTruthy();
    const postData = await response.json();
    expect(postData).toHaveProperty('id');
    expect(postData.title).toBe('Test Post');
  });

  test('should update user data', async ({ request }) => {
    // PUT request example
    const response = await request.put('/users/1', {
      data: {
        name: 'Updated Name',
        email: 'updated@example.com'
      }
    });
    
    expect(response.ok()).toBeTruthy();
    const updatedData = await response.json();
    expect(updatedData.name).toBe('Updated Name');
  });
}); 