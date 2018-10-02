export async function withLoading(action, loadingKey = 'loading') {
  this.setState({ [loadingKey]: true });
  try {
    const data = await action();
    return data;
  } finally {
    this.setState({ [loadingKey]: false });
  }
}
