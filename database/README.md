To run the postgres database container you need to have docker installed.  Once that is setup you can launch the db with

```bash 
docker run -d --name postgres -p 5432:5432 -e POSTGRES_PASSWORD=<some-password> br-postgres
```

You can then connect with psql

```bash
brew install postgresql
psql -h localhost -p 5432 -U postgres
```

