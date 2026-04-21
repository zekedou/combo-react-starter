[
  import_deps: [:ecto, :ecto_sql, :combo],
  subdirectories: ["priv/*/migrations"],
  inputs: [
    "{mix,.formatter}.exs",
    "{config,lib,test}/**/*.{ex,exs,ceex}",
    "priv/*/seeds.exs"
  ]
]
