exports.handler = async function(event, context) {
  // This function is triggered when a form submission is created
  const submission = JSON.parse(event.body);

  console.log('Form submission received:', submission);

  // You can add custom logic here, like:
  // - Send email notifications
  // - Store in a database
  // - Trigger webhooks

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Submission received' })
  };
};
