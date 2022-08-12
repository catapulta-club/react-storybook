export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

/* export const decorators = [
  Story => (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeClientProvider>
          <Story />
        </ThemeClientProvider>
      </PersistGate>
    </Provider>
  ),
]; */